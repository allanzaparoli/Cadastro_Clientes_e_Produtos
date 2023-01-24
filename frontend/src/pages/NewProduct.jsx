import {
  Header, Footer, Container, NewProductForm,
} from 'components';

export function NewProduct() {
  return (
    <>
      <Header />
      <Container>
        <NewProductForm />
      </Container>
      <Footer />
    </>
  );
}
