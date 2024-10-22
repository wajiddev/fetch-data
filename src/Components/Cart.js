import react from 'react';
import { useSelector } from 'react-redux';


const Cart = () => {
    const items = useSelector(state => state);

    const total = items.cart.reduce((a, b) => a + b.price, 0)

    


    return (
        <>
            <h1 className='text-[30px] text-[blue]'>ADD to CART {items.cart.length}$  </h1>
            <h1 className='text-[30px] text-[blue]'>Total: {total}</h1>
        </>
    )
}

export default Cart