import axios from "axios"
import {message} from "antd"

export const userLogin=(reqObj)=> async dispatch =>{
    dispatch({type:'LOADING',payload:true})
    try{
       
        const response= await axios.post('/api/users/login', reqObj)
        console.log("its response")
        localStorage.setItem('User',JSON.stringify(response.data))
        
        message.success("Login successful")
        dispatch({type:'LOADING',payload:false})
        setTimeout(()=>{
            window.location.href="/"
        },5000)
        
        

        }catch(err){
            console.log(err);
            message.success("User not found")
            dispatch({type:'LOADING',payload:false})


        }
}

export const userRegister=(reqObj)=> async dispatch =>{
    dispatch({type:'LOADING',payload:true})
    try{
       
       
        const response= await axios.post('/api/users/register', reqObj)
        console.log("its response",response)
        dispatch({type:'LOADING',payload:false})
        message.success("Register successful")
        setTimeout(()=>{
            window.location.href="/login"
        },5000)
        

        
        
        
    }catch(err){
            message.success("something wnet wrong ")
            console.log("error",err);
            dispatch({type:'LOADING',payload:false})


        }
}

