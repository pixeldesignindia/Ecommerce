export interface User{
    name: string;
    email: string;
    gender: string;
    _id: string;
    photo: string;
    role?:string;
    dob: string;
}
export interface Product{
    name:string;
    category:string;
    price: number;
    _id: string;
    photo: string;
    stock:number;
}
export type CartItem = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };

  export type ShippingInfo = {
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
