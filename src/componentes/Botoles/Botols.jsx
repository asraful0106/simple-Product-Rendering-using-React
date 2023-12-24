import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Bottol from "../Bottol/Bottol"
import './Botols.css'
import Modal from "../Modal/Modal";
import { addToLS, chekSaveCart } from "../Utilitis/LocalStorage";

const Botols = () => {
    // Fetching Data from API
    const [bottol, setBottol] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('bottles.json');
                const data = await res.json();
                setBottol(data);
            } catch (error) {
                console('Error on featching API: ', error);
            }
        };
        loadData();
    }, []);

    // Button Functionality
    const [cart, setCart] = useState([]);
    // Updating cart from local stroge
    useEffect(() => {
        console.log('LS cart: ', chekSaveCart());
        setCart(chekSaveCart());
    }, []);
    const addToCart = (id) => {
        const newCart = [...cart, id];
        addToLS(id);
        setCart(newCart);
    };
    // getting cart details for showing cart item
    const [cartBottol, setCartBottol] = useState([]);
    useEffect(() => {
        const updateCartBottol = cart.map(id => bottol.find(b => b.id === id));
        setCartBottol(updateCartBottol);
    }, [cart, bottol]);
    // Creating a state for togo the cart
    const [openCart, setOpenCart] = useState(false);
    return (
        <div>
            <Modal key={cartBottol.id} cartBottol={cartBottol} isVisible={openCart} cartLength={cart.length} setOpenCart={setOpenCart}></Modal>
            <Header length={cart.length} setOpenCart={setOpenCart}></Header>
            <div className="BottolContainer">
                {
                    bottol.map(bottol => <Bottol key={bottol.id} bottol={bottol} addToCart={addToCart}></Bottol>)
                }
            </div>
        </div>
    );
};

export default Botols;