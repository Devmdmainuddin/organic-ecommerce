"use client"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductCard3 from "./card/ProductCard3";
import Container from "./Container";
import productData from "@/app/httpActions/product/data";
const CategoryProdects = () => {
    console.log("CategoryProdects",productData);
    return (
        <div className="mt-[130px]">
            <Container>


                <Tabs >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h2 className="text-[#282828] font-inter text-[35px] font-bold leading-[42px]">All Category Product</h2>
                        <TabList className='flex gap-6 trending justify-center my-10'>
                            <Tab className=" text-gray-600 font-inter text-base font-normal leading-7 tracking-normal hover:text-[#F47606] transition-all duration-500 outline-0">Vegetables</Tab>
                            <Tab className=" text-gray-600 font-inter text-base font-normal leading-7 tracking-normal hover:text-[#F47606] transition-all duration-500 outline-0">Food</Tab>
                            <Tab className=" text-gray-600 font-inter text-base font-normal leading-7 tracking-normal hover:text-[#F47606] transition-all duration-500 outline-0">Fruits</Tab>
                            <Tab className=" text-gray-600 font-inter text-base font-normal leading-7 tracking-normal hover:text-[#F47606] transition-all duration-500 outline-0">Organic</Tab>
                            <Tab className=" text-gray-600 font-inter text-base font-normal leading-7 tracking-normal hover:text-[#F47606] transition-all duration-500 outline-0">Elementum</Tab>

                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-6 mt-[50px]">
                            {productData?.slice(0, 6).map((item, index) => <ProductCard3 key={index} item={item}></ProductCard3>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-6 mt-[50px]">
                            {productData?.slice(0, 6).map((item, index) => <ProductCard3 key={index} item={item}></ProductCard3>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-6 mt-[50px]">
                            {productData?.slice(0, 6).map((item, index) => <ProductCard3 key={index} item={item}></ProductCard3>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </Container>

        </div>
    );
};

export default CategoryProdects;


