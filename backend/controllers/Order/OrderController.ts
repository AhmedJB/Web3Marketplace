import { Router } from 'express';
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { Order } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
import { verifySignature } from '~~/utils/helper';
import { OrderDataDBT, OrderDataT } from '~~/types/order';
const OrderController = Router();


// create Order 
OrderController.post('/create/:address', async (req, res, next) => {
    try {
      const body : {
        signature : string,
        data : OrderDataT
      } = req.body;
      const add = req.params.address
      let res_sig = verifySignature(add, body.signature);
      if (res_sig){
        // get buyer
        let buyer = await db.userModel.findUnique({
          where : {
            address : body.data.buyerAdd
          }
        })
        if (buyer){
          let {
            buyerAdd,
            ...temp
          } = body.data
  
          let body2 = {
            ...temp,
            buyerId : buyer.id
          }
  
          const newOrder = await db.order.create({
            data: body2
          });
          res.json({oid :newOrder.id});
        }else{
          throw new ServerRequestException("Buyer not found");
        }

        
      }else {
        throw new ServerRequestException("Signature Verification Failed");
      }
  
      
    } catch (error) {
      console.error('Error creating order:', error);
      next(error);
    }
  });


// delete order
OrderController.delete("/delete/:id/:address/:signature", async (req, res, next) => {
  try {
      const add = req.params.address
      console.log("address ", add)
      let body = req.params
      let orderId = Number(body.id);
      let res_sig = verifySignature(add, body.signature);
      if (res_sig) {
          const order = await db.order.findUnique({ 
              where: { id: orderId },
              select : {
                id : true,
                buyer : true
              } 
          });
            if (!order) {
              return res.status(404).json({ message: "Order not found" });
            }
            if (order.buyer.address !==  add){
              throw new ServerRequestException("Not the order buyer");
            }
           
            let order_ = await db.order.delete({ 
              where: { id: orderId }
          });
            console.log(order_)
            return res.status(200).json(order_);
      }else {
          throw new ServerRequestException("Signature Verification Failed");
      }    
      } catch (err) {
        console.log(err);
        next(err);
      }

   
});


OrderController.get("/mysellings/:address/:signature", async (req, res, next) => {
  try {
    const { address,signature } = req.params;
    let res_sig = verifySignature(address, signature);
    if (res_sig){
      const userData = await db.userModel.findUnique({
        where: { address },
        include: {
          selling : true
        },
      });
  
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json(userData.selling);

    }else {
      throw new ServerRequestException("Signature Verification Failed");
  }
    
  } catch (err) {
    console.log(err);
    next(err);
  }
});

OrderController.get("/mybuyings/:address/:signature", async (req, res, next) => {
  try {
    const { address,signature } = req.params;
    let res_sig = verifySignature(address, signature);
    if (res_sig){
      const userData = await db.userModel.findUnique({
        where: { address },
        include: {
          buying : true
        },
      });
  
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
  

  
      return res.status(200).json(userData.buying);

    }else {
      throw new ServerRequestException("Signature Verification Failed");
  }
    
  } catch (err) {
    console.log(err);
    next(err);
  }
});





export { OrderController }
