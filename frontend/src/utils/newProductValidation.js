import * as yup from 'yup';

export const newProductValidation = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatório'),
  versao: yup.string().required('Versão é obrigatório'),
});
