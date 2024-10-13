"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Hero = () => {
    return (
        <div>
            <Swiper loop={true} className="mySwiper">
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