import React from 'react';
import { useGetProductsQuery } from '../../redux/api/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducer';
import './home.css'

const Home: React.FC = () => {
  const {isLoading,data,isSuccess,error}=useGetProductsQuery('')
  console.log(isLoading,data,isSuccess,error)
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
    <div className='product-container'>
      {data?.map((product) => (
        <div key={product.id} className='product-card'>
          <p>ID: {product.id}</p>
          <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.category}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
