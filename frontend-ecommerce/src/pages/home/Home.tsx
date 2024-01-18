import React,{useEffect} from 'react';
import { useGetProductsQuery } from '../../redux/api/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducer';
import './home.css'
import { useLatestProductsQuery } from '../../redux/api/productsApi';
import toast from 'react-hot-toast';

const Home: React.FC = () => {
  const {isLoading,data,isError,error,isSuccess} =useLatestProductsQuery('')
  // const {isLoading,data,isSuccess,error,isError}=useGetProductsQuery('')
  console.log(isLoading,data,isSuccess,error)
  if (isError){toast.error("Can't Fetch Products")}
  const dispatch = useDispatch();
  const handleAddToCart = (e: Product) => {
    dispatch(
      addToCart({
        id: e.id,
        name: e.name,
        price: e.price,
        quantity: 1,
      })
    );
  };
  return (
    <>
    <div className='product-container'>
      {isLoading ? <>loading</> : data?.map((product) => (
        <div key={product.id} className='product-card'>
          <p>ID: {product.id}</p>
          <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
          {/* <img src={`{server}/${product.image}`} alt={product.name} style={{ width: '200px', height: '200px' }} /> */}
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.category}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>

    </>
  );
};

export default Home;