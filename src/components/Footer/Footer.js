import classes from "./Footer.module.css";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer>
      <div className={classes.footer_top}>
        <div>
          <h2>Let's Discuss</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={classes.sign_up}>
          <button className="btn">Sign up</button>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <div>
          <img src={logo} alt="" className={classes.footer_logo} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias similique nostrum quidem qui eius laudantium.</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Our Clients</li>
            <li>Privacy Policy</li>
            <li>Our Benefits</li>
          </ul>
        </div>
        <div>
          <h4>Information</h4>
          <ul>
            <li>Our Clients</li>
            <li>Privacy Policy</li>
            <li>Our Benefits</li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>+91 9711999770, +1833-880-3355</li>
            <li>info@bytequests.com</li>
            <li>84,Block A, Sector 4, Noida, UP,201301</li>
          </ul>
        </div>
      </div>

      <div className={classes.copyright}>
        <p>&copy; Copyright 2021 ByteQuest Softwares Private Limited. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
