import axios from 'axios';
import store, { dataAction } from '../../store';
import { API_GET, API_POST } from '../utils/enums';
export const api_wrapper = async (url, action) => {

    try{
        var response;
        if(action.type === API_POST){
            response = await axios.post(url, data); 
        }else if(action.type === API_GET){
            response = await axios.get(url)
        }
        
        if(response.status === 200 || response.status === 201 || response.status === 204)
          return response;
    } catch (error){
        if(error.response === undefined)
            store.dispatch(dataAction.setAlert({type:'error', message: error.message }));
        else if(error.response.status === 500)
            store.dispatch(dataAction.setAlert({type:'error', message: "Something went wrong!" }));
        else
            store.dispatch(dataAction.setAlert({type:'error', message:error.response.data.message }));
        console.log(error);
    }
    
}

