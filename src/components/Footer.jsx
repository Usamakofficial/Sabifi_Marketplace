import timelessLogo from "../assets/sabifi.png";
import { NavLink } from "react-router-dom";
import Whitepaper from "./Whitepaper";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 mt-32">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>

      <div className="flex flex-1 w-full justify-evenly items-center flex-wrap sm:mt-0 mt-5">
      <ul
        className="md:flex-[0.5] text-black md:flex
        hidden"
      >
        <NavLink exact activeClassName='active_class' to='/'className="mr-8 cursor-pointer font-bold
          ">Marketplace</NavLink>
        <NavLink exact activeClassName='active_class' to='/token'className="mx-8 cursor-pointer font-bold
          ">SABIFI Token</NavLink>
        <NavLink exact activeClassName='active_class' to='/about'className="mx-8 cursor-pointer  font-bold
          ">About Us</NavLink>
           <div className="ml-16 cursor-pointer font-bold">
          <Whitepaper/>
        </div>
      </ul>
      </div>
    </div>
    <div className="flex flex-[0.25] py-8 justify-center items-center">
      <p className="text-gray-700 text-right text-xs">
        &copy;2022 All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
