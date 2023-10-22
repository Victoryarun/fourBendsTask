import { Grid, Skeleton } from "@mui/material";
import { CartLoaderStyle, CartTableList } from "../assets/css";

const CartLoader = () => {
  return (
    <CartLoaderStyle>
      <CartTableList>
        <Grid container columnSpacing={3} alignItems="center">
          <Grid item lg={2}>
            <Skeleton variant="rectangular" className="productImg" />
          </Grid>
          <Grid item lg={4}>
            <h3>
              <Skeleton variant="text" className="title" />
            </h3>
            <Skeleton variant="text" className="rating" />
            <p>
              <Skeleton variant="text" className="descrp" />
            </p>
          </Grid>
          <Grid item lg={2} textAlign="center">
            <p>
              <Skeleton variant="rectangular" className="value" />
            </p>
          </Grid>
          <Grid item lg={2} textAlign="center">
            <p>
              <Skeleton variant="rectangular" className="value" />
            </p>
          </Grid>
          <Grid item lg={2} textAlign="center">
            <p>
              <Skeleton variant="rectangular" className="value" />
            </p>
          </Grid>
        </Grid>
      </CartTableList>
    </CartLoaderStyle>
  );
};

export default CartLoader;