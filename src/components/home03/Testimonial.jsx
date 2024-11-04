import Link from "next/link";
import Container from "../Container";
import Image from "next/image";


const Testimonial = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <div className="flex justify-between">
                    <h2 className="text-[#282828] font-inter text-[35px] font-bold leading-[42px]">Testimonial</h2>
                    <Link href='' className="text-gray-600 hover:text-[#f47606] font-inter text-base font-normal leading-[28px] transition-all duration-500">Shop all </Link>
                </div>
                <div className="flex gap-6 mt-[50px] flex-col md:flex-row items-center">
                    <div className="py-[76px] px-[45px] border">
                        <div className="relative w-[50px] h-[42px]">
                            <Image src='/qut3.png' alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        <p className="text-[#676767] font-inter text-[16px] font-normal leading-[28px] my-[30px] max-w-[563px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. </p>
                        <div className='flex gap-[27px]'>
                            <div className="image">
                                <div className="w-[49px] h-[49px] relative rounded-full ">
                                    <Image src='/men.jpg' alt='' fill objectFit="cover" className=' rounded-[25px]'></Image>
                                </div>
                            </div>
                            <div className="container">
                                <h2>Flora Smith</h2>
                                <p>UI Designer</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                    <div className="py-[33px] px-[46px] border">
                        <p className="text-[#676767] font-inter text-[16px] font-normal leading-[28px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.  </p>
                        <div className="flex items-baseline justify-between mt-5">
                            <div className='flex gap-[27px] '>
                                <div className="image">
                                    <div className="w-[49px] h-[49px] relative rounded-full ">
                                        <Image src='/men.jpg' alt='' fill objectFit="cover" className=' rounded-[25px]'></Image>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2>Flora Smith</h2>
                                    <p>UI Designer</p>
                                </div>

                            </div>
                            <div className="relative w-[50px] h-[42px]">
                            <Image src='/qut3.png' alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        </div>
                    </div>
                    <div className="py-[33px] px-[46px] border">
                        <p className="text-[#676767] font-inter text-[16px] font-normal leading-[28px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.  </p>
                        <div className="flex items-baseline justify-between mt-5">
                            <div className='flex gap-[27px]'>
                                <div className="image">
                                    <div className="w-[49px] h-[49px] relative rounded-full ">
                                        <Image src='/men.jpg' alt='' fill objectFit="cover" className=' rounded-[25px]'></Image>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2>Flora Smith</h2>
                                    <p>UI Designer</p>
                                </div>

                            </div>
                            <div className="relative w-[50px] h-[42px]">
                            <Image src='/qut3.png' alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonial;