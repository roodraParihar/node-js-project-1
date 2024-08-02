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

// token
const token = user.createJWT()


res.status(201).send({
    success:true,
    message: "user created successfully",
    user:{
        name:user.name,
        email:user.email,
        location:user.location
    },
    token
});
        
    } catch (error) {
       next(error);
        
    }
} 


export const loginController = async (req,res,next) =>{
    const {email, password} = req.body
    //validation
    if(!email || !password){
        next('please provide all fields')
    }

    // find user email
    const user = await userModel.findOne({email}).select("+password")
        if(!user){
            next('Invalid username or password')
        }
    

        // compare password 
        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            next('Invalid username or password');
        }

        user.password = undefined;  // for more security of the password

        const token = user.createJWT();
        res.status(200).json({
            success: true,
            message: "Login successfully",
            user,
            token,
        });
};