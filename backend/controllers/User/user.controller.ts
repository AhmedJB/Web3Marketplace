import { Router } from 'express';
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { UserModel } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
import { verifySignature } from '~~/utils/helper';
const UserController = Router();

// GET 
/* UserController.get('/api/user', async (req, res) => {
  try {
    const userData = await db.userModel.findMany();
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
}); */

// Get Unique user
UserController.post('/:address', async (req, res, next) => {
  try {
    console.log("fetching User..")
    const add = req.params.address
    let body: { signature: string } = req.body
    let res_sig = verifySignature(add, body.signature);
    if (res_sig) {

      const userData = await db.userModel.findUnique({
        where:
          { address: add /* hna fen mab9atch katgheni omkltom */ }
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
            address: add
          }
        }).catch(
          (err: PrismaClientValidationError) => {
            throw new ServerRequestException(handleCreateMissingError(err.message))
          }
        )
        res.json(newUserData)
      } else {
        console.log("User Found")
        res.json(userData);
      }

    } else {
      throw new ServerRequestException("Signature Verification Failed");
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    next(error)
  }
});

// POST 
/* UserController.post('/api/user', async (req, res) => {
  const { firstName, lastName, country, city } = req.body;
  try {
    const userData = await db.userModel.create({
      data: { firstName, lastName, country, city },
    });
    res.json(userData);
  } catch (error) {
    console.error('Error creating user data:', error);
    res.status(500).json({ error: 'Error creating user data' });
  }
}); */

// PATCH 
UserController.patch('/:address', async (req, res, next) => {
  try {
    console.log("fetching User..")
    const add = req.params.address
    let body: { signature: string, data: UserModel } = req.body
    let res_sig = verifySignature(add, body.signature);
    if (res_sig) {
      if (add !== body.data.address) {
        throw new ServerRequestException("Address Missmatch")
      }

      const userData = await db.userModel.update({
        where:
          { address: add /* hna fen mab9atch katgheni omkltom */ },
        data: body.data
      }).catch(
        (err: PrismaClientValidationError) => {
          throw new ServerRequestException(handleCreateMissingError(err.message))
        }
      );

      console.log("User Found")
      res.json(userData);


    } else {
      throw new ServerRequestException("Signature Verification Failed");
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    next(error)
  }
});


UserController.get('/:address', async (req, res, next) => {
  try {
    const add = req.params.address;
    const userData = await db.userModel.findUnique({
      where: { address: add }
    }).catch(
      (err: PrismaClientValidationError) => {
        throw new ServerRequestException(handleCreateMissingError(err.message))
      }
    );
    if (!userData) {
      console.log("User not found");
      res.status(404).json({ message: "User not found" });
    } else {
      console.log("User Found");
      res.json(userData);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    next(error);
  }
});


export { UserController }
