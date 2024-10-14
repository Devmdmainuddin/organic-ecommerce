import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';

const Testimonial = () => {
    return (
        <div className='w-full h-[666px] bg-gray-100 my-[130px]'>
            <div className='py-[130px] flex gap-[95px] justify-center items-center'>
                <div className="content w-[483px] h-[335px] ">
                    <h2 class="text-gray-800 font-bold text-3xl leading-[42px]">Testimonial</h2>
                    <div className="w-[62px] h-[43px] relative  mt-7 mb-8 ">
                        <Image src='/qut.png' alt='' layout="fill" objectFit="cover" className=''></Image>
                    </div>
                    <div className='flex gap-2 text-[#FFC24B]'>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                    </div>
                    <p class="text-gray-600 font-normal text-base leading-[28px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="image">
                    <div className="w-[404px] h-[404px] relative rounded-lg ">
                        <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;