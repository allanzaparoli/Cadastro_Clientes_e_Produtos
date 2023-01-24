import {
  Typography, Box, TextField, Button,
} from '@mui/material';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import { newCustomerValidation } from 'utils';
import { createNewCustomer } from 'services';
import { Feedback } from 'components';

export function NewCustomerForm() {
  const [feedback, setFeedback] = useState({ open: false, message: '', status: '' });

  const onSubmit = async (form, resetForm) => {
    try {
      await createNewCustomer(form);
      const result = 'Cliente cadastrado com sucesso!';
      resetForm();
      setFeedback({ open: true, message: result, status: 'success' });
      return result;
    } catch (err) {
      const result = 'Erro ao cadastrar cliente, tente novamente!';
      setFeedback({ open: true, message: result, status: 'error' });
      return result;
    }
  };

  const INITIAL_FORM_VALUES = {
    cnpj: '',
    endereco: '',
    razaoSocial: '',
    nomeFantasia: '',
    cep: '',
    email: '',
    telefone: '',
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: newCustomerValidation,
    onSubmit: () => onSubmit(formik.values, formik.resetForm),
  });

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Typography variant="h5">Cadastro de novo cliente</Typography>
      </Box>
      <Box mt={2}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="cnpj"
            type="number"
            label="CNPJ"
            variant="outlined"
            value={formik.values.cnpj}
            onChange={formik.handleChange}
            error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
            helperText={formik.touched.cnpj && formik.errors.cnpj}
          />
          <TextField
            fullWidth
            id="endereco"
            label="Endereço"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.endereco}
            onChange={formik.handleChange}
            error={formik.touched.endereco && Boolean(formik.errors.endereco)}
            helperText={formik.touched.endereco && formik.errors.endereco}
          />
          <TextField
            fullWidth
            id="razaoSocial"
            label="Razão Social"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.razaoSocial}
            onChange={formik.handleChange}
            error={formik.touched.razaoSocial && Boolean(formik.errors.razaoSocial)}
            helperText={formik.touched.razaoSocial && formik.errors.razaoSocial}
          />
          <TextField
            fullWidth
            id="nomeFantasia"
            label="Nome Fantasia"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.nomeFantasia}
            onChange={formik.handleChange}
            error={formik.touched.nomeFantasia && Boolean(formik.errors.nomeFantasia)}
            helperText={formik.touched.nomeFantasia && formik.errors.nomeFantasia}
          />
          <TextField
            fullWidth
            id="cep"
            label="CEP"
            variant="outlined"
            type="number"
            sx={{ mt: 2 }}
            value={formik.values.cep}
            onChange={formik.handleChange}
            error={formik.touched.cep && Boolean(formik.errors.cep)}
            helperText={formik.touched.cep && formik.errors.cep}
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="telefone"
            label="Telefone"
            type="number"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.telefone}
            onChange={formik.handleChange}
            error={formik.touched.telefone && Boolean(formik.errors.telefone)}
            helperText={formik.touched.telefone && formik.errors.telefone}
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ mt: 2 }}>
            Cadastrar
          </Button>
        </form>
      </Box>
      <Feedback
        open={feedback.open}
        setFeedback={setFeedback}
        status={feedback.status}
        message={feedback.message}
      />
    </Box>
  );
}
