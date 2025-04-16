import "./styles.scss";
import { useState } from "react";

import Logo from "../../components/Logo";
import Product from "../../components/Product";
import FirstMenuSite from "../../components/FirstMenuSite";
import SecondMenuSite from "../../components/SecondMenuSite";

import FirstMenuToggle from "../../components/FirstMenuToggle";
import SecondMenuToggle from "../../components/SecondMenuToggle";
import ThirdMenuToggle from "../../components/ThirdMenuToggle";

import menuLogo from "../../assets/menu-logo.png";
import menuHamburger from "../../assets/menu-hamburguer.svg";
import menuHamburgerX from "../../assets/menu-hamburguer-x.svg";

import setaLeft from "../../assets/seta-left.png";
import setaRight from "../../assets/seta-right.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);

  function menuToggle() {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className="area">
        <div className="logo">
          <img src={menuLogo} />
        </div>

        <div onClick={menuToggle} className="menu-toggle">
          {menuOpen
            ? <img src={menuHamburger} />
            : <img src={menuHamburgerX} />
          }
        </div>
      </div>

      <div
        className={"menu-toggle-produtos"}
        style={{ display: menuOpen ? 'none' : 'flex' }}
      >
        <div className="first-second-container">
          <FirstMenuToggle />
          <SecondMenuToggle />
        </div>
        <ThirdMenuToggle />
      </div>

      <div className="first-container">
        <Logo />
        <FirstMenuSite />
      </div>
      <div className="second-container">
        <SecondMenuSite />
      </div>

      <section className="animation">
        <div className="title">
          <span>Materiais Hospitalares</span>
          <a href="">confira todos</a>
        </div>

        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="buttons">
          <div className="circle">
            <img src={setaLeft} />
          </div>

          <span></span>
          <span></span>
          <span></span>

          <div className="circle">
            <img src={setaRight} />
          </div>
        </div>
      </section>
    </div>
  );
};