
import Image from "next/image";
import Container from "../Container";
import { FaRegUser } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import Link from "next/link";

const Blog = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <h2 className="text-[rgb(40,40,40)] font-inter text-[35px] font-bold leading-[42px] tracking-[0%] text-center">Latest Blog</h2>
                <div className=' flex flex-wrap justify-center gap-6 mt-[50px]'>
                    <div className='w-[364px]'>
                        <div className="relative mb-3 mx-auto  w-[364px] h-[216px]  flex items-center justify-center">
                            <Image src='/bl2.jpeg' alt='image' layout="fill" objectFit="cover"></Image>
                        </div>
                        <div className="content py-6 px-7">
                            <div className="flex justify-between items-center">
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><FaRegUser /> <span>By admin</span></p>
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><MdLabelOutline className="text-lg" /> <span>Vegetable</span></p>
                            </div>
                            <h2 className="text-black font-inter text-[25px] font-semibold leading-[36px] mt-[10px] mb-7">How and when to replace
                                brake rotors</h2>

                            <div className="flex justify-between items-center border-t pt-7">
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><IoCalendarNumberOutline /> <span>June 24, 2021</span></p>
                                <Link href='' className="text-[#f47606] font-inter text-[14px] font-semibold leading-[17px] tracking-[0%] text-center">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className='w-[364px]'>
                        <div className="relative mb-3 mx-auto  w-[364px] h-[216px]  flex items-center justify-center">
                            <Image src='/b1.jpeg' alt='image' layout="fill" objectFit="cover"></Image>
                        </div>
                        <div className="content py-6 px-7">
                            <div className="flex justify-between items-center">
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><FaRegUser /> <span>By admin</span></p>
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><MdLabelOutline className="text-lg" /> <span>Vegetable</span></p>
                            </div>
                            <h2 className="text-black font-inter text-[25px] font-semibold leading-[36px] mt-[10px] mb-7">How and when to replace
                                brake rotors</h2>

                            <div className="flex justify-between items-center border-t pt-7">
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><IoCalendarNumberOutline /> <span>June 24, 2021</span></p>
                                <Link href='' className="text-[#f47606] font-inter text-[14px] font-semibold leading-[17px] tracking-[0%] text-center">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className='w-[364px]'>
                        <div className="relative mb-3 mx-auto  w-[364px] h-[216px]  flex items-center justify-center">
                            <Image src='/bl.jpg' alt='image' layout="fill" objectFit="cover"></Image>
                        </div>
                        <div className="content py-6 px-7">
                            <div className="flex justify-between items-center">
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><FaRegUser /> <span>By admin</span></p>
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><MdLabelOutline className="text-lg" /> <span>Vegetable</span></p>
                            </div>
                            <h2 className="text-black font-inter text-[25px] font-semibold leading-[36px] mt-[10px] mb-7">How and when to replace
                                brake rotors</h2>

                            <div className="flex justify-between items-center border-t pt-7">
                                <p className="text-[#676767] font-inter text-[14px] font-normal leading-[17px] flex gap-2 items-center"><IoCalendarNumberOutline /> <span>June 24, 2021</span></p>
                                <Link href='' className="text-[#f47606] font-inter text-[14px] font-semibold leading-[17px] tracking-[0%] text-center">Read More</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Blog;