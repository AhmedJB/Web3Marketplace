import { Router } from 'express'
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { Category } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';
const CategoryController = Router();

CategoryController.post('/categories', async (req, res) => {
    const { title, imageUrl, productId } = req.body;
    try {
      const category = await db.category.create({
        data: {
          title,
          imageUrl,
          products: { connect: { id: productId } }, 
        },
        include: {
          products: true,
        },
      });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Error creating category' });
    }
  });

  
  CategoryController.get('/categories', async (req, res) => {
    try {
      const categories = await db.category.findMany({
        include: {
          products: true, 
        },
      });
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching categories' });
    }
  })
export { CategoryController }