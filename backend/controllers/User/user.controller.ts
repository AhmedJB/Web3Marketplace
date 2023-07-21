import { Router } from 'express'
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { UserModel } from '@prisma//client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
const UserController = Router();

// GET 
UserController.get('/api/user', async (req, res) => {
    try {
      const userData = await db.userModel.findUnique({ 
        where:
         { id: 1 /* hna fen ghnat omkltom */ } });
      res.json(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Error fetching user data' });
    }
  });
  // POST 
  UserController.post('/api/user', async (req, res) => {
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
  });

  // PATCH 
  UserController.patch('/api/user', async (req, res) => {
    const { id, firstName, lastName, country, city } = req.body;
    try {
      const userData = await db.userModel.update({
        where: { id: id }, // 
        data: { firstName, lastName, country, city },
      });
      res.json(userData);
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ error: 'Error updating user data' });
    }
  });

export { UserController }
