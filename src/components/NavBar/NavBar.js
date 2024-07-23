import CartWidget from "../CartWidget/CartWidget";
import React from 'react';
import logoImage from '../CartWidget/assets/logo-sinfondo.png'; // Import the image as an asset

const NavBar = () => {
  return (
    <nav>
      <img src={logoImage} alt="Rodados Libertad Logo" /> 
      <h3>Rodados Libertad</h3>
      <div>
        <button> 0KM </button>
        <button> Usados Seleccionados </button>
        <button> Motos </button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;