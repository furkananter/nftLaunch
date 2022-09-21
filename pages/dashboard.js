import { ConnectKitButton } from 'connectkit'
import { useAccount, useDisconnect } from 'wagmi'
import { useState } from 'react'
import Image from 'next/image'
import NFTItem from './components/NFTItem'
import { HeartIcon } from '@heroicons/react/24/outline'

// 1. Handle the Wallet Connection 
// use 
// 2. Fetch the NFTs from the collection
// 3. Display the NFTs in the dashboard



const Dashboard = () => {
  // Wallet Connection Hooks 👇
  // useAccount() returns the connected wallet address
  const { isConnected, address } = useAccount()
  const [connected, setConnected] = useState(false)
  // useDisconnect for disconnecting the wallet
  const { disconnect } = useDisconnect()
  // Wallet Connection Hooks 👆


  // NFTs Hooks 👇
  // nfts Array for storing the Crypto Punk NFT's
  const [nftsArray, setNftsArray] = useState(null)
  // loading state for the NFT's loading process
  const [loading, setLoading] = useState(true)
  // NFTs Hooks 👆

async function fetchNFTs(id) {
  // Fetch the NFTs from the collection
  const response = await fetch(`https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${id}`)
  const data = await response.json()
  // Set the NFTs Array
  setNftsArray(data)
  console.log(nftsArray)
  // Set the loading state to false
  setLoading(false)
}
useEffect(() => {
  isConnected == true && fetchNFTs(1)
}, [])

async function fetchNFTDatas() {
  let nullNft= []
  for (let i = 0; i < 10; i++) {
    const doldurulacak = await fetchNFTs(i)
    nullNft.push(doldurulacak)
  }
}
  

  return (
    <>
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
      <button onClick={() => {
        fetchNFTs(499)
      }}>Fetch Data</button>
      {loading &&
        <div>
          <HeartIcon alt="loading" width={100} height={100} />
        </div>
      }
    
    </>
  )
}

export default Dashboard

{/*

*/}