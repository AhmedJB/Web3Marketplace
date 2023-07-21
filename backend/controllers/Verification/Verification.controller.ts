import { Router } from 'express'
import { verifcationT } from '~~/types/Verification';
import { ServerRequestException } from '~~/utils/exceptions'
import { ethers } from 'ethers';
import { verifySignature } from '~~/utils/helper';


const VerificationController = Router();


VerificationController.post("/", (req, res, next) => {
    let data: verifcationT = req.body;
    console.log("verification data ", data)
    try {
        let res_sig = verifySignature(data.address, data.signature)
        if (!res_sig) {
            throw new ServerRequestException("Signature Verification Failed")
        }
        return res.
            status(200)
            .json({
                verified: true
            });
    } catch (err) {
        throw new ServerRequestException("Signature Verification Failed")
    }

})


export { VerificationController }