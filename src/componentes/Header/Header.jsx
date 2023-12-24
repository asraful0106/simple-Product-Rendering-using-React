import './Header.css'
const Header = ({length, setOpenCart}) => {
    const funsetOpenCart = setOpenCart;
    return (
        <div className='headerConteiner'>
            <div className='headerNavigation'>
                <h3>Product Pro</h3>
                <h4>Home</h4>
            </div>
            <div className='cartContainer'>
                <i className="fa-solid fa-cart-shopping" onClick={() => funsetOpenCart(true)}></i>
                <p>{length ? `${length}` :''}</p>
            </div>
        </div>
    );
};

export default Header;