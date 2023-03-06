const initialData={
    cars:[ ]
}
export const CarsReducer=(state=initialData,action)=>{
    switch(action.type){

        case'GET_ALL_CARS' :{

    console.log("stte",state);

            return{
                ...state,

                cars:action.payload
            }
        }
        default:return state
    }
}

