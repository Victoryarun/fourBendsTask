import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
//Interface
import { IProductItem } from "../interface";
//Css
import { Button, ImgContentSec, PageTitle } from "../assets/css";
//Components
import ProductCardComponent from "../components/productCardComponent";
import ProductLoader from "../template/productLoader";
//Images
import noProduct from "../assets/img/no-product.png";

const ProductsPage = () => {
  const [pagination, setPagination] = useState({skip:0, limit:12});
  const [state, setState] = useState<IProductItem[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [newLoader, setNewLoader] = useState<boolean>(false);

  const intialLoad = useCallback( async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=${pagination.limit}&skip=${pagination.skip}`).then(
      (res) => res.json()
    );
    if (response) {
      setState(state => [...state,  ...response.products]);
      setLoader(false);
      setNewLoader(false)
    }
  },[pagination])

  const loadMore = () => {
    setNewLoader(true)
    setPagination({limit:12, skip:state.length+1})
  }

  useEffect(() => {
    intialLoad();
  }, [intialLoad]);

  const Loaders = [...Array(4)].map((_item: number, i: number) => {
    return (
      <Grid key={i} item lg={3}>
        <ProductLoader />
      </Grid>
    );
  });

  return (
    <>
      <PageTitle>Products List</PageTitle>

      {loader ? (
        <Grid container spacing={5}>
          {Loaders}
        </Grid>
      ) : state.length > 0 ? (
        <>
        <Grid container spacing={5}>
          {state.map((item: IProductItem, i: number) => {
            return (
              <Grid key={i} item lg={3}>
                <ProductCardComponent {...item} />
              </Grid>
            );
          })}

          {newLoader && Loaders}
        </Grid>
        <Grid container spacing={5} justifyContent="center" mt={4}>
          <Grid item lg={2}>
              <Button onClick={loadMore}>Load More</Button>
          </Grid>
        </Grid>
        </>
      ) : (
        <Grid container justifyContent="center">
          <ImgContentSec>
            <img className="img" src={noProduct} alt="no product" />
            <h3>Products not fount</h3>
          </ImgContentSec>
        </Grid>
      )}
    </>
  );
};

export default ProductsPage;