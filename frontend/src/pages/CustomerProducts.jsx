import {
  Header, Container, Footer, CustomerProductsForm,
} from 'components';

export function CustomerProducts() {
  return (
    <>
      <Header />
      <Container>
        <CustomerProductsForm />
      </Container>
      <Footer />
    </>
  );
}
