import {
  Header, Footer, Container, NewCustomerForm,
} from 'components';

export function NewCustomer() {
  return (
    <>
      <Header />
      <Container>
        <NewCustomerForm />
      </Container>
      <Footer />
    </>
  );
}
