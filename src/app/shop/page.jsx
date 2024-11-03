"use client";

import React, { useState } from 'react';
import HeroShop from '@/components/banner/HeroShop';
import FilterBar from '@/components/shop/FilterBar';
import Container from '@/components/Container';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ShopPage = () => {
    const [sortOrder, setSortOrder] = useState('new');
    const [number, setNumber] = useState(6);
    const [activeMulti, setActiveMulti] = useState(true);

    const handleByNew = () => setSortOrder('new');
    const handleByOld = () => setSortOrder('old');

    const selectNumber = (event) => {
        const numberConverted = Number(event.target.value);
        setNumber(numberConverted);
    };

    return (
        <div>
            <HeroShop />
            <FilterBar
                setActiveMulti={setActiveMulti}
                handleByNew={handleByNew}
                handleByOld={handleByOld}
                selectNumber={selectNumber}
            />
            <Container>
                <div class=" min-h-screen grid grid-cols-1 md:grid-cols-[267px_1fr] mt-[50px]">

                    <aside class="">
                        <div className="space-y-4  p-4 box-border border border-[#c9c9c9] rounded-[20px]">
                            <h2 className='text-[#282828] font-inter text-[25px] font-bold leading-[30px] border-b pb-6'>Categories</h2>
                            <nav >
                                <ul className='list-disc list-inside custom-list'>
                                    <li> <Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]"> Beverages (5)</Link></li>
                                    <li> <Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Butter & Eggs (9)</Link></li>
                                    <li>  <Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Dried</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]"> Food (6)</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Fresh Meat</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Fruits (6)</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Vegetables (25)</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Meats</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">Supplements (6)</Link></li>
                                </ul>




                            </nav>
                        </div>
                        <div className="space-y-4  p-4 box-border border border-[#c9c9c9] rounded-[20px] mt-10">
                            <h2 className='text-[#282828] font-inter text-[25px] font-bold leading-[30px] border-b pb-6'>Price</h2>
                            <nav >
                                <ul className='list-disc list-inside custom-list'>
                                    <li> <Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">$0.00 - $199</Link></li>
                                    <li> <Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">$200 - $299</Link></li>
                                    <li>  <Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">$300 - $399</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">$400 - $499</Link></li>
                                    <li><Link href="#" className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]">$500 - $1000</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="space-y-4  p-4 box-border border border-[#c9c9c9] rounded-[20px] mt-10">
                            <h2 className='text-[#282828] font-inter text-[25px] font-bold leading-[30px] border-b pb-6'>rating</h2>
                            <nav >
                                <ul >
                                    <li> <p className="text-[#676767] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center"> <span ><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span>(5)</p></li>
                                    <li> <p className="text-[#676767] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center"> <span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar /></span>(4)</p></li>
                                    <li> <p className="text-[#676767] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center"><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar /></span><span><FaStar /></span>(3)</p></li>
                                    <li><p className="text-[#676767] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center"><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>(2)</p></li>
                                    <li><p className="text-[#676767] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center"><span><FaStar className='text-[#FFAE00]' /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>(1)</p></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="space-y-4  p-4  mt-10">
                            <h2 className='text-[#282828] font-inter text-[25px] font-bold leading-[30px] '>Best Seller</h2>
                            <div className='flex flex-col gap-6 mt-5'>
                                <div className="w-[267px] flex items-center gap-4">
                                    <div className="relative  w-[94px] h-[94px]  ">
                                        <Image src='/ca4.jpg' alt='image' layout="fill" objectFit="cover" ></Image>
                                    </div>
                                    <div className="content">
                                        <h2 className="text-[#282828] font-sans text-[20px] font-semibold leading-[24px]">Organic Juice</h2>
                                        <p className="text-[#FFAE00] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center my-[10px]"> <span ><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span></p>
                                        <p className="text-[#676767] font-sans text-[16px] font-medium leading-[19px]">$50 - $150</p>
                                    </div>

                                </div>
                                <div className="w-[267px] flex items-center gap-4">
                                    <div className="relative  w-[94px] h-[94px]  ">
                                        <Image src='/bbb.jpg' alt='image' layout="fill" objectFit="cover" ></Image>
                                    </div>
                                    <div className="content">
                                        <h2 className="text-[#282828] font-sans text-[20px] font-semibold leading-[24px]">Fresh Vegetable</h2>
                                        <p className="text-[#FFAE00] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center my-[10px]"> <span ><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span></p>
                                        <p className="text-[#676767] font-sans text-[16px] font-medium leading-[19px]">$50 - $150</p>
                                    </div>

                                </div>
                                <div className="w-[267px] flex items-center gap-4">
                                    <div className="relative  w-[94px] h-[94px]  ">
                                        <Image src='/ca3.jpg' alt='image' layout="fill" objectFit="cover" ></Image>
                                    </div>
                                    <div className="content">
                                        <h2 className="text-[#282828] font-sans text-[20px] font-semibold leading-[24px]">Organic Cabage</h2>
                                        <p className="text-[#FFAE00] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center my-[10px]"> <span ><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span></p>
                                        <p className="text-[#676767] font-sans text-[16px] font-medium leading-[19px]">$50 - $150</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="space-y-4  p-4  mt-10">
                            <h2 className='text-[#282828] font-inter text-[25px] font-bold leading-[30px] '>Tags</h2>
                
                            <ul className='flex flex-wrap items-center gap-[10px] mt-5'>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px]  border rounded-[10px]'>Apple</li>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px] border rounded-[10px]'>Bread</li>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px]  border rounded-[10px]'>Cheese</li>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px] border rounded-[10px]'>Fruits</li>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px]  border rounded-[10px]'>Fish</li>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px]  border rounded-[10px]'>Organic</li>
                                <li className='text-[#676767] font-sans text-[16px] font-medium leading-[19px] tracking-normal text-center p-[10px]  border rounded-[10px]'>Vegetable</li>
                            </ul>

                        </div>

                    </aside>
                    <main class="p-4">
                        <h1 class="text-2xl font-bold mb-4">Main Content</h1>
                        <p>Your main content goes here.</p>
                    </main>
                </div>
            </Container>


        </div>
    );
};

export default ShopPage;
