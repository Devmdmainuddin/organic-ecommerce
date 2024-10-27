"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import Image from 'next/image';

const Offer = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('/fakeData.json')  // Fetch the JSON file from the public directory
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className='w-[1369px]'>
            <div className='flex gap-6  flex-col md:flex-row  mx-auto mt-[130px]'>
                <aside className=''>
                    <div className="w-[497px] h-[808px] relative rounded-lg ">
                        <Image src='/left.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                    </div>
                </aside>
                <main className=''>
                    <div>

                        <Tabs >
                            <TabList className='flex gap-6 md:gap-9 lg:gap-[147px]'>
                                <Tab className='text-[#282828] outline-0 transition-all duration-300 pb-[20px]'>Top Rated</Tab>
                                <Tab className='text-[#282828] outline-0 transition-all duration-300 pb-[20px]'>Best Selling</Tab>
                                <Tab className='text-[#282828] outline-0 transition-all duration-300 pb-[20px]'>On Sale</Tab>
                            </TabList>
                            <TabPanel><div className='flex flex-wrap  gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard key={idx} item={item}></ProductCard>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard key={idx} item={item}></ProductCard>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard key={idx} item={item}></ProductCard>)}

                            </div></TabPanel>
                        </Tabs>
                    </div>


                </main>
            </div>
            {/* <div className='flex gap-6 w-[1369px] flex-wrap mx-auto mt-[130px]'>
                    
                    <main>

                        <Tabs >
                            <TabList className='flex gap-6 md:gap-9 lg:gap-[147px]'>
                                <Tab className='text-[#282828] outline-0 transition-all duration-300 pb-[20px]'>Top Rated</Tab>
                                <Tab className='text-[#282828] outline-0 transition-all duration-300 pb-[20px]'>Best Selling</Tab>
                                <Tab className='text-[#282828] outline-0 transition-all duration-300 pb-[20px]'>On Sale</Tab>
                            </TabList>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard key={idx} item={item}></ProductCard>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard key={idx} item={item}></ProductCard>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard key={idx} item={item}></ProductCard>)}

                            </div></TabPanel>
                        </Tabs>


                    </main>
                    <aside className='w-[497px]'>
                        <div className="w-full h-[808px] relative rounded-lg ">
                            <Image src='/left.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                        </div>
                    </aside>
                </div> */}
        </div>
    );
};

export default Offer;