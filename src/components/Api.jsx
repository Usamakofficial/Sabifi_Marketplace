import axios from 'axios';
import { ethers } from 'ethers';
import React from 'react'
import { useState } from 'react';


function Api() {
  const [account, setAccount] = useState("")
  const [data, setData] = useState([])
  console.log(data)

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    let res = await provider.send("eth_requestAccounts", [])
    setAccount(res[0])
    getData(res[0])
  }
  const getData = () => {
    const options = {
      method: 'GET',
      url: 'https://api.opensea.io/api/v1/assets',
      params: {
        owner: '0x2E8d3856E5A4627E22D2cdAF6C8085eDe9037241',
        order_direction: 'desc',
        limit: '8',
        include_orders: 'false'
      },
      headers: { accept: 'application/json' }
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data.assets)
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>  <div className='flex justify-center pt-24'>
      <button onClick={connect} className='bg-[#e32970] hover:bg-[#bd255f] text-white font-bold py-4 text-xl tracking-widest px-16 rounded-full'>Our NFTs</button>
    </div>
      <h4 className="text-white text-3xl  font-bold uppercase text-gradient ml-36 mt-12">
        {data.length > 0 ?'Our Featured NFTs on OpenSea' : 'Click to see Featured NFTs of Sabifi'}
      </h4>

      <div className="w-4/5 py-10 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  md:gap-4 lg:gap-7 py-2.5 cursor-pointer">

          {data.map(nft => {
            return (
              <>

                <div className="w-full shadow-xl shadow-black rounded-md  bg-gray-800 my-2 p-3 transform 
                  transition-all hover:translate-y-2 duration-300 hover:scale-[1.1]">
                  <img src={nft.image_thumbnail_url} className="h-86 w-full object-cover shadow-lg shadow-black rounded-lg mb-3 " />
                  <h2 className='text-white font-bold mt-4 mb-3 w-28 overflow-hidden h-6 float-left'>{nft.name}</h2>
                  <button
                    className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
                  hover:bg-[#bd255f] cursor-pointer rounded-full px-3 py-1 float-right  mt-4 mb-3"
                  ><a href={nft.permalink} target='_blank'>
                      View on OpenSea
                    </a>
                  </button>
                  <div className='mt-20'>
                    <p className='text-gray-400 h-16 overflow-hidden text-sm'>{nft.description}</p>
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>

    </>
  )
}
export default Api;