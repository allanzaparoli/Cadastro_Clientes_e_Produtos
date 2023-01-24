import axios from 'axios';
import { backendUrl } from './backendUrl';

export const createNewCustomer = async (customer) => {
  const sendData = {
    cnpj: customer.cnpj,
    endereco: customer.endereco,
    razao_social: customer.razaoSocial,
    nome_fantasia: customer.nomeFantasia,
    cep: customer.cep,
    email: customer.email,
    telefone: customer.telefone,
  };
  const response = await axios.post(`${backendUrl}/api_post_novo_cliente.php`, sendData);
  return response.data;
};
