import { ConnectKitButton } from 'connectkit'
import { useAccount, useDisconnect } from 'wagmi'
import { useState, useEffect } from 'react'
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
  const { isConnected, address,isDisconnected } = useAccount()
   // Wallet Connection status Component State Variables
   const [isWalletConnected, setIsWalletConnected] = useState(false);
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
    const options = { method: 'GET' };
    await fetch(`https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${id}/?include_orders=false`, options)
      .then(response => response.json())
      .then(response => setNftsArray(response))
      .catch(err => console.error(err));
  }


  async function fetchNFTDatas() {
    let nullNftArray = []
    for (let i = 1; i < 12; i++) {
      const nftElements= await fetchNFTs(i)
      nullNftArray.push(nftElements)
    }
    setNftsArray(nullNft)
  }

  useEffect(() => {
    fetchNFTs();
    if (isConnected == true) setIsWalletConnected(true);
    if (isDisconnected == true) setIsWalletConnected(false);
  }, [isConnected, isDisconnected]);

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
    


    </>
  )
}

export default Dashboard

{/*

*/}