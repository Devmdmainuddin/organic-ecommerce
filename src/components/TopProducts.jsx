import productData from "../app/httpActions/product/data";
import ProductCard01 from "./card/ProductCard01";
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
              <ProductCard01 key={index} item={item}></ProductCard01>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopProducts;

