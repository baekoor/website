import imagelogo from "./pages/logo.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={imagelogo} alt="logo" className="logo" />
      <div>
        <ul>
          <CustomLink href="https://github.com/ardr12345" className="icons">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              style={{ color: "#8c52ff" }}
              className="icon-spacing"
            />
          </CustomLink>
          <CustomLink
            href="https://www.linkedin.com/in/aleksander-richard-russa-60879b263/"
            className="icons"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ color: "#8c52ff" }}
              className="icon-spacing"
            />
          </CustomLink>
        </ul>
      </div>
      <a href="/proj" className="title">
        ./PROJ
      </a>
      <ul>
        <CustomLink href="/home">HOME</CustomLink>
        <CustomLink href="/about">ABOUT</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props} target="_blank">
          {children}
        </a>
      </li>
    );
  } else {
    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    );
  }
}
