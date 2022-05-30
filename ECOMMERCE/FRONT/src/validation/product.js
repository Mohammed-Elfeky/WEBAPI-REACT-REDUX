import Joi from "joi";
export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
        .required(),
    img: Joi.custom((val, helper) => {
        if (val == null) return helper.message("the img is required");
        return true
    }),
    price: Joi.number().required(),
    category: Joi.custom((val, helper) => {
        if (!val) return helper.message("category is required");
        return true
    })
})
export const productEditSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
        .required(),
    img: Joi.any(),
    price: Joi.number().required(),
    category: Joi.custom((val, helper) => {
        if (!val) return helper.message("category is required");
        return true
    })
})