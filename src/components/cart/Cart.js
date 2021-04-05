import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';
import { CartContext } from './CartContext';

const Cart = () => {
    const { currentUser } = useAuth();
    const { shoppingCart } = useContext(CartContext)

    const [list, updateList] = useState(shoppingCart);
    console.log(list)

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
        updateList(list.filter(item => item.id !== name));
    };

    return (
        <div>
            {currentUser &&
            <div>
                <h1>Kurv</h1>
                
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