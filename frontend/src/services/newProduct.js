import axios from 'axios';
import { backendUrl } from './backendUrl';

export const createNewProduct = async (product) => {
  const response = await axios.post(`${backendUrl}/api_post_novo_produto.php`, product);
  return response.data;
};
