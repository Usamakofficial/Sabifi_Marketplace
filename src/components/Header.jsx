import React, { useState } from "react";
import { connectWallet } from "../Blockchain.Services";
import { useGlobalState, truncate } from "../store";
import { NavLink } from "react-router-dom";
import timelessLogo from "../assets/sabifi.png";
import Whitepaper from "./Whitepaper";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [connectedAccount] = useGlobalState("connectedAccount");
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact ClassName="nav-logo" to="/">
            <img
              className="w-36 cursor-pointer"
              src={timelessLogo}
              alt="Timeless Logo"
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu" }>
            <div className="">
              <li className="nav-item">
                <button
                  class="btn shadow-xl text-white md:text-l 
 cursor-pointer font-bold"
                >
                  <a href="https://swap.sabifi.io/" target="_blank">
                    Sabswap
                  </a>
                </button>
              </li>
            </div>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active-link"
                to="/"
                className="
          "
                onClick={handleClick}
              >
                Marketplace
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active-link"
                to="/token"
                className="
          "
                onClick={handleClick}
              >
                Our Token
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active-link"
                to="/about"
                className="
          "
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="">
                <Whitepaper />
              </div>
            </li>
            <div className="md:flex-[0.5]">
              <li className="nav-item">
                {connectedAccount ? (
                  <button
                    className="btn shadow-xl text-white
   cursor-pointer"
                  >
                    {truncate(connectedAccount, 4, 4, 11)}
                  </button>
                ) : (
                  <button
                    className="btn shadow-xl text-white cursor-pointer"
                    onClick={connectWallet}
                  >
                    Connect
                  </button>
                )}
              </li>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
