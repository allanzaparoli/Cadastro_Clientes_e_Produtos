import { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import './styles.css';
import Input from '@mui/joy/Input';
import { customerProducts, getCustomerProducts, getProducts } from 'services';
import { Feedback } from 'components';

export function CustomerProductsForm() {
  const TOMORROW = dayjs().add(1, 'day');
  const [date, setDate] = useState(TOMORROW);
  const [idUser, setIdUser] = useState('');
  const [idProduct, setIdProduct] = useState('');
  const [feedback, setFeedback] = useState({ open: false, message: '', status: '' });
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  const FORMATTED_DATE = dayjs(date).format('YYYY-MM-DD');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id_cliente: +idUser,
      id_produto: +idProduct,
      validade: FORMATTED_DATE,
    };
    if (!data.id_cliente || !data.id_produto || !data.validade) {
      alert('Preencha todos os campos!');
    }
    try {
      await customerProducts(data);
      const result = 'Produto vinculado com sucesso!';
      setFeedback({ open: true, message: result, status: 'success' });
    } catch (err) {
      const result = 'Erro ao vincular produto, tente novamente!';
      setFeedback({ open: true, message: result, status: 'error' });
    }
  };

  useEffect(() => {
    (async () => {
      const result = await getProducts();
      setProducts(result);
    })();
    (async () => {
      const result = await getCustomerProducts();
      setCustomers(result);
    })();
  }, []);

  useEffect(() => {
    console.log(products);
    console.log(customers);
  }, [products, customers]);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              id="date"
              className="tempostyle"
              label="Data de validade"
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Input
            className="produtostyle"
            id="idUser"
            color="primary"
            disabled={false}
            value={idUser}
            onChange={(e) => setIdUser(e.target.value)}
            placeholder="ID Usuário"
            size="sm"
            variant="outlined"
          />
        </Box>
        <Box>
          <Input
            className="produtostyle"
            id="idProduct"
            color="primary"
            value={idProduct}
            onChange={(e) => setIdProduct(e.target.value)}
            disabled={false}
            placeholder="ID Produto"
            size="sm"
            variant="outlined"
          />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ mt: 2 }}>
            Vincular
          </Button>
        </Box>
      </form>
      <Feedback
        open={feedback.open}
        setFeedback={setFeedback}
        status={feedback.status}
        message={feedback.message}
      />
    </Box>
  );
}
