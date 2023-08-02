import { Router } from 'express'
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
import { upload } from '~~/configurations/multerConfig';
import { verifySignature } from '~~/utils/helper';
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
                    }
                }).catch(
                    (err: PrismaClientValidationError) => {
                        throw new ServerRequestException(handleCreateMissingError(err.message))
                    });
                return res
                    .status(201)
                    .json({
                        created: true
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


ProductController.get("/list", async (req, res, next) => {
    try {
      const products = await db.product.findMany(); 
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      next(err);
    }
  });

export { ProductController }