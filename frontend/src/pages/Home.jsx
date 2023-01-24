import { Header, Footer } from '../components';
import './styles.css';

export function Home() {
  return (
    <>
      <Header />
      <div>
        <h1 className="homestyle">Olá, Seja bem vindo! Escolha uma das opções!</h1>
      </div>
      <Footer />
    </>
  );
}
