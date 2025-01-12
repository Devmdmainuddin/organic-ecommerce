import Banner01 from "@/components/banner/Banner01";
import Banner03 from "@/components/banner/Banner03";
import Deals from "@/components/Deals";
import DiscoverProducts from "@/components/DiscoverProducts";
import Feedback from "@/components/Feedback";
import Hero01 from "@/components/Hero01";
import News from "@/components/News";
import TopProducts from "@/components/TopProducts";
import TopSelling from "@/components/TopSelling";
import TrendingSections from "@/components/TrendingSections";
import Image from "next/image";


const page = () => {
    return (
        <div>
          
            
         
           
            <Deals></Deals>
            <TopProducts></TopProducts>
            <TopSelling></TopSelling>
            <Banner01></Banner01>
            <DiscoverProducts></DiscoverProducts>
            <Feedback></Feedback>
            <News></News>

        </div>
    );
};

export default page;