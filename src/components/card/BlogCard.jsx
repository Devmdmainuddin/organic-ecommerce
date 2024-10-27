import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = () => {
    return (
        <div>
            <div className="image">
                <Image src="/b1.jpeg" alt="" width={365} height={225} className='rounded-[25px]' />
            </div>
            <div className="content mt-[20px]">

                <div className='flex gap-[17px]'>
                    <div>
                    <div class="w-[70px] h-[87px]  text-[#363636]  text-[25px] font-semibold leading-[28px] border border-[#C9C9C9] rounded-[10px] py-3 px-5">
                       
                        <p className='w-[29px]'>16</p>
                        <p className='w-[29px]'>02</p>
                    </div>
                    </div>
                   
                    <div>

                        <h2 class="text-[#363636] font-inter text-[20px] font-semibold leading-[28px]">Green Onion Knife and
                            salad placed</h2>
                        <p className='mt-[10px] text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px]'>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>

                        <button className='flex items-center gap-2 text-[#F47606] font-inter text-[16px] font-semibold leading-[28px]'>Read More <FaArrowRight /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;