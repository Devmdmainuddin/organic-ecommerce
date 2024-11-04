import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const News = () => {
    return (
        <div>
            <Container>
                <h2 className="text-[#282828] font-inter text-[35px] font-bold leading-[42px] tracking-[0%] text-center">Recent News</h2>
                <div className="flex gap-6 flex-wrap items-center justify-center">
                    <div className="mt-[50px] w-[364px]">
                        <div className="relative w-[364px] h-[193px] ">
                            <p className="text-white absolute bottom-6 left-6 font-inter text-[16px] font-normal leading-[19px] bg-[#F47606] py-2 px-4 z-20">Vegetable</p>
                            <Image src='/bl.jpg' alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        <h2 className="text-[#363636] font-inter text-[20px] font-semibold leading-[28px] mt-6">Green Onion Knife and
                            salad placed</h2>
                        <p className="text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px] mt-[10px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>
                        <Link href='#' className="text-[#f47606] font-inter text-[16px] font-semibold leading-[28px] flex gap-1 items-center">Read More <FaArrowRight /></Link>

                    </div>
                    <div className="mt-[50px] w-[364px]">
                        <div className="relative w-[364px] h-[193px] ">
                        <p className="text-white absolute bottom-6 left-6 font-inter text-[16px] font-normal leading-[19px] bg-[#F47606] py-2 px-4 z-20">Vegetable</p>
                            <Image src='/bl.jpg' alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        <h2 className="text-[#363636] font-inter text-[20px] font-semibold leading-[28px] mt-6">Green Onion Knife and
                            salad placed</h2>
                        <p className="text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px] mt-[10px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>
                        <Link href='#' className="text-[#f47606] font-inter text-[16px] font-semibold leading-[28px] flex gap-1 items-center">Read More <FaArrowRight /></Link>

                    </div>
                    <div className="mt-[50px] w-[364px]">
                        <div className="relative w-[364px] h-[193px] ">
                        <p className="text-white absolute bottom-6 left-6 font-inter text-[16px] font-normal leading-[19px] bg-[#F47606] py-2 px-4 z-20">Vegetable</p>
                            <Image src='/bl.jpg' alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        <h2 className="text-[#363636] font-inter text-[20px] font-semibold leading-[28px] mt-6">Green Onion Knife and
                            salad placed</h2>
                        <p className="text-[#6c6c6c] font-inter text-[16px] font-normal leading-[28px] mt-[10px]">Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>
                        <Link href='#' className="text-[#f47606] font-inter text-[16px] font-semibold leading-[28px] flex gap-1 items-center">Read More <FaArrowRight /></Link>

                    </div>
                </div>

            </Container>
        </div>
    );
};

export default News;