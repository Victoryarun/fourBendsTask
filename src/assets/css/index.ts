import styled, { createGlobalStyle } from "styled-components";
import { Container } from "@mui/material";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body, p, button, label {
    font-family: 'Open Sans', sans-serif;
}
button{
    cursor:pointer;
}
`;
export const PageContainer = styled(Container)`
  background: #ffffff;
  padding-bottom: 50px;
`;
export const Header = styled.div`
  padding: 20px 0px;
  margin-bottom: 20px;
  .menu {
    margin: 0px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    box-shadow: 1px 1px 10px rgb(0 0 0/0.1);
    background: #ffffff;
    li {
      list-style: none;
      margin-right: 25px;
      &:last-child {
        margin-right: 0px;
      }
      a {
        text-decoration: none;
        color: rgb(0 0 0/0.7);
        font-size: 16px;
        &.active {
          color: rgb(0 0 0);
          font-weight: 700;
        }
      }
      .logoutBtn {
        display: flex;
        align-items: center;
        border: none;
        font-size: 16px;
        font-weight: 600;
        padding: 8px 15px;
        border-radius: 25px;
        background: #f70000;
        border: 2px solid #f70000;
        color: #ffffff;
        box-shadow: 0px 4px 10px #f7000075;
        transition-duration: 0.3s;
        svg {
          font-size: 16px;
          margin-right: 5px;
        }
        &:hover {
          background: #f70000c9;
        }
      }
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 90px;
    display: block;
    filter: invert(1);
  }
`;
export const FormStyle = styled.div`
  .MuiFormControl-root {
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    margin-bottom: 10px;
    .MuiOutlinedInput-notchedOutline {
      border-radius: 25px;
    }
  }
  .MuiButtonBase-root {
    border-radius: 25px;
  }
`;
export const Button = styled.button`
  display: flex;
  background: #000000;
  border-radius: 25px;
  padding: 13px 30px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0px 5px 10px rgb(0 0 0/0.2);
  transition-duration: 0.3s;
  border: 2px solid #000000;
  &:disabled {
    background: #ddd;
    color: #000;
    border-color: #ddd;
    cursor: not-allowed;
    &:hover {
      background: #ddd;
    }
  }
  svg {
    margin-right: 10px;
    font-size: 18px;
  }
  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;
export const PageTitle = styled.h1`
  font-size: 34px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
`;
export const Rating = styled.div`
  background: #008000;
  color: #ffffff;
  font-weight: 700;
  padding: 5px 7px;
  font-size: 12px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px #0080006e;
  width: fit-content;
  svg {
    font-size: 14px;
    margin-right: 3px;
  }
`;
export const ProductCard = styled.div`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgb(0 0 0/0.2);
  padding: 20px;
  .productImage {
    width: 100%;
    height: 200px;
    display: block;
    object-fit: contain;
    object-position: center;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .productContent {
    .priceSec {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      .price {
        font-size: 24px;
        margin: 0px;
      }
    }
    h2 {
      margin-top: 0px;
      font-size: 18px;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      height: 40px;
      margin: 0px 0px 20px;
      p {
        font-size: 14px;
        margin: 0px;
      }
    }
  }
  .buttonSec {
    display: flex;
    justify-content: center;
  }
`;
export const ProductLoaderStyle = styled.div`
  .productContent {
    .priceSec {
      .price {
        width: 200px;
      }
    }
    .description {
      p {
        &:last-child {
          .MuiSkeleton-root {
            width: 150px;
          }
        }
      }
    }
  }
  .buttonSec {
    .cartBtn {
      width: 100%;
      height: 49px;
      border-radius: 10px;
    }
  }
`;
export const CartHeader = styled.div`
  padding-bottom: 25px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
`;
export const CartTableList = styled.div`
  padding: 15px;
  box-shadow: 0 4px 15px rgb(0 0 0/0.2);
  border-radius: 15px;
  .productImg {
    width: 100%;
    height: 150px;
    object-fit: contain;
    object-position: center;
    display: block;
  }
  h3 {
    margin-top: 0px;
    margin-bottom: 15px;
  }
  p {
    margin: 0px;
  }
  ${Rating} {
    margin-bottom: 10px;
  }
`;
export const CardTotal = styled.div`
  padding-bottom: 25px;
  .label {
    font-weight: 700;
  }
  .price {
    font-weight: 600;
    font-size: 16px;
  }
`;
export const CartLoaderStyle = styled.div`
  h3 {
    margin-bottom: 0px;
  }
  .title {
    width: 250px;
    height: 45px;
  }
  .rating {
    width: 60px;
    border-radius: 10px;
    height: 40px;
  }
  .descrp {
    width: 80%;
  }
  .value {
    width: 100px;
  }
`;
export const ImgContentSec = styled.div`
  text-align: center;
  .img {
    width: 80%;
  }
`;