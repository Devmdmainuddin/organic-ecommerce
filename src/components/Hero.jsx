"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const Hero = () => {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <Image
                        src="/Group 20500.jpg"
                        alt="Group 20500"
                        layout="responsive"
                        width={100}
                        height={50}  // Adjust this value to control the aspect ratio
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/Group 20501.jpg"
                        alt="Group 20501"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/Group 20501.jpg"
                        alt="Group 20501"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/Group 20500.jpg"
                        alt="Group 20500"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/Group 20501.jpg"
                        alt="Group 20501"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/Group 20500.jpg"
                        alt="Group 20500"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Hero;