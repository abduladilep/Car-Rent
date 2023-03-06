import axios from 'axios'





export const getAllCars=()=>async dispatch=>{

    dispatch({type:'LOADING',payload:true})
    try{
       
        const response= await axios.get('/api/cars/getallcars')

        console.log("response: ", response.data);

        
        

        dispatch({type:"GET_ALL_CARS",payload:response.data})
        
        dispatch({type:'LOADING',payload:false})


        }catch(err){
            console.log(err);
            dispatch({type:'LOADING',payload:false})


        }

    }



