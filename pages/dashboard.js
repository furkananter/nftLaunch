import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'


// 1. Handle the Wallet Connection 
  // use 
// 2. Fetch the NFTs from the collection
// 3. Display the NFTs in the dashboard

function fetchData(id){
  fetch(`https://api.opensea.io/api/v1/`)
  .then((response) => response.json())
  .then((data) => console.log(data))
}

const Dashboard = () => { 
  return (
    <div >
      <button onClick={() => fetchData(4)}> Fetch Data</button>
       <p></p>
    </div>
  )
}

export default Dashboard