"use client"
import { useEffect, useState } from "react";

import Container from "./Container";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductCard01 from "./card/ProductCard01";


const TrendingSections = () => {
    const [items, setItems] = useState([]);

    return (
        <div className="mt-[130px]">
            <Container>
                <h1 className="text-[#282828] font-[Inter] text-[35px] font-bold leading-[42px] text-center">Trending Sections</h1>
            
                <Tabs >
                            <TabList className='flex gap-6 trending justify-center my-10'>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px] outline-0 transition-all duration-300 '>Featured</Tab>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0'>Latest</Tab>
                                <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0'>Best Seller</Tab>
                            </TabList>
                            <TabPanel><div className='flex flex-wrap justify-between items-center  gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard01 key={idx} item={item}></ProductCard01>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard01 key={idx} item={item}></ProductCard01>)}

                            </div></TabPanel>
                            <TabPanel><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]'>
                                {items.slice(0, 6).map((item, idx) => <ProductCard01 key={idx} item={item}></ProductCard01>)}

                            </div></TabPanel>
                        </Tabs>
            </Container>
        </div>
    );
};

export default TrendingSections;