import UserSchema from "../Model/User.js";

// register user 

export const Registeruser = async (req, res) => {
    const { fName, lName, email, password } = req.body

    try {
        const userExits = await UserSchema.findOne({ email: email })
        if (userExits) {
            res.status(400).json('email already exits')
        }
        else {
            const createUser = await UserSchema.create({
                fName: fName,
                lName: lName,
                email: email,
                password: password
            })

            res.status(200).json(createUser)
        }

    } catch (error) {
        console.log(error);
    }
}

//login user 

export const userLogin = async (req,res) =>{
    const {email , password} = req.body

    try {
        const findData = await UserSchema.findOne({email , password})
        if(findData){
            res.status(200).json('user login successfully')
        }
        else{
            res.status(400).json('invalid user email and passord')
        }
    } catch (error) {
        console.log(error);
    }
}