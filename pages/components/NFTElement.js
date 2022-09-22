import Link from 'next/link'
import Image from 'next/image'

function NftElement({ item }) {
  return (
    <div className='relative'>
      <div className='flex justify-center '>
        <Link
          className='cursor-pointer'
          target="_blank"
          href={`https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${item?.token_id}`}
        >
          <img
            className='rounded-lg shadow-lg'
            key={item?.id}
            src={item?.image_url}
            alt={item?.id}
          />
        </Link>
        <p className='absolute bottom-2 p-1 bg-white backdrop-blur-md rounded-md text-white bg-opacity-20'>
          Crypto Punk #{item?.id}
        </p>
      </div>
    </div>
  );
}
export default NftElement;