import axios from 'axios';
import { API_BASE_URL } from '../../config';
export const saveProcess = async (data, update = null) =>{
    
    let response;
    if(update === null){
        const url = API_BASE_URL+'/process';
        response = await axios.post(url,data,{
            headers:{
                accept:"application/json"
            }
        });
    }else{
        const url = API_BASE_URL+'/process/'+update;
        response = await axios.post(url,data,{
            headers:{
                accept:"application/json"
            }
        });
    }
    
    return response;
}