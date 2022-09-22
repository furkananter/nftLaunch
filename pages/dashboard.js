import { ConnectKitButton } from 'connectkit'
import { useAccount, useDisconnect } from 'wagmi'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NFTElement from './components/NFTElement'
import { ArrowPathIcon, HeartIcon } from '@heroicons/react/24/outline'



// 1. Handle the Wallet Connection 
// use 
// 2. Fetch the NFTs from the collection
// 3. Display the NFTs in the dashboard

async function getNftData(id) {
  const option = { method: 'GET' }
  return await fetch(`https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${id}/?include_orders=false`, option)
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(err => { console.log(err) })
}


const Dashboard = () => {
  // Wallet Connection Hooks 👇
  // useAccount() returns the connected wallet address
  const { isConnected, address } = useAccount()
  // Wallet Connection status Component State Variables
  const [walletConnection, setWalletConnection] = useState(false);
  // useDisconnect for disconnecting the wallet
  const { disconnect } = useDisconnect()
  // Wallet Connection Hooks 👆


  // NFTs Hooks 👇
  // nfts Array for storing the Crypto Punk NFT's
  const [nftsArray, setNftsArray] = useState([])
  // loading state for the NFT's loading process
  const [loading, setLoading] = useState(false)
  // NFTs Hooks 👆


  async function fetchNftsData() {
    setLoading(true)
    let nfts = []
    for (let i = 1; i <= 30; i++) {
      const nft = await getNftData(i)
      setLoading(false)
      nfts.push(nft)
    }
    setNftsArray(nfts)
  }

  useEffect(() => {
    fetchNftsData()

    {
      isConnected
        ? setWalletConnection(true)
        : setWalletConnection(false)
    }
  }, [isConnected])

  return (
    <>
      <nav>
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
            <span className="sr-only">NFT Launch Kit</span>
            <Image
              className="h-8 w-auto sm:h-10"
              src="/logo.svg"
              width={125}
              height={38}
              alt="Home"
            />
            </a>
          </Link>
        </div>
      </nav>
      {isConnected &&
        <div>
          <span>
            Connected to with address {address}
          </span>
          <hr />
          <button onClick={disconnect}>Disconnect</button>
        </div>
      }
      {!isConnected &&
        <ConnectKitButton />
      }
      {loading && <ArrowPathIcon className="animate-spin h-5 w-5 text-gray-500" />}
      {walletConnection &&
        <div className="grid grid-cols-1 gap-6 items-center justify-center place-content-center sm:grid-cols-2 lg:grid-cols-4">
          {nftsArray.map((item) => (
            <NFTElement key={item.id} item={item} />
          ))}
        </div>
      }



    </>
  )
}

export default Dashboard