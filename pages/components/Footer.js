import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
// this component is a footer

  return (
    <footer className="justify-center md:justify-end items-center p-2 flex">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className='cursor-pointer'>
            <Image src="/logo.svg" alt="Vercel Logo" width={80} height={20} />
          </span>
        </Link>
      </footer>
  )
}

export default Footer