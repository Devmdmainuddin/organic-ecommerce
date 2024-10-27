import React from 'react';
import Container from './Container';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] w-full '>
            <Container>
                <div className='flex justify-evenly flex-wrap gap-3 py-[130px]'>
                    <div>
                        <h2 className='text-[#477018] font-rye text-[30px] font-normal leading-[38px]'>Organic</h2>

                       <ul className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-10 mb-[20px]'>
                       <li>Calista Wise 7292 Disctum Av.</li>
                        <li> New York.USA</li>
                        <li>(02)-800-5145-88</li>
                        <li> info@gmail.com</li>
                        <li>www.website.com</li>
                        </ul>    
                            
                           
                      

                    </div>
                    <div>
                        <h2 className="text-[#363636] font-inter text-[20px] font-semibold leading-[28px]">Customer Service</h2>
                        <ul className='mt-10'>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] hover:text-[#F47606] transition-all duration-500'> Contact us</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'> Track your order</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'>Return policy</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'> Delivery Information</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'> Help & FAQ</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'>Warranty & Repair</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#363636] font-inter text-[20px] font-semibold leading-[28px]'>Categories</h2>
                        <ul className='mt-10'>

                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] hover:text-[#F47606] transition-all duration-500'>Fruitls & Vegetables</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'> Dairy Products</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'> Package Foods</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500'> Beverage</li>
                            <li className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-6 hover:text-[#F47606] transition-all duration-500' > Health & Wellness</li>

                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[#363636] font-inter text-[20px] font-semibold leading-[28px]'>Newsletter</h2>
                        <p className='text-[#6C6C6C] font-inter text-[16px] font-normal leading-[28px] mt-10 mb-[20px]'>Signup and get a voucher of worth $250.00</p>
                        <div className=' flex justify-center rounded-[10px]'>
                            <input type="email" name="" id="" placeholder='Your email address' className='py-[14px] px-4 bg-white  border border-[#C9C9C9] rounded-tl-[10px] rounded-bl-[10px] outline-0' />
                            <button className='py-[14px] px-4 bg-[#F47606] text-white rounded-[10px] -ml-2'>Send</button>

                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;