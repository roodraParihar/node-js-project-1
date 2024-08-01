import userModel from "../models/userModel.js"

export const resisterController = async (req,res,next) => {
    try {
        const {name,email,password} = req.body
        // validate
        if (!name){
                next("name is required")
        }

        if (!email){
            next("email is required")
    }

    if (!password){
        next("password is required and greater than 6 digits")
}

const exisitingUser = await userModel.findOne({email})
if (exisitingUser){
   next("email already registered please login")
} 

const user = await userModel.create({name, email,password});
res.status(201).send({
    success:true,
    message: "user created successfully",
    user,
});
        
    } catch (error) {
       next(error);
        
    }
} 