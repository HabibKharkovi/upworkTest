import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouteMatch, Link } from "react-router-dom";
import './collectionStyles.scss';

const Collection = () => {

    const [productList, setProductList] = useState([]);

    async function getProductList() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProductList(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getProductList();
    }, [])

    let match = useRouteMatch();
    console.log({match})

    return (
        <div className="collection_page">
            <div className="container">
                <div className="product_list">
                    {
                        productList.length > 0 && productList.map(product => {
                            return (
                                <Link to={`${match.url}/product/${product.id}`} className="product" key={product.id}>
                                    <div className="product_inner-wrapper">
                                        <div className="product_image-wrapper">
                                            <img src={product.image} />
                                        </div>
                                        <h2 className="product_title">{product.title}</h2>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Collection;