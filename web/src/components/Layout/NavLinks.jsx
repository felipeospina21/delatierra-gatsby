import React from "react";
import { Link } from "gatsby";
import "./NavLinks.styles.scss";

function NavLinks({ toggleNav }) {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" onClick={toggleNav}>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/conocenos" onClick={toggleNav}>
          Conócenos
        </Link>
      </li>
      <li>
        <Link to="/productos" onClick={toggleNav}>
          Productos
        </Link>
      </li>
      <li>
        <Link to="/contacto" onClick={toggleNav}>
          Contacto
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={toggleNav}>
          Recetas/Tips
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
