import { useState } from 'react';
import './Bottol.css'
const Bottol = ({bottol, addToCart}) => {
    const{name, price, img, id} = bottol;
    const addToCartFunction = addToCart;
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const btnClick = () =>{
        if(!isAddedToCart){
            addToCartFunction(id);
            setIsAddedToCart(true);
        } else alert('Item Already In Cart!');
    }
    return (
        <div>
            <div>
                <div className="cartViewContainer">
                    <img src={img} alt="" />
                    <div className='namePriceContainer'>
                        <h4>{name}</h4>
                        <h4>Price: {price}$</h4>
                    </div>
                    <div className='btnCenter'>
                        <button className={isAddedToCart && 'btnClicked'} onClick={btnClick}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottol;