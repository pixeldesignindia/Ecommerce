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
