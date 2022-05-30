import Joi from "joi";
export const catSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
        .required(),
    img: Joi.custom((val,helper)=>{
        if(val==null) return helper.message("the img is required");
        return true
    })
})
export const catSchemaEdit = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
        .required()
})