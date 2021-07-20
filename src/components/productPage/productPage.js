import { useState, useEffect } from 'react';
import CountField from '../../utilities/countField/countField';
import ProductSlider from '../slider/slider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './productPageStyles.scss';

const ProductPage = ({ handleCartOpen }) => {

    let { id } = useParams();
   
    const [product, setProduct] = useState([]);
    const [ count, setCount ] = useState(1);

    async function getProduct() {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    const handleIncrement = () => {
        if(count >= 0){
            setCount(prevCount => prevCount + 1);
        }
    }

    const handleDecrement = () => {
        if(count > 1){
            setCount(prevCount => prevCount - 1);
        }
        
    }

    const handleProductSubmit = (e, id) => {
        e.preventDefault();

        const cartList = localStorage.getItem('cartList');
        product.count = count;

        if(!cartList || cartList.length === 0) {
            localStorage.setItem('cartList', JSON.stringify([product]));
        } else {
            const productArry = JSON.parse(cartList);
            
            const result = productArry.some(product => product.id === id);

            if(result){
                productArry.forEach(product => {
                    if(product.id === id){
                        product.count += count;
                    }
                });
                console.log({productArry})
                localStorage.setItem('cartList', JSON.stringify(productArry));
            } else {
                console.log({productArry})
                productArry.push(product);
                console.log({productArry})
                localStorage.setItem('cartList', JSON.stringify(productArry));
            }
        }

        handleCartOpen(true);

    }

    return (
        <div className="product_page">
            <div className="container">
                <div className="row">
                    <div className="product_slider-wrapper">
                        <ProductSlider {...product}/>
                    </div>
                    <div className="product_contents">
                        <div className="product_contents-wrapper">
                            <h1 className="product_title">{product.title}</h1>
                            <form onSubmit={(e) => handleProductSubmit(e, product.id)}>
                                <div className="product_select-varients">
                                    <label>Choose your length</label>
                                    <select>
                                        <option value="adf">60 CM (24 INCHES)</option>
                                    </select>
                                </div>
                                <div className="product_price-wrapper">
                                    <span className="product_price">${product.price}<span className="tex-label">Tax included</span></span>
                                </div>
                                <div className="product_actives">
                                    <CountField
                                        handleDecrement={handleDecrement}
                                        handleIncrement={handleIncrement}
                                        count={count}
                                    />
                                    <button className="btn btn-primary" type="submit" >Add To Cart</button>
                                </div>
                            </form>
                            <div className="product_discription">
                                <h2 className="title">{ product.title }</h2>
                                <p className="text">{ product.description }</p>
                            </div>

                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;