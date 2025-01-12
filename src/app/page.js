import Hero from "@/components/Hero";
import Banefit from "@/components/Banefit";
import Trending from "@/components/Trending";
import FlashDeals from "@/components/card/Home/FlashDeals";
import Offer from "@/components/card/Home/Offer";
import Testimonial from "@/components/card/Home/Testimonial";
import BlogCard from "@/components/card/BlogCard";
import BlogePost from "@/components/BlogePost";
import Choose from "@/components/Choose";
import CategorySlider from "@/components/CategorySlider";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryProdects from "@/components/CategoryProdects";
export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Banefit></Banefit>
      <CategorySlider />
      <Trending></Trending>
      <Choose />
      <Offer />
      <FeaturedProducts />
      <CategoryProdects/>
      <Testimonial></Testimonial>
      <BlogePost></BlogePost>
    </div>
  );
}
