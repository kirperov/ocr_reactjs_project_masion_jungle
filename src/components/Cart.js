import '../styles/Cart.css';
const price1 = 8;
const price2 = 10;
const price3 = 15;

function Cart() {
    return (
    <div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Monstera : { price1 }€</li>
            <li>Lierre : { price2 }€</li>
            <li>Fleurs : { price3 }€</li>
        </ul>
        Total : { price1 + price2 + price3 } €
    </div>)

}

export default Cart;