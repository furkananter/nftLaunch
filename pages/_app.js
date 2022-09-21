import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ apiKey: 'ZDETcvU9gPHmA8jSypsOMgG1FPxb30i1' })],
)

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  }),
);


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default MyApp

{/*

const connectors = [
  new CoinbaseWalletConnector({
    options: {
      appName: 'wagmi.sh',
      jsonRpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/ZDETcvU9gPHmA8jSypsOMgG1FPxb30i1',
    },
  }),
  new MetaMaskConnector(
    {
      options: {
        rpc: {
          1: 'https://eth-mainnet.g.alchemy.com/v2/ZDETcvU9gPHmA8jSypsOMgG1FPxb30i1',
        },
      },
    },
  ),
  new WalletConnectConnector({
    options: {
      rpc: {
        2: 'https://eth-mainnet.g.alchemy.com/v2/ZDETcvU9gPHmA8jSypsOMgG1FPxb30i1',
      },
    },
  }),
]

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  alchemyId,
  provider,
});

*/}