
const User =require('../modals/userModel')



const  login= async (req, res) => {
    console.log("hgvdsgh");
    
    const {username,password} = req.body
    console.log("bodyy",req.body);
    
    try {
        const user = await User.findOne({username,password})
        console.log("asvd",user);
        if(user) {
            console.log("user",user);
            res.send(user)
            
        }else{
            return res.status(400).json()

            }
            }
    catch (error) {
        console.log("error", error);
        return res.status(400).json(error)

    }
}
const register = async (req, res) => {
    
    try {
        const newUser = new User(req.body)
        console.log("sdgasdgs",req.body);
       await newUser.save()
        res.send('user registered successfully')
        
        
    }
    catch (error) {
        console.log("reqbodyyy",error);
        return res.status(400).json(error)

    }
}


module.exports = {
    login,
    register
}