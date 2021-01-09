import "./styles.css";

import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/youtube.svg";

function Footer() {
  return (
    <footer className="main-footer">
      Faça seu pedido que entregamos quentinho na sua casa!
      <div className="footer-icons">
        <a href="https://www.youtube.com" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
