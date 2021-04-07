import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';
import { CartContext } from './CartContext';
import "./cart.css"

const Cart = () => {
    const { currentUser } = useAuth();
    const { shoppingCart, removeFromCart, setShoppingCart } = useContext(CartContext)

    const [list, updateList] = useState(shoppingCart);

    async function handleRemoveItem(e) {
        const id = e.target.getAttribute("name");
        try {
            await removeFromCart(id)
        } catch {
            console.log('error')
        }
    }

    

    return (
        <div className="cart-container">
            <h1>Kurv</h1>
            {currentUser &&
            <div className="cart-content">
                
                {list.map((item) => (
                    <div className="cart-item" key={item.id} >
                        <img className="cart-item-img" src={item.product_img} />
                        <h4 className="cart-item-name">
                            {item.product_name}
                        </h4>
                        <p className="cart-item-price">
                            {item.price + " kr"}
                        </p>
                        <div className="remove-item-btn" name={item.id}  onClick={handleRemoveItem} >X</div>
                    </div>
                ))

                }
                <button className="buynow-btn-cart">
                    Betaling
                </button>
            </div>
            }
            {!currentUser &&
            <div>
                <h2>
                    Kan ikke bruges
                </h2>
                <p>
                    Du skal være logget ind
                </p>
            </div>
            }
        </div>

    )
}

export default Cart;