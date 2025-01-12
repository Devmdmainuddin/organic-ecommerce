import productData from "../app/httpActions/product/data";
import ProductCard1 from "./card/productCard1"
import Container from "./Container";

const TopProducts = () => {
  return (
    <div className="mt-[130px]">
      <Container>
        <h2 className="text-[#282828] font-inter text-[35px] font-bold leading-[42px]">
          Top Ratting Products
        </h2>
        <div>
          <div className=" flex flex-wrap gap-6 mt-[50px]">
            {productData?.slice(0, 4).map((item, index) => (
              <ProductCard1 key={index} item={item}></ProductCard1>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopProducts;

