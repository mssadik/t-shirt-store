import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handelAddToCart = tshirt =>{
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }
    const handelDeletButton = id =>{
        const remaing = cart.filter(pd => pd._id !== id);
        setCart(remaing);
    }
    console.log(cart);
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handelAddToCart={handelAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handelDeletButton={handelDeletButton}></Cart>
            </div>
        </div>
    );
};

export default Home;