import * as yup from 'yup';

export const newCustomerValidation = yup.object().shape({
  cnpj: yup.string().required('CNPJ é obrigatório'),
  endereco: yup.string().required('Endereço é obrigatório'),
  razaoSocial: yup.string().required('Razão Social é obrigatório'),
  nomeFantasia: yup.string().required('Nome Fantasia é obrigatório'),
  cep: yup.string().required('CEP é obrigatório'),
  email: yup.string().required('Email é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório'),
});
