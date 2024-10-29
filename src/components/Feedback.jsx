import { FaStar } from "react-icons/fa";
import Container from "./Container";
import Image from "next/image";


const Feedback = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <h2 className="text-[#282828] font-inter text-[35px] font-bold leading-[42px] tracking-normal text-center">Some Customer Feedback</h2>
                <div className="flex gap-4 mt-[105px]">
                <div className=" py-[54px] px-[59px]">
                    <div>
                        <ul className="flex gap-1 mt-5">
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                        </ul>
                        <p className="mt-[30px] text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex gap-[27px] mt-5">
                            <div className="relative w-[59px] h-[59px] rounded-full">
                                <Image src='/men.jpg' alt='product' layout="fill" objectFit="cover " className='rounded-full ' />
                            </div>
                            <div className="flex gap-3">
                                <div>
                                <h3 className="text-[#363636] font-inter text-[20px] font-semibold leading-[28px]">Awlad Hossain</h3>
                                <p className="text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px]">UI Designer</p>
                                </div>
                         
                            <div className="relative w-[61px] h-[43px] ">
                                <Image src='/qut.png' alt='product' layout="fill" objectFit="cover " className='' />
                            </div>
                            </div>
                           
                        </div>
                    </div>

                </div>
                <div className=" py-[54px] px-[59px]">
                    <div>
                        <ul className="flex gap-1 mt-5">
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                            <li className="text-[#FFAE00]">
                                <FaStar className="text-lg"></FaStar>
                            </li>
                        </ul>
                        <p className="mt-[30px] text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex gap-[27px] mt-5">
                            <div className="relative w-[59px] h-[59px] rounded-full">
                                <Image src='/men.jpg' alt='product' layout="fill" objectFit="cover " className='rounded-full ' />
                            </div>
                            <div className="flex gap-3">
                                <div>
                                <h3 className="text-[#363636] font-inter text-[20px] font-semibold leading-[28px]">Awlad Hossain</h3>
                                <p className="text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px]">UI Designer</p>
                                </div>
                         
                            <div className="relative w-[61px] h-[43px] ">
                                <Image src='/qut.png' alt='product' layout="fill" objectFit="cover " className='' />
                            </div>
                            </div>
                           
                        </div>
                    </div>

                </div>
              
                </div>
                


            </Container>
        </div>
    );
};

export default Feedback;