import React from "react";
import token_img from "../assets/token_img.png";
import logicon from "../assets/logicon.png";
import policon from "../assets/policon.png";
import cmcicon from "../assets/cmcicon.png";
import Artboard from "../assets/artboard.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Accordion from "../components/Accordion";
import HiddenContent from "../components/Accordion";
import Features from "./Features";
// import Particle from "./Particle";
const Token = () => {
  return (
    <>
      <div className="head-size flex flex-col py-4 text-center w-full mb-8">
        <h1 className="token-head text-5xl font-bold   tracking-normal">
          SABIFI TOKEN
        </h1>
        <hr className="hr-line mx-auto h-8 rounded border-0 md:my-4 "></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto"
      >
        <div className="head-size md:w-3/6 w-full">
          <div className="para-head">
            <h1 className="text-white leading-tight text-6xl font-bold">
              The Next Gen <br />
              Smart Digital, <br />
              <span className="text-gradient">Payment</span> Method
            </h1>
            <p className="para-text text-gradient w-4/5 mt-3">
              Our team of finance & Technology experts have joined to turn your
              simple wallets into crypto wallets through SABIFI.
            </p>
          </div>
        </div>
        <div
          className="
    mt-10 md:mt-0"
        >
          <img src={token_img} alt="NFT Art" className="token-img w-full" />
        </div>
      </div>
      <Features />
      <div className="head-size flex flex-col text-center w-full">
        <h1 className="token-head text-6xl font-bold  tracking-normal">
          Find Us
        </h1>
        <hr className="hr-line mx-auto shadow-xl h-2  rounded border-0 md:my-4 "></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto"
      >
        <div className="">
          <img src={Artboard} alt="NFT Art" className="lower-img mx-auto" />
        </div>
        <div className="button-fwd md:w-2/5 w-full mt-4 md:mt-0">
          <div class="grid lg:flex-row justify-items-end mb-2">
            <button className="btn inline-flex py-3  w-full justify-around rounded-xl mb-10 items-center md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <img
                className="object-cover caret-white w-8"
                src={logicon}
                alt=""
              />
              <span className=" flex  items-start flex-col leading-none">
                <span className="text-fwd flex text-2xl font-semibold text-white">
                  <a
                    href="https://etherscan.io/address/0x1e6c985bd153045fc9a99f12eb5442fd4eaab915"
                    target="_blank"
                  >
                    SABIFI on Etherscan
                  </a>
                </span>
              </span>
              <a
                href="https://etherscan.io/address/0x1e6c985bd153045fc9a99f12eb5442fd4eaab915"
                target="_blank"
              >
                <ArrowOutwardIcon
                  className="hover:fill-indigo-900"
                  style={{ color: "white", width: "6vw", height: "6vh" }}
                />
              </a>
            </button>
          </div>
          <div className="grid lg:flex-row justify-items-end mb-4">
            <button className="btn inline-flex py-4 w-full justify-around mb-4 rounded-lg items-center md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <img className="object-cover w-8" src={policon} alt="" />
              <span className=" flex items-start flex-col leading-none">
                <span className="text-fwd text-2xl font-semibold text-white">
                  <a
                    href="https://polygonscan.com/address/0x1E6c985BD153045FC9a99F12eb5442fD4EaAb915"
                    target="_blank"
                  >
                    SABIFI on Polygon
                  </a>
                </span>
              </span>
              <a
                href="https://polygonscan.com/address/0x1E6c985BD153045FC9a99F12eb5442fD4EaAb915"
                target="_blank"
              >
                <ArrowOutwardIcon
                  className="hover:fill-indigo-900"
                  style={{ color: "white", width: "6vw", height: "6vh" }}
                />
              </a>
            </button>
          </div>
          <div className="grid lg:flex-row justify-items-end mb-4">
            <button className="btn inline-flex py-4 w-full justify-around rounded-lg items-start lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <img
                className="object-cover w-8 "
                src={cmcicon}
                alt="artboard"
              />
              <span className=" flex items-start flex-col leading-none">
                <span className="text-fwd text-2xl font-semibold text-white ">
                  Coinmarketcap
                </span>
                {/* <span className="text-xs font-medium text-white">
                  coming soon
                </span> */}
              </span>
              <span>
                <ArrowOutwardIcon
                  className="hover:fill-indigo-900"
                  style={{ color: "white", width: "6vw", height: "6vh" }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <Particle /> */}
      <div
        className=" md:flex-row py-2 w-4/5
    items-center mx-auto"
      >
        <HiddenContent />
      </div>
    </>
  );
};

export default Token;
