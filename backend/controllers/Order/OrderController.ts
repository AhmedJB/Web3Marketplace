import { Router } from 'express';
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { Order } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
import { verifySignature } from '~~/utils/helper';
const OrderController = Router();


// create Order 
OrderController.post('/create', async (req, res, next) => {
    try {
      const body = req.body;
  
      const newOrder = await db.order.create({
        data: {
          orderId: body.orderId,
          sellerId: body.sellerId,  
          buyerId: body.buyerId,    
          productId: body.productId,
        }
      });

      res.json(newOrder);
    } catch (error) {
      console.error('Error creating order:', error);
      next(error);
    }
  });



export { OrderController }
