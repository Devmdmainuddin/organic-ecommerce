import Image from "next/image";
import Navber from "@/components/navber";
import Hero from "@/components/Hero";
import Banefit from "@/components/Banefit";
import Trending from "@/components/Trending";
import FlashDeals from "@/components/card/Home/FlashDeals";
import Offer from "@/components/card/Home/Offer";
export default function Home() {
  return (
    <div className="">
    
    <Hero></Hero>
    <Banefit></Banefit>
<Trending></Trending>
<FlashDeals></FlashDeals>
<Offer></Offer>






      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
