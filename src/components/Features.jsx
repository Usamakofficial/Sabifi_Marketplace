import React from "react";
import vid from "../assets/vid.mp4";
import sabifi from "../assets/sabifi.png";
const Features = () => {
  return (
    <>
      <div
        className=" w-4/5
    items-center mx-auto"
      >
        <div className="py-10 mt-10">
          <div className="head-size text-center">
            <h1 className="token-head text-5xl font-bold  tracking-normal">
              Why Sabifi
            </h1>
            <hr className="hr-line mx-auto h-8 rounded border-0 md:my-4 "></hr>
            <h1 className="text-4xl font-bold text-gradient py-2 tracking-normal">
              Speed
            </h1>
            <h1 className="text-4xl font-bold text-gradient  tracking-normal">
              Security
            </h1>
            <h1 className="text-4xl font-bold text-gradient py-2 tracking-normal">
              Scalability
            </h1>
            <p className="text-white">
              Fantom’s aBFT consensus protocol delivers unparalleled speed,
              security, and reliability.
            </p>
            <p className="text-white text-gradient py-2">
              {" "}
              Enjoy almost instant transactions and extremely low fees
            </p>
            <div>
              <video
                className="video-sec md:h-96 shadow-2xl my-8"
                src={vid}
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className=" w-4/5 mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3  md:gap-4 lg:gap-7  ">
              <div className=" shadow-xl rounded-2xl py-2 ">
                <div className=" mx-2">
                  <img className=" h-16" src={sabifi} alt="phantom" />

                  <div className="py-2">
                    <h2 className="text-white text-xl">Cost-Efficient</h2>
                  </div>
                  <p>
                    SBF a lower cost structure than other tokens, with a low
                    minimum purchase amount and zero storage fees.
                  </p>
                </div>
              </div>
              <div className=" shadow-xl rounded-2xl py-2">
                <div className=" mx-2">
                  <img className=" h-16" src={sabifi} alt="phantom" />

                  <div className="py-2">
                    <h2 className="text-white text-xl">Much Faster</h2>
                  </div>
                  <p>
                    The Sabifi with 50 delegates and an 10 seconds block-time -
                    is one of the fastest in blockchains in the industry.
                  </p>
                </div>
              </div>
              <div className=" shadow-xl rounded-2xl py-2">
                <div className=" mx-2">
                  <img className=" h-16" src={sabifi} alt="phantom" />

                  <div className="py-2">
                    <h2 className="text-white text-xl">Usability</h2>
                  </div>
                  <p>
                    Transactions must be received instantly and must be
                    completely secure within seconds.
                  </p>
                </div>
              </div>
              <div className=" shadow-xl rounded-2xl py-2">
                <div className=" mx-2">
                  <img className=" h-16" src={sabifi} alt="phantom" />

                  <div className="py-2">
                    <h2 className="text-white text-xl">Scalable</h2>
                  </div>
                  <p>
                    Unrivaled scalability enables Sabifi to support the transaction needs of thousands
                    of protocols and millions of users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
