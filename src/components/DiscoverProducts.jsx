"use client"
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductCard from './card/ProductCard';
import Container from './Container';
import ProductCard2 from './card/ProductCard2';

const DiscoverProducts = () => {
    const [items, setItems] = useState([]);
 
    useEffect(() => {
        fetch('/fakeData.json')  
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
             <div className="mt-[130px]">
            <Container>
                <h1 className="text-[#282828] font-[Inter] text-[35px] font-bold leading-[42px] text-center">Discover Our Products</h1>
            
                <Tabs >
                            <TabList className='flex gap-6 trending justify-center my-10'>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px] outline-0 transition-all duration-300 '>Fruits</Tab>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0'>Vegetable</Tab>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0'>Juice</Tab>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0'>Meat</Tab>
                            </TabList>
                            <TabPanel><div className='flex flex-wrap justify-between items-center  gap-5 mt-[50px]'>
                                {items.slice(0, 8).map((item, idx) => <ProductCard2 key={idx} item={item}></ProductCard2>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 8).map((item, idx) => <ProductCard2 key={idx} item={item}></ProductCard2>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 8).map((item, idx) => <ProductCard2 key={idx} item={item}></ProductCard2>)}

                            </div></TabPanel>
                        </Tabs>
            </Container>
        </div>
        </div>
    );
};

export default DiscoverProducts;