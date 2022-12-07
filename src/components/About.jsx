import React from 'react'
import ceo from '../assets/boss.png'
import usama from '../assets/usama.jpeg'
import ali from '../assets/ali.jpg'
import mubashar from '../assets/mubashar.jpg'
import Particle from './Particle'


const About = () => {
  return (

<>
    <div className="container mx-auto ">
      
      <div className="flex flex-col py-10 text-center w-full mb-14">
        <h1 className=" text-5xl font-bold text-gray-300  tracking-wider">
          About Us
        </h1>
        <hr class=" mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div
        className="flex flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto py-10"
      >
        <div className="md:w-3/6 w-full">
          <div>
            <h1 className="text-white text-6xl font-bold">
              <span>WAHHAB MIRZA</span> <br /> CEO, Founder <br />
              <span className="text-gradient">Of</span> SABIFI.
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
          <img src={ceo} alt="NFT Art" className=" h-auto w-full" />
        </div>
      </div>
      <div className="flex flex-col py-10 text-center w-full -mb-32 mt-24">
        <h1 className=" text-5xl font-bold text-gray-300  tracking-wider">
          Creators of Sabifi
        </h1>
        <hr class=" mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div className='font-Poppins text-center text-white'>
        <div className=" flex xl gap-20 flex-col md:flex-row w-4/5 justify-between 
    items-center mx-auto py-10">
          <div className="bg-white/10 p-8 rounded-xl mt-40">
            <img className='rounded-full h-60 mx-auto' src={usama} alt="" />
            <h4 className="upperclass text-xl font-bold mt-6">Usama Anwar</h4>
            <p className='mt-4'>Mr. Usama Anwar is a well respected
              Blockchain developer and active investor
              in the DeFi. Mr. Usama will work closely
              with the Sabifi team on matters of
              governance, and scaling of the
              community..
            </p>
            <button className='bg-indigo-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contact us</button>
          </div>
          <div className="bg-white/10 p-8 rounded-xl mt-40">
            <img className='rounded-full h-60 mx-auto' src={mubashar} alt="" />
            <h4 className="upperclass text-xl font-bold mt-6">Mubashar Islam</h4>
            <p className='mt-4'>Mr. Mubashar Islam is a well respected
              Blockchain developer and crypto advisor.
              Mr. Mubashar received MS in Computer
              Science from the Punjab University
              College of Information Technology
            </p>
            <button className='bg-indigo-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contact us</button>
          </div>
          <div className="bg-white/10 p-8 rounded-xl mt-40">
            <img className='rounded-full h-60 mx-auto' src={ali} alt="" />
            <h4 className="upperclass text-xl font-bold mt-6">Muhammad Ali</h4>
            <p className='mt-4'>Mr. Muhammad Ali is a well respected
              web developer and active investor
              in the DeFi. Muhammad Ali will work closely
              with the Sabifi team on matters of
              governance, and scaling of the
              community..
            </p>
            <button className='bg-indigo-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contact us</button>
          </div>

        </div>
      </div>
    </div>

<Particle />

</>


  )
}

export default About

{/* <div className='text-center py-10'>
            <h5 className=''>test</h5>
            <h1 className='text-4xl w-96 mx-auto leading-normal font-bold'>It is h2 tag mb-12</h1>
        </div> */}
