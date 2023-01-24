import axios from 'axios';
import { backendUrl } from './backendUrl';

export const customerProducts = async (customerproducts) => {
  const response = await axios.post(`${backendUrl}/api_post_clientes_produtos.php`, customerproducts);
  return response.data;
};
