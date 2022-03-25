import axios from 'axios';
import {BASE_URL} from "../env"

const api = axios.create();
api.defaults.baseURL = BASE_URL;
/*api.defaults.headers = {
  
};*/

api.interceptors.response.use(
  response => {
    return response;
  },
);

export default api;
