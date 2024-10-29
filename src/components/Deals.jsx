import Image from "next/image";
import Container from "./Container";
import { FaStar } from "react-icons/fa";


const Deals = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <h2 className="text-[#282828] text-center font-inter text-[35px] font-bold leading-[42px]">Flash Deals of the Week</h2>
                <div className="mt-[50px] flex flex-wrap gap-[18px] justify-center">
                    <div className="w-[562px] bg-[#F3F3F3]">
                        <div className="image">
                            <div className="relative w-full  xl:w-[562px]  h-[383px]">

                                <Image src="/dl.jpg" alt="" layout="fill" objectFit="cover" className='' />
                            </div>
                        </div>
                        <div className="container flex justify-center items-center flex-col">
                            <h2 className="text-[#282828] font-inter text-[25px] font-semibold leading-[30px] mt-10">Diamond Halo Stud Earrings</h2>
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
                            <p className="text-[#282828] font-inter text-[20px] font-semibold leading-[24px] tracking-normal text-center mt-3">$8.00-9.00</p>
                            <button className="text-white bg-[#F47606] font-inter text-[20px] font-semibold leading-[24px] py-3 px-[58px] mt-[30px] mb-[47px]">Add to cart</button>
                        </div>
                    </div>
                    <div className="w-[562px] bg-[#F3F3F3]">
                        <div className="image">
                            <div className="relative w-full  xl:w-[562px]  h-[383px]">

                                <Image src="/dl2.jpg" alt="" layout="fill" objectFit="cover" className='' />
                            </div>
                        </div>
                        <div className="container flex justify-center items-center flex-col">
                            <h2 className="text-[#282828] font-inter text-[25px] font-semibold leading-[30px] mt-10">Diamond Halo Stud Earrings</h2>
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
                            <p className="text-[#282828] font-inter text-[20px] font-semibold leading-[24px] tracking-normal text-center mt-3">$8.00-9.00</p>
                            <button className="text-white bg-[#F47606] font-inter text-[20px] font-semibold leading-[24px] py-3 px-[58px] mt-[30px] mb-[47px]">Add to cart</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Deals;