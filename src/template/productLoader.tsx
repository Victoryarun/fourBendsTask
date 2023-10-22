import { Skeleton } from "@mui/material";
import { ProductCard, ProductLoaderStyle } from "../assets/css";

const ProductLoader = () => {
  return (
    <ProductLoaderStyle>
      <ProductCard>
        <Skeleton variant="rectangular" className="productImage" />

        <div className="productContent">
          <div className="priceSec">
            <h3 className="price">
              <Skeleton variant="text" className="price" />
            </h3>
          </div>
          <h2>
            <Skeleton variant="text" />
          </h2>
          <div className="description">
            <p>
              <Skeleton variant="text" />
            </p>
            <p>
              <Skeleton variant="text" />
            </p>
          </div>
        </div>

        <div className="buttonSec">
          <Skeleton variant="rectangular" className="cartBtn" />
        </div>
      </ProductCard>
    </ProductLoaderStyle>
  );
};

export default ProductLoader;