function chekSaveCart(){
    const savedCart = window.localStorage.getItem('cart');
    if(savedCart){
        return JSON.parse(savedCart);
    }
    return [];
}

function addToLS(id){
    const cart = chekSaveCart();
    cart.push(id);
    const stringCart = JSON.stringify(cart);
    window.localStorage.setItem('cart', stringCart);
}
export {chekSaveCart, addToLS};
