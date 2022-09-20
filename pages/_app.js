import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ apiKey: 'ZDETcvU9gPHmA8jSypsOMgG1FPxb30i1' })],
)

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
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default MyApp
