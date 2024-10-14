import React from 'react';
import Container from './Container';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='bg-[#373C33] w-full '>
            <Container>
                <div className='flex justify-evenly gap-3 py-[130px]'>
                    <div>
                        <h2 className='text-white font-rye text-2xl font-normal leading-9'>Organic</h2>
                        <div  className='mt-[44px] flex gap-[30px]'>
                            <div>
                            <div className='bg-[#477018] p-4 rounded-full text-white'>
                            <IoCallOutline className='text-2xl'/>
                            </div>
                            </div>
                           
                            <div>
                                <h3 className='text-[#FFFFFFCC] text-sm font-normal leading-7'>Call Us 24/7</h3>
                                <h2 className='text-[#FFFFFFCC] text-lg font-semibold leading-7'>(1800)-1088-88</h2>
                            </div>
                        </div>
                        <div className='mt-[44px] flex gap-[30px]'>
                            <div>
                            <div className='bg-[#477018] p-4 rounded-full text-white'>
                            <CiLocationOn  className='text-2xl'/>
                            </div>
                            </div>
                           
                            <div>
                                <h3 className='text-[#FFFFFFCC] text-sm font-normal leading-7'>Address</h3>
                                <h2 className='text-[#FFFFFFCC] text-lg font-semibold leading-7 max-w-[240px]'>100 Mcevoy st, alexandria
                                Nsw 2010, Australia</h2>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h2 className="text-white font-rye text-2xl font-normal leading-9">Customer Service</h2>
                        <ul className='mt-10'>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 hover:text-white transition-all duration-500'> Contact us</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'> Track your order</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'>Return policy</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'> Delivery Information</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7  mt-8 hover:text-white transition-all duration-500'> Help & FAQ</li>
                            <l className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'>Warranty & Repair</l>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white font-rye text-2xl font-normal leading-9'>Categories</h2>
                        <ul className='mt-10'>

                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 hover:text-white transition-all duration-500'>Fruitls & Vegetables</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'> Dairy Products</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'> Package Foods</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500'> Beverage</li>
                            <li className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-8 hover:text-white transition-all duration-500' > Health & Wellness</li>

                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white font-rye text-2xl font-normal leading-9'>Newsletter</h2>
                        <p className='text-[#FFFFFFCC] text-base font-normal leading-7 mt-10 mb-[20px]'>Signup and get a voucher of worth $250.00</p>
                        <div className='bg-white flex justify-between'>
                            <input type="email" name="" id="" placeholder='Your email address' className='py-[14px] px-4 bg-white text-text-[#6767675C] rounded-[10px]' />
                            <button className='py-[14px] px-4 bg-[#F47606] text-white rounded-[10px] -mr-2'>Send</button>

                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;