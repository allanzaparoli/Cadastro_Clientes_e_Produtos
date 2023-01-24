import {
  Typography, Box, TextField, Button,
} from '@mui/material';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import { newProductValidation } from 'utils';
import { createNewProduct } from 'services';
import { Feedback } from 'components';

export function NewProductForm() {
  const [feedback, setFeedback] = useState({ open: false, message: '', status: 'success' });

  const onSubmit = async (form, resetForm) => {
    try {
      await createNewProduct(form);
      const result = 'Produto cadastrado com sucesso!';
      resetForm();
      setFeedback({ open: true, message: result, status: 'success' });
      return result;
    } catch (err) {
      const result = 'Erro ao cadastrar produto, tente novamente!';
      setFeedback({ open: true, message: result, status: 'error' });
      return result;
    }
  };

  const INITIAL_FORM_VALUES = {
    nome: '',
    descricao: '',
    versao: '',
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: newProductValidation,
    onSubmit: () => onSubmit(formik.values, formik.resetForm),
  });

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Typography variant="h5">Cadastro de novo Produto</Typography>
      </Box>
      <Box mt={2}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="nome"
            label="Nome"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.nome}
            onChange={formik.handleChange}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
          />
          <TextField
            fullWidth
            id="descricao"
            label="Descrição"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.descricao}
            onChange={formik.handleChange}
            error={formik.touched.descricao && Boolean(formik.errors.descricao)}
            helperText={formik.touched.descricao && formik.errors.descricao}
          />
          <TextField
            fullWidth
            id="versao"
            label="Versão"
            type="number"
            variant="outlined"
            sx={{ mt: 2 }}
            value={formik.values.versao}
            onChange={formik.handleChange}
            error={formik.touched.versao && Boolean(formik.errors.versao)}
            helperText={formik.touched.versao && formik.errors.versao}
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
