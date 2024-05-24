import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/donate"}>DONATE US</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://x.com/bhabani_00">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/imbhabani00?tab=repositories">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bhabanishankar__mishra/">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
