import userModel from "../models/userModel.js"

export const resisterController = async (req,res) => {
    try {
        const {name,email,password} = req.body
        // validate
        if (!name){
                return res.status(400).send({success:false,message:"please provide name"})
        }

        if (!email){
            return res.status(400).send({success:false,message:"please provide email"})
    }

    if (!password){
        return res.status(400).send({success:false,message:"please provide password"})
}

const exisitingUser = await userModel.findOne({email})
if (exisitingUser){
    return res.status(200).send({
        success:false,
        message: "email already resister please login"
    });
} 

const user = await userModel.create({name, email,password});
res.status(201).send({
    success:true,
    message: "user created successfully",
    user,
});
        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message:"error in resister controller",
            success:false,
            error
        })
        
    }
} 