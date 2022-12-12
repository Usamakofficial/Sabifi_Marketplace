import React from "react";
import token_img from "../assets/token_img.png";
import logicon from "../assets/logicon.png";
import policon from "../assets/policon.png";
import cmcicon from "../assets/cmcicon.png";
import Artboard from "../assets/artboard.png";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Particle from './Particle'
const Token = () => {
  return (
    <>
      <div className="flex flex-col py-4 text-center w-full mb-8">
        <h1 className=" text-5xl font-bold text-black  tracking-normal">
          SABIFI TOKEN
        </h1>
        <hr class=" mx-auto w-64 w h-1 bg-gray-500 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto"
      >
        <div className="md:w-3/6 w-full">
          <div>
            <h1 className="text-gray-900 text-5xl font-bold">
              The Next Gen <br /> Smart Digital, <br />
              <span className="text-gradient">Payment</span> Method.
            </h1>
            <p className="text-gray-500 font-semibold text-sm mt-3">
              Our team of finance & Technology experts have joined hands <br />{" "}
              to turn your simple wallets into crypto wallets through SABIFI.
            </p>
          </div>
        </div>
        <div
          className=" md:w-2/5 w-full 
    mt-10 md:mt-0"
        >
          <img src={token_img} alt="NFT Art" className="h-96 w-full" />
        </div>
      </div>
      <div className="flex flex-col py-16 text-center w-full">
        <h1 className=" text-5xl font-bold text-black  tracking-wider">
          Find Us On
        </h1>
        <hr class=" mx-auto w-52 h-1 bg-gray-500 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto py-5"
      >
               <div
          className=" md:w-2/5 w-full 
    mt-10 md:mt-0"
        >
          <img src={Artboard} alt="NFT Art" className=" h-auto w-full" />
        </div>
        <div className=" md:w-2/5 w-full mt-10 md:mt-0">
        <div class="grid lg:flex-row justify-items-end mb-4 w-full">
              <button class="bg-violet-700 inline-flex py-7 p-12 rounded-lg mb-14 items-center md:mt-4 mt-0 lg:mt-0 hover:bg-blue-500 focus:outline-none">
                <img className="object-cover caret-white w-8 -ml-5 mr-2" src={logicon} alt="" />
                <span class="ml-4 flex  items-start flex-col leading-none">
                  <span class="text-2xl font-semibold text-white"><a href="https://etherscan.io/address/0x1e6c985bd153045fc9a99f12eb5442fd4eaab915" target='_blank'>SABIFI on Etherscan</a>
                  </span>
                </span>
                <a href="https://etherscan.io/address/0x1e6c985bd153045fc9a99f12eb5442fd4eaab915" target='_blank'><ArrowOutwardIcon className="hover:fill-indigo-900" style={{ color: "white", width: '6vw',
  height: '6vh' }}/></a>
              </button>
            </div>
            <div class="grid lg:flex-row justify-items-end mb-4">
              <button class="bg-violet-700 inline-flex py-8 p-7 mb-12 rounded-lg items-center md:mt-4 mt-0 lg:mt-0 hover:bg-blue-500 focus:outline-none">
                <img className="object-cover w-8" src={policon} alt="" />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-2xl font-semibold text-white">
                  <a href="https://polygonscan.com/address/0x1E6c985BD153045FC9a99F12eb5442fD4EaAb915" target='_blank'>SABIFI on Polygonscan</a> 
                  </span>
                </span>
                 <a href="https://polygonscan.com/address/0x1E6c985BD153045FC9a99F12eb5442fD4EaAb915" target='_blank'><ArrowOutwardIcon className="hover:fill-indigo-900" style={{ color: "white", width: '6vw',
  height: '6vh' }}/></a>
              </button>
            </div>
            <div class="grid lg:flex-row justify-items-end mb-4">
              <button class="bg-violet-700 inline-flex py-8 px-3 rounded-lg items-start lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-blue-500 focus:outline-none">
                <img
                  className="object-cover w-8 items-start"
                  src={cmcicon}
                  alt="artboard"
                />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-2xl font-semibold text-white ">
                    SABIFI on Coinmarketcap
                  </span>
                  <span class="text-xs font-medium text-white">
                    coming soon
                  </span>
                </span>
                <span><ArrowOutwardIcon className="hover:fill-indigo-900" style={{ color: "white", width: '6vw',
  height: '6vh' }}/></span>
              </button>
            </div>
        </div>
      </div>
      <Particle />
    </>
  );
};

export default Token;
