import React, { useState, useEffect } from 'react';
import Cart from './Components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './redux/Slice';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((dummydata) => {
        setData(dummydata.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className='bg-blue-200 flex justify-around flex-col items-center  p-1 '>

        <Cart />
        <h1 className='text-center text-white text-[30px] font-bold '>FETCH DATA FROM API</h1>

        {data.map((product) => (
          <div className='w-[500px] p-1 border' key={product.id}>

            <h1 className='text-[20px] my-2'>
              {product.title}
            </h1>

            <h5 className='text-[20px] my-2'>
              {product.brand}
            </h5>

            <h5 className='text-[20px] my-2'>
              Price:{product.price}
            </h5>
            <div className='flex justify-around'>

              <button onClick={e => (dispatch(addItem({ title: product.title, price: product.price })))} className='p-3 bg-[blue] w-[200px] text-white text-md rounded-md '>Add to cart</button>

              <button onClick={() => dispatch(removeItem(product.title))} className='p-3 bg-[red] w-[200px] text-white rounded-md mx-3 text-md'>
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}



export default App;

