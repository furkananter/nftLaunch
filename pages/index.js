import Head from 'next/head'
import Image from 'next/image'
import IndexPage from './components/IndexPage'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

// Index Page Component

export default function Home() {
  return (
    <>
      <IndexPage />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
