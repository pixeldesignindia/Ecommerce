import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer";
import "./home.css";
import { useLatestProductsQuery } from "../../redux/api/productsApi";
import toast from "react-hot-toast";
import { server } from "../../redux/store";
import { Product } from "../../types/types";
import ProductCard from "../../components/productCard/ProductCard";
const Home: React.FC = () => {
  const { isLoading, data, isError, error, isSuccess } =
    useLatestProductsQuery("");
  // const {isLoading,data,isSuccess,error,isError}=useGetProductsQuery('')
  console.log(isLoading, data, isSuccess, error);
  if (isError) {
    toast.error("Can't Fetch Products");
  }
  const dispatch = useDispatch();
  const handleAddToCart = (e: Product) => {
    dispatch(
      addToCart({
        id: e._id,
        name: e.name,
        price: e.price,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <div className="product-container">
        {isLoading ? (
          <>loading</>
        ) : data ? (
          data.products?.map((i: Product) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              // handler={addToCartHandler}
              photo={i.photo}
            />

            // <div key={product._id} className='product-card'>
            //   <p>ID: {product._id}</p>
            //   <img src={`${server}/${product.photo}`} alt={product.name} style={{ width: '200px', height: '200px' }} />
            //   <p>Name: {product.name}</p>
            //   <p>Stock: {product.stock}</p>
            //   <p>Price: ${product.price}</p>
            //   <p>Description: {product.category}</p>
            //   <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            // </div>
          ))
        ) : null}
      </div>
    </>
  );
};

export default Home;
