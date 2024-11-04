import Image from "next/image";
import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


const ProductCard2 = ({ item }) => {
    return (

        <div className="relative group overflow-hidden w-[364px]">
            <div className='  flex gap-1  items-center '>
                <div>
                    <div className="relative w-[169px] h-[210px] ">
                        <Image src={item?.image} alt='product' fill objectFit="cover" className=' ' />
                    </div>
                    <div className="w-[364px] h-[210px] group-hover:opacity-100 opacity-0 absolute left-0 top-0 bg-[#282828CC]  transition-all duration-500 z-50">
            </div>
            <div className="absolute w-[169px] h-[30px]  top-1/2 -left-full group-hover:left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-700">
                <ul className='flex gap-2 justify-center items-center'>
                    <li className='w-[41px] h-[41px] rounded-full p-3 bg-white flex justify-center items-center'><FaRegHeart className='text-[#F47606] text-[12px]' /></li>
                    <li className='w-[41px] h-[41px] rounded-full p-3 bg-white flex justify-center items-center'><CiShoppingBasket className='text-[#F47606] text-[12px]' /></li>
                    <li className='w-[41px] h-[41px] rounded-full p-3 bg-white flex justify-center items-center'><IoEyeOutline className='text-[#F47606] text-[12px]' /></li>
                </ul>
            </div>
                </div>

                <div className=''>
                    <Link href={`/products/${item?.slug}`} > <h2 className="text-[#282828] font-inter text-[16px] font-semibold leading-[19px]">{item?.name}</h2></Link>
                    <ul className="flex gap-1 mt-[10px]">
                        <li className="text-[#FFAE00]">
                            <FaStar className="text-[10px]"></FaStar>
                        </li>
                        <li className="text-[#FFAE00]">
                            <FaStar className="text-[10px]"></FaStar>
                        </li>
                        <li className="text-[#FFAE00]">
                            <FaStar className="text-[10px]"></FaStar>
                        </li>
                        <li className="text-[#FFAE00]">
                            <FaStar className="text-[10px]"></FaStar>
                        </li>
                        <li className="text-[#FFAE00]">
                            <FaStar className="text-[10px]"></FaStar>
                        </li>
                    </ul>
                    <p className="text-[#282828] font-inter text-[20px] font-semibold leading-[24px] mt-[10px]">$8.00- <span className="text-[#A9A9A9]">9.00</span> </p>

                </div>
            </div>
            

        </div>


    );
};

export default ProductCard2;