import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Styles
import { Grid } from "@mui/material";
import { Star } from "@mui/icons-material";
import {
  Button,
  CardTotal,
  CartHeader,
  ImgContentSec,
  CartTableList,
  PageTitle,
  Rating,
} from "../assets/css";
//Redux
import { useSelector } from "react-redux";
import { IReducer } from "../redux/reducer";
//Interface
import { ICartData, ICartItem, IProductItem } from "../interface";
//Components
import CartLoader from "../template/cartLoader";
//Images
import emptyCart from "../assets/img/empty-cart.png";

const cartState = {
  carts: [
    {
      id: 0,
      products: [],
      total: 0,
      discountedTotal: 0,
      userId: 0,
      totalProducts: 0,
      totalQuantity: 0,
    },
  ],
  limit: 0,
  skip: 0,
  total: 0,
} as ICartData;

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, isAuthenticated } = useSelector(
    (state: IReducer) => state.userAuth
  );
  const [cartData, setCartData] = useState<ICartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<ICartData>(cartState);
  const [loader, setLoader] = useState<boolean>(true);

  const intialLoad = useCallback(async () => {
    setLoader(true);
    if (isAuthenticated) {
      await fetch(`https://dummyjson.com/carts/user/${id}`)
        .then((res) => res.json())
        .then((cartResponse) => {
          setCartTotal(cartResponse);
          return cartResponse;
        })
        .then(async (data: ICartData) => {
          data.carts[0].products.forEach(async (cartData: any) => {
            await fetch(`https://dummyjson.com/products/${cartData.id}`)
              .then((res) => res.json())
              .then((productData: IProductItem) => {
                setCartData((state) => [
                  ...state,
                  {
                    ...cartData,
                    description: productData.description,
                    thumbnail: productData.thumbnail,
                    rating: productData.rating,
                    stock: productData.stock,
                  },
                ]);
                setLoader(false);
              });
          });
        });
    } else {
      setCartData([]);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [id, isAuthenticated]);

  useEffect(() => {
    intialLoad();
  }, [intialLoad]);

  const Loaders = [...Array(4)].map((_item: number, i: number) => {
    return (
      <Grid key={i} item lg={12}>
        <CartLoader />
      </Grid>
    );
  });

  return (
    <>
      <PageTitle>Cart Page</PageTitle>
      {loader ? (
        <Grid container rowSpacing={3}>
          {Loaders}
        </Grid>
      ) : cartData.length > 0 ? (
        <>
          <CartHeader>
            <Grid container columnSpacing={3} alignItems="center">
              <Grid item lg={2}>
                Product Image
              </Grid>
              <Grid item lg={4}>
                Product Details
              </Grid>
              <Grid item lg={2} textAlign="center">
                Price
              </Grid>
              <Grid item lg={2} textAlign="center">
                Quantity
              </Grid>
              <Grid item lg={2} textAlign="center">
                Total
              </Grid>
            </Grid>
          </CartHeader>

          <Grid container rowSpacing={3}>
            {cartData.map((item: ICartItem, i: number) => {
              return (
                <Grid item key={i} lg={12}>
                  <CartTableList>
                    <Grid container columnSpacing={3} alignItems="center">
                      <Grid item lg={2}>
                        <img
                          className="productImg"
                          src={item.thumbnail}
                          alt={item.title}
                        />
                      </Grid>
                      <Grid item lg={4}>
                        <h3>{item.title}</h3>
                        <Rating>
                          <Star />
                          {item.rating}
                        </Rating>
                        <p>{item.description}</p>
                      </Grid>
                      <Grid item lg={2} textAlign="center">
                        <p>{item.price}</p>
                      </Grid>
                      <Grid item lg={2} textAlign="center">
                        <p>{item.quantity}</p>
                      </Grid>
                      <Grid item lg={2} textAlign="center">
                        <p>{item.total}</p>
                      </Grid>
                    </Grid>
                  </CartTableList>
                </Grid>
              );
            })}
          </Grid>

          <CardTotal>
            <Grid container mt={5}>
              <Grid item lg={10} textAlign="right">
                <span className="label">Sub Total</span>
              </Grid>
              <Grid item lg={2} textAlign="center">
                <span className="price">{cartTotal.carts[0].total}</span>
              </Grid>
            </Grid>
          </CardTotal>

          <CardTotal>
            <Grid container>
              <Grid item lg={10} textAlign="right">
                <span className="label">Discount</span>
              </Grid>
              <Grid item lg={2} textAlign="center">
                <span className="price">
                  -{" "}
                  {cartTotal.carts[0].total -
                    cartTotal.carts[0].discountedTotal}
                </span>
              </Grid>
            </Grid>
          </CardTotal>

          <CardTotal>
            <Grid container>
              <Grid item lg={10} textAlign="right">
                <span className="label">Total</span>
              </Grid>
              <Grid item lg={2} textAlign="center">
                <span className="price">
                  {cartTotal.carts[0].discountedTotal}
                </span>
              </Grid>
            </Grid>
          </CardTotal>
        </>
      ) : (
        <>
          <Grid container justifyContent="center">
            <Grid item lg={3}>
              <ImgContentSec>
                <img className="img" src={emptyCart} alt="empty cart" />
                <h3>Your cart is empty</h3>
                <p>Looks like you have not added anything to your cart. </p>
                <Button
                  onClick={() =>
                    navigate("/login", { state: { from: location.pathname } })
                  }
                >
                  Go to Login
                </Button>
              </ImgContentSec>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default CartPage;
