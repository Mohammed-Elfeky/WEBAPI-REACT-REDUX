import Joi from "joi";
export const nameSchema = Joi.object({
    name: Joi.string()
        .required()
})
export const descSchema = Joi.object({
    desc: Joi.string()
        .required()
})
