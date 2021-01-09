import Navbar from "./../Navbar";
import Footer from "./../Footer";
import "./styles.css";
import { ReactComponent as MainImage } from "./../../assets/main.svg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br /> que entregamos <br /> pra você!!!
            </h1>
            <h3 className="home-subtitle">
              Escolha o seu pedido e em poucos minutos <br /> levaremos na sua
              porta
            </h3>
            <a href="/" className="home-btn-order">
              FAZER PEDIDO
            </a>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
