import { Router } from 'express'
import { verifcationT } from '~~/types/Verification';
import { ServerRequestException } from '~~/utils/exceptions'
import { ethers } from 'ethers';


const VerificationController = Router();


VerificationController.post("/", (req, res, next) => {
    let data: verifcationT = req.body;
    console.log("verification data ", data)
    try {
        const signerAddr = ethers.verifyMessage(data.address, data.signature);
        if (signerAddr !== data.address) {
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