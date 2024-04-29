import axios from 'axios';
import { API_BASE_URL } from '../../config';
export const aiCreateProcess = async (data) =>{
    
    
    const url = API_BASE_URL+'/process/ai';
    const response = await axios.post(url,data,{
        headers:{
            accept:"application/json"
        }
    });
    
    
    return response;
}