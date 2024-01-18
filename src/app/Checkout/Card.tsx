
// test_branch
import Image from 'next/image';
import Product from '../Checkout/product.jpg'
const Card = () => {
  return (
    <div className="text-black w-[310px]  mb-4 h-[85px] flex flex-row">
      <Image src={Product} width={85} height={85} alt='img' className='rounded-tl-md rounded-bl-md'></Image>
      <div className='w-[233px] h-[82px] pl-3 flex flex-col '>
        <h1 className='text-Inter pb-1 text-sm'>Classic Floret Print Bi-fold Classic Wallets For Women</h1>
        <h2 className="text-Inter pb-1 text-sm">Price: Rs.599.00</h2>
        <h2 className="text-Inter text-sm">Quantity: 01</h2>
      </div>
    </div>
  )
}

export default Card