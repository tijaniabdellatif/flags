import React ,{useContext,useReducer,useEffect} from 'react';
import reducer from '../reducers/app_reducer';
import {countries_url as url} from '../utils/constants';
import {region_url as regionUrl} from '../utils/constants';
import axios from 'axios';


import { 

    GET_COUNTRIES_BEGIN,
    GET_COUNTRIES,
    GET_COUNTRIES_ERROR,
    GET_COUNTRIES_REGION

} from '../utils/actions';

const initialState = {

    dataLoading:false,
    dataError:false,
    dataCountries : [],
    dataRegion:[]

}

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

const [state,dispatch] = useReducer(reducer,initialState);

const fetchCountries = async (url) => {

     dispatch({type:GET_COUNTRIES_BEGIN});

     try{

        const response = await axios.get(url,{
            headers: {'Content-Type': 'application/json'}
        })

        const countries = response.data;
        console.log(countries);
        dispatch({type:GET_COUNTRIES,payload:countries});

     }
     catch(error){

          
        dispatch({type:GET_COUNTRIES_ERROR});
     }

}




useEffect(() => {
     
    fetchCountries(`${url}`)
}, [])




    return(
        <AppContext.Provider value={{...state,fetchCountries}}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {

    return useContext(AppContext);
}