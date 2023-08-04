import { z } from "zod"


export const uploadSchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    tags: z.string().nonempty(),
    shippingCost: z.number().nonnegative(),
    shippingFrom: z.string().nonempty(),
    minimumDeliveryTime: z.number().nonnegative(),
    maximumDeliveryTime: z.number().nonnegative(),
    Price: z.number().nonnegative(),
    quantity: z.number().nonnegative(),
})