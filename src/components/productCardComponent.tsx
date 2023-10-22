import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
import { IReducer } from "../redux/reducer";
//Styles
import { ShoppingCart, Star } from "@mui/icons-material";
import { Button, ProductCard, Rating } from "../assets/css";
//Interface
import { IProductItem } from "../interface";

const ProductCardComponent = (props: IProductItem) => {
  const navigate = useNavigate();
  const { price, thumbnail, rating, title, description } = props;
  const { id, isAuthenticated } = useSelector(
    (state: IReducer) => state.userAuth
  );
  const [loader, setLoader] = useState<boolean>(false);

  const addCart = async () => {
    if (isAuthenticated) {
      setLoader(true);
      const response = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: id,
          products: [
            {
              id: props.id,
              quantity: 1,
            },
          ],
        }),
      }).then((res) => res.json());

      if (response.message !== "User id is required") {
        setLoader(false);
      } else {
        setLoader(false);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <ProductCard>
      <img className="productImage" src={thumbnail} alt={title} />

      <div className="productContent">
        <div className="priceSec">
          <h3 className="price">&#36; {price}</h3>
          <Rating>
            <Star />
            {rating}
          </Rating>
        </div>
        <h2>{title}</h2>
        <div className="description">
          <p>
            {description.length > 75
              ? `${description.substring(0, 75)}.....`
              : description}
          </p>
        </div>
      </div>

      <div className="buttonSec">
        <Button onClick={addCart} disabled={loader}>
          {loader ? (
            "Loading..."
          ) : (
            <>
              <ShoppingCart />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </ProductCard>
  );
};

export default ProductCardComponent;