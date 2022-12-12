import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'

const Artworks = () => {
  const [nfts] = useGlobalState('nfts')
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])

  return (
      <div className="w-4/5 py-10 mx-auto " >
        <h4 className="text-white text-3xl font-bold uppercase text-gradient mt-16">
          {collection.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  md:gap-4 lg:gap-7 py-2.5 cursor-pointer" >
          {collection.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>

        {collection.length > 0 && nfts.length > collection.length ? (
          <div className="text-center my-5 " >
            <button
              className="shadow-xl text-white
            bg-violet-700 hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2 font-semibold"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
  )
}

const Card = ({ nft }) => {
  const setNFT = () => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }

  return (
    <div className="w-full shadow-xl rounded-md overflow-hidden bg-white my-2 p-3 transform transition-all hover:translate-y-2 duration-300 hover:scale-[1.1]" >
      <img
        src={nft.metadataURI}
        alt={nft.title}
        className="h-60 w-full object-cover shadow-lg rounded-lg mb-3  " 
      />
      <h4 className="text-black font-semibold">{nft.title}</h4>
      <p className="text-gray-400 text-xs my-1">{nft.description}</p>
      <div className="flex justify-between items-center mt-3 text-gray-black">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-bold">{nft.cost} ETH</p>
        </div>

        <button
          className="shadow-lg text-white text-sm bg-violet-700
            hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
          onClick={setNFT}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default Artworks
