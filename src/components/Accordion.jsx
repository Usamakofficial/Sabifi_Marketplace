import React from "react";

const HiddenContent = () => {
  return (
    <div className="">
      <div className="head-size flex-col text-center w-full">
        <h1 className="token-head text-5xl font-bold   tracking-normal">
          SABIFI TOKEN
        </h1>
        <hr className="hr-line mx-auto w-64 w h-2  rounded border-0 md:my-4 "></hr>
      </div>
      <div className="accordion py-12" id="myAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              type="button"
              className="accordion-button collapsed text-white font-bolder text-3xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              What is NFTs?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div className="card-body text-xl text-white">
              <p>
                An NFT, or non-fungible token, is a unique digital asset that
                represents ownership of a digital item such as a piece of art,
                music, video, or other digital media. NFTs are created using
                blockchain technology and are stored on a blockchain ledger,
                which allows for the authenticity and ownership of the digital
                asset to be verified and tracked. Unlike fungible tokens, such
                as cryptocurrencies, NFTs cannot be replaced or exchanged for an
                identical item..{" "}
                <a
                  href="https://www.tutorialrepublic.com/html-tutorial/"
                  target="_blank"
                >
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              type="button"
              className="accordion-button text-white font-bolder text-3xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              What is Sabifi?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            data-bs-parent="#myAccordion"
          >
            <div className="card-body text-xl text-white">
              <p>
                Introducing our ERC-20 token, SABIFI, the native cryptocurrency
                of our NFT marketplace. Our token aims to revolutionize the way
                people buy and sell NFTs by providing a seamless and secure
                means of transaction on our platform. With a total supply of 21
                million, SABIFI is designed to be scarce and valuable. It is the
                key to accessing our platform, where users can buy and sell
                unique digital assets with ease. SABIFI can also be used on our
                e-commerce store, where users can purchase goods and services
                with the token. Our team is made up of experienced professionals
                in the NFT and e-commerce space, who have come together to build
                a platform that combines the best of both worlds. We have a
                solid understanding of the market and are dedicated to making
                SABIFI the go-to token for buying and selling NFTs. We believe
                that SABIFI has the potential to become a major player in the
                NFT market, and we are excited to see it grow and evolve in the
                years to come. Join us in building the future of NFTs by
                becoming a SABIFI holder today!.{" "}
                <a
                  href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                  target="_blank"
                >
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              type="button"
              className="accordion-button collapsed text-white font-bolder text-3xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              What is Sabswap?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div className="card-body text-xl text-white">
              <p>
                SABSWAP is the latest decentralized exchange (DEX) built on the
                Ethereum blockchain. Developed by the team at sabifi, SABSWAP
                offers a fast, secure, and decentralized platform for trading
                digital assets. Unlike centralized exchanges, SABSWAP is fully
                decentralized, meaning that it is not controlled by any single
                entity. This ensures that users have full control over their
                assets and transactions at all times. SABSWAP uses an automated
                market maker (AMM) model, which allows for
                liquidity pools to be created by users and for trading to occur
                directly between users. This eliminates the need for order books
                and allows for faster and more efficient trading. Our platform
                also features a user-friendly interface, making it easy for
                anyone to trade digital assets. SABSWAP supports all ERC-20
                tokens, and we are continuously working to expand our supported
                assets. We take security very seriously, and our platform is
                built with multiple layers of security to protect users' assets.
                This includes support for hardware wallets, as well as a
                comprehensive security audit by a third-party firm. At SABSWAP,
                we are committed to building a decentralized exchange that puts
                the needs of the community first. Join us in our mission to
                bring decentralized trading to the masses..{" "}
                <a href="https://www.sabifi.io/" target="_blank">
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenContent;
