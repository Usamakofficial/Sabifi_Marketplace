import timelessLogo from "../assets/sabifi.png";
import { connectWallet } from "../Blockchain.Services";
import { useGlobalState, truncate } from "../store";
import { NavLink } from "react-router-dom";
import Whitepaper from "./Whitepaper";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [showIcons, setShowIcons] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
    console.log("clicked away");
  };
  const handleClick = () => {
    setOpen(!open);
    console.log("clicked");
  };
  return (
    <nav className="w-4/5 flex  justify-between items-center py-5 mx-auto">
      <div className="md:flex-[0.5] flex-initial">
         <NavLink
          exact
          activeClassName="active_class"
          to="/"
        >
           <img
          className="w-40 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        />
        </NavLink>
      </div>
      <div onClick={handleClickAway} className={open ? "menu-link  mobile-menu-link" : "menu-link"}>
      <ul
        className="md:flex-[0.5] text-black md:flex
        hidden list-none flex-row justify-between pr-6
        text-lg
        items-center flex-initial"
      >
        <NavLink
          exact
          activeClassName="active_class"
          to="/"
          className="mx-4 cursor-pointer font-bold
          "
        >
          Marketplace
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          to="/token"
          className="mx-4 cursor-pointer font-bold
          "
        >
          SABIFI Token
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          to="/about"
          className="mx-4 cursor-pointer  font-bold
          "
        >
          About Us
        </NavLink>
        <div className="mx-4 cursor-pointer font-bold">
          <Whitepaper />
        </div>
      </ul>
      </div>
      <div onClick={handleClick} className=" hamburger_icon text-white md:hidden px-6 ml-28 pl-16">
        <a href="#" onClick={()=>setShowIcons(!showIcons)}>
      <MenuIcon className="text-violet-700 "/>
      </a>
      </div>

     
      {connectedAccount ? (
        <button
          className="shadow-xl text-white
       bg-violet-700 hover:bg-blue-700 md:text-l p-3
          rounded-full cursor-pointer font-bold"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl text-white
        bg-violet-700 hover:bg-blue-700 md:text-xs p-3
        font-bold
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Header;
