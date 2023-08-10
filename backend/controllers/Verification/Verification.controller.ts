import { Router } from 'express'
import { verifcationT } from '~~/types/Verification';
import { ServerRequestException } from '~~/utils/exceptions'
import { ethers } from 'ethers';
import { verifySignature } from '~~/utils/helper';
import { db } from '~/index';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';


const VerificationController = Router();


VerificationController.post("/", async (req, res, next) => {
    let data: verifcationT = req.body;
    console.log("verification data ", data)
    try {
        let res_sig = verifySignature(data.address, data.signature)
        if (!res_sig) {
            throw new ServerRequestException("Signature Verification Failed")
        }
        const userData = await db.userModel.findUnique({
            where:
              { address: data.address /* hna fen mab9atch katgheni omkltom */ }
          }).catch(
            (err: PrismaClientValidationError) => {
              throw new ServerRequestException(handleCreateMissingError(err.message))
            }
          );
          if (!userData) {
            console.log("Creating new user")
            // if there is no user matching address
            let newUserData = await db.userModel.create({
              data: {
                address: data.address
              }
            }).catch(
              (err: PrismaClientValidationError) => {
                throw new ServerRequestException(handleCreateMissingError(err.message))
              }
            )
            res.json(newUserData)
          } 
        return res.
            status(200)
            .json({
                verified: true
            });
    } catch (err) {
        next(new ServerRequestException("Signature Verification Failed"))
    }

})


export { VerificationController }