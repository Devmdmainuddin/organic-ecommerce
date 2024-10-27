

import Hero from "@/components/Hero";
import Banefit from "@/components/Banefit";
import Trending from "@/components/Trending";
import FlashDeals from "@/components/card/Home/FlashDeals";
import Offer from "@/components/card/Home/Offer";
import Testimonial from "@/components/card/Home/Testimonial";
import BlogCard from "@/components/card/BlogCard";
import BlogePost from "@/components/BlogePost";
export default function Home() {
  return (
    <div className="">
    
    <Hero></Hero>
    <Banefit></Banefit>
<Trending></Trending>
<FlashDeals></FlashDeals>
<Offer></Offer>
<Testimonial></Testimonial>
<BlogePost></BlogePost>






      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
