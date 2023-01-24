import axios from 'axios';
import { backendUrl } from './backendUrl';

export const getProducts = async () => {
  const response = await axios.get(`${backendUrl}/api_get_produtos.php`);
  return response.data;
};
