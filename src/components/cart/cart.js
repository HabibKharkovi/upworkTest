import CountField from '../../utilities/countField/countField';
import { ReactComponent as CartClose } from '../../assets/cart_close_btn.svg';
import './cartStyles.scss';

const Cart = ({ handleCartClose, handleDecrement, handleIncrement, totalItem, cartList, totalPrice }) => {

    return (
        <div className="cart_model">
            <div className="cart_wrapper">
                <div className="cart_header">
                    <div className="cart_header-wrapper">
                        <span className="cart_header-label">CART ( {totalItem} ITEMS)</span>
                        <span className="cart_close-btn" onClick={handleCartClose}>
                            <CartClose/>
                        </span>
                    </div>
                </div>
                <div className="cart_body">
                   <ul className="cart_list">
                       {
                           cartList.map((product, index) => {
                                return (
                                    <li className="cart_item" key={product.id}>
                                        <div className="cart_item-wrapper">
                                            <div className="cart_item--image-wrapper">
                                                <img src={product.image} />
                                            </div>
                                            <div className="cart_item-content">
                                                <h3 className="cart_item-name">{ product.title }</h3>
                                                <div className="cart_item-price">
                                                    <span className="cart_item--discount-price">${ product.price }{product.count <= 1 ? null : " X " + product.count}</span>
                                                    {/* <span className="cart_item--original-price">$29.95</span> */}
                                                </div>
                                                <CountField
                                                    handleDecrement={handleDecrement}
                                                    handleIncrement={handleIncrement}
                                                    count={product.count}
                                                    productId= {product.id}
                                                    index = {index}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                )
                           })
                       }
                        
                   </ul>
                </div>
                <div className="cart_footer">
                    <div className="cart_footer-wrapper">
                        <div className="cart_total-wrapper">
                            <span className="cart_total-label">Subtotal</span>
                            <span className="cart_total-price">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="cart_btn-group">
                            <button className="btn btn-secondary">View Cart</button>
                            <button className="btn btn-primary">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;