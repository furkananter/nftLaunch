import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'


async function fetchCollectionNFT(id) {
  let nftsArray = null;
  await fetch(
    `https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${id}/?include_orders=false`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((data) => {
      nftsArray = data;
      return nftsArray;
    })
    .catch((err) => console.error(err));
}

const Dashboard = () => { 
  return (
    <div >
      <button onClick={() => fetchCollectionNFT(4)}> Fetch Data</button>
       <Image width={100} height={100} alt="crypto-punk" src={JSON.stringify(nftsArray?.image_preview_url)} />
      <p>{JSON.stringify(nftsArray)}</p>
    </div>
  )
}

export default Dashboard