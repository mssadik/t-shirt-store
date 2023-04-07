import React from 'react';

const Cart = ({cart, handelDeletButton}) => {
    return (
        <div>
            <h2>Order summary{cart.length}</h2>
            {
                cart.map(pd => <p>{pd.name} <button onClick={()=> handelDeletButton(pd._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;