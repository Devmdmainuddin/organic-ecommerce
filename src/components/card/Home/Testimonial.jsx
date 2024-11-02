"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import { Navigation } from 'swiper/modules';


const Testimonial = () => {
  

    return (
        <div className='w-full h-auto lg:h-[666px] bg-gray-100 my-[130px] relative'>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper relative">
                <SwiperSlide>
                    <div className='py-[130px] flex gap-6 md:gap-16 lg:gap-[95px] justify-center flex-wrap items-center relative'>
                        <div className="content w-[483px] h-[335px] ">
                            <h2 class="text-gray-800 font-bold text-3xl leading-[42px]">Testimonial</h2>
                            <div className="w-[62px] h-[43px] relative  mt-7 mb-8 ">
                                <Image src='/qut.png' alt='' layout="fill" objectFit="cover" className=''></Image>
                            </div>
                            <div className='flex gap-2 text-[#FFC24B]'>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                            </div>
                            <p className="text-gray-600 font-normal text-base leading-[28px] mt-[30px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='flex gap-[27px] mt-[23px]'>
                                <div className="image">
                                    <div className="w-[49px] h-[49px] relative rounded-full ">
                                        <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2>Flora Smith</h2>
                                    <p>UI Designer</p>
                                </div>

                            </div>

                        </div>
                        <div className="image">
                            <div className="w-[404px] h-[404px] relative rounded-lg ">
                                <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[130px] flex gap-6 md:gap-16 lg:gap-[95px] justify-center flex-wrap items-center relative'>
                        <div className="content w-[483px] h-[335px] ">
                            <h2 class="text-gray-800 font-bold text-3xl leading-[42px]">Testimonial</h2>
                            <div className="w-[62px] h-[43px] relative  mt-7 mb-8 ">
                                <Image src='/qut.png' alt='' layout="fill" objectFit="cover" className=''></Image>
                            </div>
                            <div className='flex gap-2 text-[#FFC24B]'>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                            </div>
                            <p class="text-gray-600 font-normal text-base leading-[28px] mt-[30px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='flex gap-[27px] mt-[23px]'>
                                <div className="image">
                                    <div className="w-[49px] h-[49px] relative rounded-full ">
                                        <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2>Flora Smith</h2>
                                    <p>UI Designer</p>
                                </div>

                            </div>

                        </div>
                        <div className="image">
                            <div className="w-[404px] h-[404px] relative rounded-lg ">
                                <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[130px] flex gap-6 md:gap-16 lg:gap-[95px] justify-center flex-wrap items-center relative'>
                        <div className="content w-[483px] h-[335px] ">
                            <h2 class="text-gray-800 font-bold text-3xl leading-[42px]">Testimonial</h2>
                            <div className="w-[62px] h-[43px] relative  mt-7 mb-8 ">
                                <Image src='/qut.png' alt='' layout="fill" objectFit="cover" className=''></Image>
                            </div>
                            <div className='flex gap-2 text-[#FFC24B]'>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                            </div>
                            <p class="text-gray-600 font-normal text-base leading-[28px] mt-[30px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='flex gap-[27px] mt-[23px]'>
                                <div className="image">
                                    <div className="w-[49px] h-[49px] relative rounded-full ">
                                        <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2>Flora Smith</h2>
                                    <p>UI Designer</p>
                                </div>

                            </div>

                        </div>
                        <div className="image">
                            <div className="w-[404px] h-[404px] relative rounded-lg ">
                                <Image src='/men.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <div class="swiper-button-prev"> <FaLongArrowAltLeft /></div>
                <div class="swiper-button-next"><FaLongArrowAltRight /></div> */}
            </Swiper>
         

        </div>
    );
};

export default Testimonial;