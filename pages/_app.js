import '../styles/globals.css'
import { createClient, WagmiConfig } from "wagmi";
import { ConnectKitProvider , getDefaultClient } from "connectkit";


// for connecting to the wallet
const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Nft Launch Kit",  
    alchemyId,
  }),
);


function MyApp({ Component, pageProps }) {
  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
  )
}

export default MyApp
