import { Router } from 'express'
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
import { upload } from '~~/configurations/multerConfig';
import { deleteFile, verifySignature } from '~~/utils/helper';
import { ProductT } from '~~/types/Product';




const ProductController = Router();

let numberFields = ["shippingCost", "minimumDeliveryTime", "maximumDeliveryTime", "Price", "quantity"]



/**
 * need category model
 */
ProductController.post("/create/:address", upload.array("image", 4), async (req, res, next) => {
    try {
        const add = req.params.address
        console.log("address ", add)
        let body: { signature: string } = req.body
        let res_sig = verifySignature(add, body.signature);
        if (res_sig) {
            let files = req.files as Express.Multer.File[];
            console.log(files)
            let body = req.body as ProductT;
            let { signature, category, ...newBody } = body
            console.log(body);
            for (let key of numberFields) {
                (newBody as any)[key as keyof typeof newBody] = Number(newBody[key as keyof typeof newBody]);
            }
            (newBody as any).isAuction = (newBody.isAuction as unknown as string) === "true"
            console.log(newBody)
            //return res.status(200).json({ test: true })

            const userData = await db.userModel.findUnique({
                where:
                    { address: add }
            }).catch(
                (err: PrismaClientValidationError) => {
                    throw new ServerRequestException(handleCreateMissingError(err.message))
                }
            );
            console.log(userData)
            if (!userData) {
                throw new ServerRequestException("User Not found");
            } else {
                // generating images array 
                let im_array = files?.map((e, i) => {
                    let relative_path = "/uploads/" + e.filename;
                    let url = "/images/" + e.filename
                    let temp = {
                        filename: e.filename,
                        physicalPath: relative_path,
                        fileUrl: url
                    }
                    return temp
                })
                // create products
                let userAndProduct = await db.userModel.update({
                    where: {
                        id: userData?.id
                    },
                    data: {
                        products: {
                            create: [
                                {
                                    ...newBody,
                                    catgId: Number(category),
                                    images: {
                                        create: im_array
                                    }
                                }
                            ]
                        }
                    },
                    select: {
                        products: {
                          select: {
                            id: true // Select the 'id' field of the newly created product
                          }
                        }
                      }
                }).catch(
                    (err: PrismaClientValidationError) => {
                        throw new ServerRequestException(handleCreateMissingError(err.message))
                    });
                console.log(userAndProduct)
                return res
                    .status(201)
                    .json({
                        pid : userAndProduct.products[userAndProduct.products.length - 1].id
                    })
            }

        } else {
            throw new ServerRequestException("Signature Verification Failed");
        }

    } catch (err: any) {
        console.log(err)
        next(err)
    }

})

// delete product
ProductController.delete("/delete/:id/:address/:signature", async (req, res, next) => {
    try {
        const add = req.params.address
        console.log("address ", add)
        let body = req.params
        let productId = Number(body.id);
        let res_sig = verifySignature(add, body.signature);
        if (res_sig) {
            const product = await db.product.findUnique({ 
                where: { id: productId }, 
                include: {
                    images:{
                      select:{
                          id:true,
                          fileUrl:true,
                          filename:true,
                      }
                    }
                  },
            });
              if (!product) {
                return res.status(404).json({ message: "Product not found" });
              }
              // deleting images
              for (let image of product.images) {
                deleteFile("./uploads/"+image.filename);
              }
              let product_ = await db.product.delete({ 
                where: { id: productId }
            });
              console.log(product_)
              return res.status(200).json(product_);
        }else {
            throw new ServerRequestException("Signature Verification Failed");
        }    
        } catch (err) {
          console.log(err);
          next(err);
        }

     
  });


//list product with user info
ProductController.get("/list", async (req, res, next) => {
    try {
      
        const products = await db.product.findMany({
            include: {
              user: {
                select: {
                id:true,
                  firstName: true,
                  lastName: true,
                },
              },
              images:{
                select:{
                    id:true,
                    fileUrl:true,
                    filename:true,
                }

              }
            },
          });
          console.log('Fetched products:', products);
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      next(err);
    }
  });

  
  ProductController.get("/:id", async (req, res, next) => {
    try {
      const productId = parseInt(req.params.id);
      const product = await db.product.findUnique({ 
        where: { id: productId }, 
        include: {
            images:{
              select:{
                  id:true,
                  fileUrl:true,
                  filename:true,
              }
            }
          },
    });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      console.log(product);
      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
      next(err);
    }
  });



  ProductController.get("/myproduct/:address/:signature", async (req, res, next) => {
    try {
      const { address,signature } = req.params;
      let res_sig = verifySignature(address, signature);
      if (res_sig){
        const userData = await db.userModel.findUnique({
          where: { address },
          include: {
            products: {
              include: {
                images: true,
                category: false,
              },
            },
          },
        });
    
        if (!userData) {
          return res.status(404).json({ message: "User not found" });
        }
    
        console.log(`Fetched products for user at address ${address}:`, userData.products);
    
        return res.status(200).json(userData.products);

      }else {
        throw new ServerRequestException("Signature Verification Failed");
    }
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  });

  
  
export { ProductController }