import { useAccount, useConnect, useDisconnect } from 'wagmi'



// 1. Handle the Wallet Connection 
// use 
// 2. Fetch the NFTs from the collection
// 3. Display the NFTs in the dashboard

function fetchData(id) {
  fetch(`https://api.opensea.io/api/v1/`)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

const Dashboard = () => {
  const { connector: activeConnector, isConnected, address } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      {isConnected &&
        <div>
              <span>
                
              Connected to {activeConnector.name}
              </span>
            <span> 
              Connected to with address {address}
              </span>
          
            <button onClick={disconnect}>Disconnect</button>

        </div>
      }
      {!isConnected &&
        connectors.map((connector) => (
          <div key={connector.id}>
            <button
              className='bg-black text-white p-4 w-1/5 cursor-pointer'
              onClick={() => connect({ connector })}
              disabled={isLoading || pendingConnector === connector.id}
            >
              {connector.name}
              {isLoading &&
                pendingConnector?.id === connector.id &&
                ' (connecting)'}
            </button>

          </div>
        ))
      }
      {error && <div>{error.message}</div>}
    </>
  )
}

export default Dashboard

{/*





  
  const { connect, connectors } = useConnect();
  const { address, isConnecting, isDisconnected } = useAccount()
  const { disconnect } = useDisconnect();

  return (
    <div className="App">
    <button onClick={() => { connect({ connector: connectors[0] }) }}>Coinbase Wallet</button>
    <hr/>
    <button onClick={() => { connect({ connector: connectors[1] }) }}>Metamask</button>
    <hr/>
    <button onClick={() => { connect({ connector: connectors[2] }) }}>Wallet Connect</button>

    <hr/>
    <button onClick={disconnect}>Disconnect</button>

    <div>
      {isConnecting && <p>Connecting...</p>}
      {isDisconnected && <p>Disconnected</p>}
      <p>{}</p>
    </div>
  </div>
)

*/}