import { ReactComponent as Logo } from "../../assets/logo.svg"; /* Name the image */
import "./styles.css";

function Navbar() {
  return (
    <nav className="main-navbar">
      <Logo />
      <a href="/" className="logo-text">
        DS Delivery
      </a>
    </nav>
  );
}

export default Navbar;
