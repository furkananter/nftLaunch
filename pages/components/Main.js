
import Image  from 'next/image'
import Link from 'next/link'

// Main Component for the Home Page

const Main = () => {
  return (
    <header className='relative bg-black flex items-center text-left justify-left h-screen mb-0 overflow-hidden align-middle z-0'>
      <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 z-30 z-1'>
        <section className='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
          <div className='xl:w-8/12 flex flex-col text-left lg:text-left lg:py-12 xl:py-24'>
            <h1 className='text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4'>The best solution for no-code web3 apps.</h1>
            <p className='lg:w-4/5 text-gray-100 xl:text-lg leading-relaxed mb-4'>
              With NFTLaunchKit you can create a smart contract in our dashboard with a few clicks, provided by Thirdweb.
              You can create a NFT Minting Website with our templates and manage everything from the dashboard.
              Without any code and for free.
            </p>
            <p className='text-gray-100 md:text-lg xl:text-xl font-semibold mb-4'>Build. Design. Launch</p>
            <div className="flex flex-row gap-2.5">
              <button className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-black active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                <Link href='/dashboard'>
                  Start Building
                </Link>
              </button>
            </div>
          </div>
        </section>
      </section>
      <div className='main-bg '>
        <Image width={300} height={300} layout="responsive" src="/bg-image.webp"  alt="hero" />
      </div>
    </header>
  )
}

export default Main