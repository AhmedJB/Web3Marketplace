import { Router } from 'express'
import { ServerRequestException } from '~~/utils/exceptions'
import { db } from '~/index';
import { TestModel } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { handleCreateMissingError } from '~~/utils/prismaHandler';






const TestController = Router();


TestController.get('/', async (req, res, next) => {
    try {
        let data = await db.testModel.findMany().catch(
            (err: PrismaClientValidationError) => {
                throw new ServerRequestException(handleCreateMissingError(err.message))
            }
        )
        console.log("hello")
        console.log(data)
        return res
            .status(200)
            .json(data)
    } catch (err: any) {
        next(err)
    }

})

TestController.post("/", async (req, res, next) => {
    try {
        let body: TestModel = req.body;
        let r = await db.testModel.create({
            data: body
        }).catch(
            (err: PrismaClientValidationError) => {
                throw new ServerRequestException(handleCreateMissingError(err.message))
            }
        )
        console.log(r);
        res
            .status(201)
            .json(r)
    } catch (err: any) {
        console.log(err)
        next(err)
    }

})

TestController.patch("/:id", async (req, res, next) => {
    try {
        console.log("patch")
        const id = Number(req.params.id)
        let body = req.body;
        const test = await db.testModel.update({
            where: {
                id
            },
            data: body
        }).catch(
            (err: PrismaClientValidationError) => {
                throw new ServerRequestException(handleCreateMissingError(err.message))
            }
        )
        res
            .status(200)
            .json(test)
    } catch (err: any) {
        next(err)
    }
})

TestController.delete("/:id", async (req, res, next) => {
    try {
        console.log("delete")
        const id = Number(req.params.id)
        const test = await db.testModel.delete({
            where: {
                id
            }
        }).catch(
            (err: PrismaClientValidationError) => {
                throw new ServerRequestException(handleCreateMissingError(err.message))
            }
        )
        res
            .status(200)
            .json(test)
    } catch (err: any) {
        next(err)
    }
})



export { TestController }