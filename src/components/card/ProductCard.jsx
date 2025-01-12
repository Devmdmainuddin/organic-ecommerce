import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const ProductCard = ({item}) => {
    return (
        <div className='group overflow-hidden '>
            <div className="image  w-[264px] h-[264px] relative">
                <div className="w-[264px]  h-[264px] group-hover:opacity-100 opacity-0 absolute left-0 top-0 bg-[#2828288a] rounded-[25px] transition-all duration-500 z-50">
                </div>
                {item.discount > 0 && (
                    <p className=" text-white font-medium absolute top-4 left-4 bg-green-400  px-3 z-20 rounded-sm">
                     {item.discount}%
                    </p>
                  )}
                <div className="absolute w-[190px] h-[50px]  top-1/2 -left-full group-hover:left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700">
                 <ul className='flex gap-5'>
                 <li className='w-[50px] h-[50px] rounded-full p-4 bg-white flex justify-center items-center'><FaRegHeart className='text-[#F47606] text-2xl' /></li>
                        <li className='w-[50px] h-[50px] rounded-full p-4 bg-white flex justify-center items-center'><CiShoppingBasket className='text-[#F47606] text-2xl' /></li>
                        <li className='w-[50px] h-[50px] rounded-full p-4 bg-white flex justify-center items-center'><IoEyeOutline className='text-[#F47606] text-2xl' /></li>
                    </ul>
                </div>

                <Image src={item?.image} alt='product' fill objectFit="cover" className=' rounded-[25px] ' />
            </div>

         <Link href={`/products/${item?.slug}`}><h2 className="text-[20px] font-semibold leading-[24px] tracking-[0%] text-center text-[#282828] mt-5 hover:text-[#F47606] transition-all duration-500">{item?.name}</h2></Link>   
            
            <p className="text-[20px] font-semibold leading-[24px] tracking-[0%] text-center text-[#969696] mt-3">${item.price}</p>
        </div>
    );
};

export default ProductCard;