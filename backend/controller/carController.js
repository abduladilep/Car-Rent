const Car=require('../modals/carModel')


const getCar=async (req,res)=>{
    try{
        const cars=await Car.find()
        
        res.send( cars)
        console.log("gsdshd",cars);
    }catch(error) {
        console.log(error);
        return res.status(400).json(error)
    }
}

module.exports=
{
    getCar
}