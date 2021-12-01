
import { 

    GET_COUNTRIES,
    GET_COUNTRIES_BEGIN,
    GET_COUNTRIES_ERROR,
    
} from '../utils/actions';

const app_reducer = (state,action) => {
   if(action.type === GET_COUNTRIES_BEGIN){

    return{...state,dataLoading:true}
   }

   if(action.type === GET_COUNTRIES){

    console.log(action.payload);

    return {...state,
        dataLoading:false,
        dataCountries:action.payload,
    }
   }

   if(action.type === GET_COUNTRIES_ERROR){

    return {...state,dataLoading:false,dataError:true}
   }


    

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default app_reducer;