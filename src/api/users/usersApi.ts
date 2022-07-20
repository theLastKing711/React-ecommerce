import { RegisterUser } from './../../store/UserSlice';
import axios from "axios";



export const registerUser = async (user: RegisterUser): Promise<any> => {

    const api_url = "http://localhost:72678/authenticate/register"
    
    const res = await axios.post(api_url, user)

    return res
    
}