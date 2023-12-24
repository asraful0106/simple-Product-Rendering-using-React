import { useState } from 'react';
import './Modal.css'
const Modal = ({ isVisible, cartBottol, cartLength, setOpenCart }) => {
    const funsetOpenCart = setOpenCart;
    const [count, setCount] = useState(1);
    const quntityIncrease = () => {
        setCount(count + 1);
    }
    const quntityDecrise = () => {
        setCount(count - 1);
    }
    const handelClose = (e) =>{
        if(e.target.id === 'wrapper') funsetOpenCart(false);
    }
    console.log("Code3", cartBottol);
    console.log("Code3", typeof cartBottol);
    if (!isVisible) {
        return (
            <div>
            </div>
        );
    }
    if (cartLength > 0) {
        return (
            <div className='modalFullContainer' onClick={handelClose} id='wrapper'>
                <div className="modalContainer">
                    {
                        cartBottol.map(incart => (
                            <div className='modalBody' key={incart.id}>
                                <img src={incart.img} alt="" />
                                <div className='modalInfo'>
                                    <div className=''>
                                        <h4>{incart.name}</h4>
                                        <p>Single Unit Price: {incart.price}$</p>
                                    </div>
                                    <div className='totalQuntity'>
                                        <button className='quantityBtn' onClick={quntityDecrise}>-</button>
                                        <p className='quantityInfo'>{count}</p>
                                        <button className='quantityBtn' onClick={quntityIncrease}>+</button>
                                    </div>
                                    <h5>Total Price: {count*incart.price}</h5>
                                    <button onClick={() => alert(`Order Placed! Total Price: ${count*incart.price}`)}>Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    } else return (
        <div className='modalFullContainer' onClick={() => funsetOpenCart(false)}>
            <div className="modalContainer">
                <div className='modalBody'>
                    <h1>No Item In Cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Modal;