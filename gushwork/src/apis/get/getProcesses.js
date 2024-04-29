import axios from 'axios';
import { API_BASE_URL } from '../../config';
export const getProcesses = async () =>{
    const url = API_BASE_URL+'/process';
    const response = await axios.get(url,{
        headers:{
            accept:"application/json"
        }
    });
    return response;
}