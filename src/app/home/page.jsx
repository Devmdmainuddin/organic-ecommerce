import Banner03 from "@/components/banner/Banner03";
import Container from "@/components/Container";
import Hero01 from "@/components/Hero01";
import TrendingSections from "@/components/TrendingSections";
import Image from "next/image";


const page = () => {
    return (
        <div>
            <Hero01></Hero01>
            <Banner03></Banner03>
            <TrendingSections></TrendingSections>
      
                {/* <div className="relative  ">
                    <Image src="/sin.jpeg" alt="" width={100} height={100} objectFit="cover" className=""
                    />
                </div> */}
                <div className="relative w-full h-[400px] mt-[130px]">
                    <Image
                        src="/sin.jpeg"
                        alt="Your description"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                </div>
       
        </div>
    );
};

export default page;