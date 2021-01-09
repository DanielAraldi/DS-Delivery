import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg"; /* Name the image */

import "./styles.css";

function Navbar() {
  return (
    <nav className="main-navbar">
      <Logo />
      <Link to="/" className="logo-text">
        DS Delivery
      </Link>
    </nav>
  );
}

export default Navbar;
