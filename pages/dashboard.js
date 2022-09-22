import { ConnectKitButton } from 'connectkit'
import { useAccount, useDisconnect } from 'wagmi'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NFTElement from './components/NFTElement'
import { ArrowPathIcon } from '@heroicons/react/24/outline'



// 1. Handle the Wallet Connection 
//    |--> We are going to use ConnectionKit for connecting the wallet
// 2. Fetch the NFTs from the collection
//    |--> We are going to use OpenSea API for fetching the NFTs
// 3. Display the NFTs in the dashboard
//    |--> We are going to use NFTElement component for displaying the NFTs



// We are getting our data in getNftData() function from the OpenSea API 👇
async function getNftData(id) {
  const option = { method: 'GET' }
  return await fetch(`https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${id}/?include_orders=false`, option)
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(err => { console.log(err) })
}
// We are getting our data in getNftData() function from the OpenSea API 👆

// ---------- Dashboard Component Starts Here 🔽 --------------

const Dashboard = () => {
// -------------- Wallet Connection Hooks 👇----------------

  // useAccount() returns the connected wallet address
  const { isConnected } = useAccount()
  // Wallet Connection status Component State Variables
  const [walletConnection, setWalletConnection] = useState(false);
  // useDisconnect for disconnecting the wallet
  const { disconnect } = useDisconnect()

// -------------- Wallet Connection Hooks 👆----------------


// -------------- NFTs Hooks 👇---------------------

  // nftsArray for storing the Crypto Punk NFT's
  const [nftsArray, setNftsArray] = useState([])
  // loading state for the NFT's loading process
  const [loading, setLoading] = useState(false)

// -------------- NFTs Hooks 👆 ---------------------

// -------------- fetchNftsData Function 👇 ---------------------


  // In this function, firstly...
  // We are setting the loading state to true
  // Then we are creating an array which will store the NFT's data
  // Then we are creating for loop which will how many NFT's we want to get from the API.
  // In this case, we are getting 30 NFT's
  // inside the for loop, we are creating nft variable and calling getNftData(i) function
  // after that proccess, we need to set loading state to false because we are done with the loading process
  // and we are sending these datas to our empty array which we created before
  // and finally we are setting the nftsArray state. 

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

// -------------- fetchNftsData Function 👆 ---------------------


// -------------- useEffect Hook 👇 ---------------------

  // In this useEffect hook, we are calling fetchNftsData() function
  // and we need to setting our connection state.
  // if the wallet is connected, we are setting the walletConnection state to true
  // and if the wallet is not connected, we are setting the walletConnection state to false

  useEffect(() => {
    fetchNftsData()

    {
      isConnected
        ? setWalletConnection(true)
        : setWalletConnection(false)
    }
  }, [isConnected])


// -------------- useEffect Hook 👆 ---------------------

  return (
    <main className='bg-dashboardnav h-full'>
      <nav className='flex pl-4 lg:pl-12 py-3 bg-dashboardnav'>
        <Link href='/'>
          <Image
            className="h-8 w-auto sm:h-10"
            src="/logo-dark.svg"
            width={125}
            height={38}
            alt="Home"
          />
        </Link>
      </nav>
      <section className={`w-full bg-dashboardnav px-auto text-white ${walletConnection ? `h-full` : 'h-screen'}`}>
        <div className='flex justify-between md:flex-row py-8 px-6 lg:pl-12 flex-col'>
          <div>
            <h1 className='text-4xl font-semibold text-center md:text-start'>Dashboard</h1>
          </div>
          <div className='flex mx-auto md:mr-6 flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center'>
            {/*
              1. If Wallet Connection is not True ?
                2. Then show the Connect Wallet Button
                  3. Else show the Disconnect Wallet Button
            */}
            {!isConnected ?
              <ConnectKitButton />
              : <button onClick={disconnect} className="dashboard-nav-button hover:bg-blue-600 text-white bg-blue-500">
                Disconnect
              </button>
            }
            <button className='dashboard-nav-button'>
              <Link href='/'>
                <a>Back to Website</a>
              </Link>
            </button>
          </div>
        </div>

        <section className='flex flex-col items-center justify-center'>
          {/* 
            1. If Wallet Connection is True ? 
            2. Then we are going to display the NFTs
              3. Else If Loading is True ? 
                4. Then we are going to display the Loading Animation
                5. Else we are going to display the "You are not connected! Connect Wallet" message
          */}
          {walletConnection ?
            <div>
              <h2 className='text-center font-bold py-5 gradient-text'>My NFTs</h2>
              <div className="grid grid-cols-1 gap-6 items-center justify-center place-content-center sm:grid-cols-2 lg:grid-cols-4">
                {nftsArray.map((item) => (
                  <NFTElement key={item.id} item={item} />
                ))}
              </div>
            </div>
            : <div className="px-4 py-32 max-h-screen lg:items-center lg:flex max-w-3xl mx-auto text-center" >
              {loading ? <ArrowPathIcon className="animate-spin h-14 w-14 text-white" /> :
                <p className='text-3xl font-extrabold gradient-text'>
                  You are not connected! Connect Wallet
                </p>
              }
            </div>
          }
        </section>
      </section>
    </main>
  )
}
// --------------- Dashboard Component Ends Here 👆------------------
export default Dashboard