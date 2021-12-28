import classes from "./Header.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const mobileNavHandler = () => {
    document.body.classList.toggle("open-mobile-nav");
  };

  const closeMobileNav = () => {
    document.body.classList.remove("open-mobile-nav");
  };

  return (
    <header>
      <div className={classes.sub_header}>
        <p>
          <a href="mailto:info@bytequests.com">
            <i class="fas fa-envelope"></i> &nbsp;info@bytequests.com
          </a>
        </p>
        <p>
          <a href="tel:+919711999770">
            <i class="fas fa-phone"></i> +91 9711999770<span>, +1833-880-3355</span>
          </a>
        </p>
      </div>
      <nav className={classes.nav}>
        <NavLink to="/" activeClassName={classes.active}>
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink>

        <ul className={`${classes.nav_container} mobile-nav-container`}>
          <li onClick={closeMobileNav}>
            <NavLink to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li onClick={closeMobileNav}>
            <NavLink to="/about" activeClassName={classes.active}>
              About us
            </NavLink>
          </li>
          <li onClick={closeMobileNav}>
            <NavLink to="/services" activeClassName={classes.active}>
              Services
            </NavLink>
          </li>
          <li onClick={closeMobileNav}>
            <NavLink to="/products" activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
          <li onClick={closeMobileNav}>
            <NavLink to="/portfolio" activeClassName={classes.active}>
              Portfolio
            </NavLink>
          </li>
          <li onClick={closeMobileNav}>
            <NavLink to="/about" activeClassName={classes.active}>
              <button className={`btn ${classes.btn_contact}`}>Contact us</button>
            </NavLink>
          </li>
        </ul>
        <button className="nav-button" onClick={mobileNavHandler}>
          <i className="fas fa-bars nav-icon open-nav "></i>
          <i className="fas fa-times nav-icon close-nav "></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;
