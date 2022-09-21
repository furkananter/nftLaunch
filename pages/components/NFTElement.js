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
          <Image
            width={300}
            height={300}
            className='rounded-lg shadow-lg'
            key={item.id}
            src={item.image_url}
            alt={item.id}
          />
        </Link>
        <div className='absolute bottom-5 md:bottom-2 md:right-4'>
        <p className='p-1 bg-white backdrop-blur-md rounded-md text-white bg-opacity-20'>
          #{item.id}
        </p >
        </div>
        
      </div>
    </div>
  );
}
export default NftElement;