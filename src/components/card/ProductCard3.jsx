import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const ProductCard3 = ({ item }) => {
    return (
        <div className='group overflow-hidden'>
            <div className="image w-[364px] h-[450px] relative">
            <div className="w-[364px] h-[450px] group-hover:opacity-100 opacity-0 absolute left-0 top-0 bg-[#282828CC]  transition-all duration-500 z-50">
            </div>
                <div className="absolute w-[190px] h-[50px]  bottom-[31px] -left-full group-hover:left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700">
                    <ul className='flex gap-5'>
                        <li className='w-[47px] h-[47px] rounded-full p-3 bg-white flex justify-center items-center text-[#F47606] hover:bg-[#F47606] hover:text-white  transition-all duration-500'><FaRegHeart className='  text-2xl' /></li>
                        <li className='w-[47px] h-[47px] rounded-full p-3 bg-white flex justify-center items-center hover:bg-[#F47606] text-[#F47606] hover:text-white text-2xl transition-all duration-500'><CiShoppingBasket className='' /></li>
                        <li className='w-[47px] h-[47px] rounded-full p-3 bg-white flex justify-center items-center hover:bg-[#F47606] text-[#F47606] hover:text-white transition-all duration-500'><IoEyeOutline className=' text-2xl' /></li>
                    </ul>
                </div>

                <Image src={item?.image} alt='product' fill objectFit="cover" className=' ' />
            </div>
            <div className='flex justify-center items-center flex-col'>
               
                <ul className="flex gap-1 mt-3">
                    <li className="text-[#FFAE00]">
                        <FaStar className="text-lg"></FaStar>
                    </li>
                    <li className="text-[#FFAE00]">
                        <FaStar className="text-lg"></FaStar>
                    </li>
                    <li className="text-[#FFAE00]">
                        <FaStar className="text-lg"></FaStar>
                    </li>
                    <li className="text-[#FFAE00]">
                        <FaStar className="text-lg"></FaStar>
                    </li>
                    <li className="text-[#FFAE00]">
                        <FaStar className="text-lg"></FaStar>
                    </li>
                </ul>
                <p className="text-[20px] font-semibold leading-[24px] tracking-[0%] text-center text-[#969696] mt-3">$8.00-9.00</p>
                <Link href={`/products/${item?.slug}`} > <h2 className="text-[20px] font-semibold leading-[24px] tracking-[0%] text-center text-[#282828] mt-3 hover:text-[#F47606] transition-all duration-500">{item?.name}</h2></Link>

            </div>

        </div>
    );
};

export default ProductCard3;