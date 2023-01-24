import axios from 'axios';
import { backendUrl } from './backendUrl';

export const getCustomerProducts = async () => {
  const response = await axios.get(`${backendUrl}/api_get_clientes_produtos.php`);
  return response.data;
};
