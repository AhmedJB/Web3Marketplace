import cors from 'cors'
import express from 'express'
import { config } from './config'
import { TestController } from '~~/controllers/Test/test.controller'
import { PrismaClient } from '@prisma/client';
import { ExceptionsHandler } from '~~/middlewares/exceptions.handler';
import { UserController } from '~~/controllers/User/user.controller';
import { VerificationController } from '~~/controllers/Verification/Verification.controller';
import { ProductController } from '~~/controllers/Product/Product.controller';
import { CategoryController } from '~~/controllers/Category/Category.controller';



export const db = new PrismaClient()

const app = express()

app.use(express.json())

app.use(cors())

/**
 * User Controller
 * a controller used to modify / get user information based on wallet address
 */
app.use("/api/user", UserController)

/**
 * Test Controller 
 * a demo for crud operations using prisma
 * and async error handling
 */
app.use("/tests", TestController)


/**
 * Verification Controller
 * verify user generated signature
 */
app.use("/verify", VerificationController)


/**
 * Product Controller
 * - upload / create product
 * 
 */

app.use("/product", ProductController)



/**
 * Category Controller
 * - 
 * 
 */
app.use("/category", CategoryController)





/**
 * serving static images
 */
app.use('/images', express.static('uploads'))


/**
 * Error Handler
 */
app.use(ExceptionsHandler)

app.listen(config.API_PORT, () => {
  console.log(`Server running on http://localhost:${config.API_PORT}`);
});
