import Image from "next/image";
import Container from "./Container";


const About = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
                    <div className="image">
                        <div className="relative  mx-auto  w-[364px] h-[216px]  flex items-center justify-center">
                            <Image src='/b1.jpeg' alt='image' fill objectFit="cover" className=""></Image>
                        </div>
                    </div>
                    <div className="content max-w-[567px]">
                        <h3 className="text-[rgb(103,103,103)] font-inter text-[20px] font-medium leading-[30px]">A Few Words About Us</h3>
                        <h2 className="text-[rgb(40,40,40)] font-inter text-[35px] font-bold leading-[42px] mt-[10px] max-w-[424px]">A shop for good people
                        by good people</h2>
                        <p className="text-[#676767] font-inter text-[16px] font-normal leading-[30px] mt-7">Buy natural, sustainable and chemicalfree products from local sellers across the country.
                        We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>
                        <div className='flex gap-[27px] mt-7'>
                            <div className="image">
                                <div className="w-[49px] h-[49px] relative rounded-full ">
                                    <Image src='/men.jpg' alt='' fill objectFit="cover" className=' rounded-[25px]'></Image>
                                </div>
                            </div>
                            <div className="container">
                                <h2 className="text-[#282828] font-inter text-[20px] font-medium leading-[30px]">Flora Smith</h2>
                                <p className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">UI Designer</p>
                            </div>

                        </div>
                      
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;