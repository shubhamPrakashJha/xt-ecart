export type ProductType = {
  id?: number;
  image: string;
  title: string;
  price: string;
  isCart?: boolean;
  addToCart?: () => void;
  removeFromCart?: () => void;
};