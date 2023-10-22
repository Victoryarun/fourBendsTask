export interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IUserAuth {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  isAuthenticated: boolean;
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  //Cart Deyails
  description: string;
  thumbnail: string;
  rating: number;
  stock: number;
}

export interface ICartData {
  carts: [
    {
      id: number;
      products: ICartItem[];
      total: number;
      discountedTotal: number;
      userId: number;
      totalProducts: number;
      totalQuantity: number;
    }
  ];
  limit: number;
  skip: number;
  total: number;
}
