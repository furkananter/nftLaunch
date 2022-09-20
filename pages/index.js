import Head from 'next/head'
import Image from 'next/image'
import IndexPage from './components/IndexPage'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div>
      <IndexPage />
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
