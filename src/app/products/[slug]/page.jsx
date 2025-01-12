"use client"
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import React,{ useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { FaInstagramSquare, FaPinterestSquare, FaRegHeart, FaTwitterSquare } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { RiShoppingBagLine } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import Container from '@/components/Container';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductCard4 from '@/components/card/ProductCard4';
import Link from 'next/link';
import productData from '@/app/httpActions/product/data';


const Details = ({ params }) => {

    const [items, setItems] = useState([]);
    const slug = React.use(params).slug;
    const singleProduct = productData.find(product => product.slug === slug);
    useEffect(() => {
        if (singleProduct) {
            const filteredItems = productData.filter(
                product => product.category === singleProduct.category
            );
            setItems(filteredItems);
        }
    }, [singleProduct]);
    if (!singleProduct) {
        return <p>Product not found.</p>;
      }
    return (
        <div className='mt-[50px]'>

            <Container>
                <div className='flex gap-4 flex-wrap justify-center '>
                    <div className="image flex gap-6  flex-col md:flex-row ">
                        <div className="relative w-[390px] md:w-[461px] h-[385px] md:h-[597px] ">
                            <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        <div className='flex md:flex-col gap-2 md:gap-6 flex-row '>
                            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[183px] ">
                                <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                            </div>
                            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[183px]">
                                <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                            </div>
                            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[183px]">
                                <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                            </div>
                        </div>
                    </div>
                    <div className="content max-w-[441px]">
                        <h2 className='text-[#282828] font-inter text-[25px] font-semibold leading-[30px]'>{singleProduct.name}</h2>
                        <div className='flex gap-5 items-center mt-4'>

                            <Rating
                                style={{ maxWidth: 120 }}
                                value={singleProduct.rating}
                                readOnly
                            />

                            <p className='text-[#676767] font-inter text-[16px] font-normal leading-[30px] '> <span>{singleProduct.reviews}</span> Reviews</p>
                            <p className='text-[#282828] font-inter text-[16px] font-bold leading-[30px]'>Brand: <span className='text-[#676767]'>Organic</span></p>
                        </div>
                        <p className='text-[#676767] font-inter text-[16px] font-normal leading-[30px] mt-5'>{singleProduct.description}</p>
                        <p className='text-[#f47806] font-inter text-[25px] font-semibold leading-[30px] mt-[30px]'>${singleProduct.price}</p>
                        <div className='flex gap-5 items-center mt-5 justify-between'>
                            <button className='rounded-[10px] py-[14px] px-8 border '> <span>-</span> <span className='mx-6'>1 Kg</span>  <span>+</span> </button>
                            <button className="bg-[#F47606] rounded-[10px] py-[14px] px-8 text-white font-inter text-[20px] font-semibold leading-[28px] flex gap-2 items-center"><RiShoppingBagLine />  Add to cart</button>
                        </div>
                        <button className='bg-[#477018] w-full rounded-[10px] py-[14px] px-8 text-white font-inter text-[20px] font-semibold leading-[28px] mt-5'>Buy Now</button>
                        <div className='flex gap-5 items-center mt-5 justify-between'>
                            <button className='border  rounded-[10px] py-[13px] px-[22px]  text-[#676767] font-inter text-[16px] font-normal leading-[30px] flex gap-2 items-center'> <FaRegHeart /> Add to wishlist </button>
                            <button className="border  rounded-[10px] py-[13px] px-[22px]  text-[#676767] font-inter text-[16px] font-normal leading-[30px] flex gap-2 items-center"><IoGitCompareOutline />  Add to Compare</button>
                        </div>
                        <h3 className='text-[#282828] font-semibold text-[16px] leading-[30px] mt-4'>Category: <span className='font-normal text-[#676767]'>Organic</span> </h3>
                        <h3 className='text-[#282828] font-semibold text-[16px] leading-[30px] mt-4'>Tags: <span className='font-normal text-[#676767]'> Food,organic,vegetables,fresh</span> </h3>
                        <div className='flex gap-3 items-center mt-4 border-b pb-7'>
                            <h2 className='text-[#282828] font-semibold text-[16px] leading-[30px] '>Share: </h2>
                            <ul className='flex gap-3 items-center'>
                                <li ><ImFacebook2 className='text-[40px]' /></li>
                                <li><FaTwitterSquare className='text-[40px]' /></li>
                                <li><FaInstagramSquare className='text-[40px]' /></li>
                                <li><FaPinterestSquare className='text-[40px]' /></li>
                            </ul>
                        </div>
                        <div className='border-b py-4'>
                            <h2 className="text-[#282828] font-inter text-[20px] font-semibold leading-[30px] ">Sold by : <span>WPDISDB</span></h2>
                            <ul className='mt-5 custom-list list-disc list-inside'>
                                <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]"> 100% Natural</li>
                                <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">Increases resistance</li>
                                <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">No growth hormones are used</li>
                                <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">No artificial Chemicals</li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/* tabs */}
                <Tabs  >
                    <TabList className='flex flex-wrap gap-9 trending   border-b-2'>
                        <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px] outline-0 transition-all duration-300 py-10'>Description</Tab>
                        <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0 py-10'>Additional information</Tab>
                        <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0 py-10'>Reviews (10+)</Tab>
                        <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0 py-10'>Vendor information</Tab>
                        <Tab className='text-[#282828] font-[Inter] text-[20px] font-medium leading-[28px]  outline-0 py-10'>More products</Tab>

                    </TabList>
                    <TabPanel>
                        <div className=' mt-[50px]'>
                            <p className="text-[16px] font-inter font-normal leading-[30px] text-[#676767]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <ul className='mt-5 custom-list list-disc list-inside'>
                                <li className="text-[16px] font-inter font-normal leading-[30px] text-[#676767]">High-Neck Style</li>
                                <li className="text-[16px] font-inter font-normal leading-[30px] text-[#676767]">Drop Shoulders</li>
                                <li className="text-[16px] font-inter font-normal leading-[30px] text-[#676767]">Flared Cuffs</li>
                                <li className="text-[16px] font-inter font-normal leading-[30px] text-[#676767]">Asymmetrical Hem</li>
                            </ul>
                            <p className="mt-5 text-[16px] font-inter font-normal leading-[30px] text-[#676767]">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="mt-5 text-[16px] font-inter font-normal leading-[30px] text-[#676767]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' mt-[50px]'>
                            <h2>Additional information</h2>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' mt-[50px]'>
                            <h2>Reviews</h2>
                        </div>
                    </TabPanel>
                    <TabPanel><div className=' mt-[50px]'>

                        <h2>Vendor information</h2>
                    </div></TabPanel>
                    <TabPanel>
                        <div className=' mt-[50px]'>
                            <h2>More products</h2>
                        </div>
                    </TabPanel>
                </Tabs>
                {/* relative products */}
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[35px] font-inter font-bold leading-[42px] text-[#282828] mt-4'>Related Products</h2>
                        <Link href='/' className="text-[16px] font-inter font-[400] leading-[28px] text-[#f47606]">View all</Link>
                    </div>

                    <div className='flex flex-wrap justify-center gap-5 mt-[50px]'>
                        {items.slice(0, 6).map((item, idx) => <ProductCard4 key={idx} item={item}></ProductCard4>)}
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Details;

