import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';
import { CartContext } from './CartContext';

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
        <div>
            {currentUser &&
            <div>
                <h1>Kurv</h1>
                {list.map((item) => (
                    <div key={item.id} >
                        {item.product_name}
                        <span name={item.id}  onClick={handleRemoveItem} >X</span>
                    </div>
                ))

                }
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