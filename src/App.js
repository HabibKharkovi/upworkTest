import { useState,useEffect } from 'react';
import Header from './components/header/header';
import Homepage from './components/homePage/homePage';
import Collection from './components/collection/collection';
import Cart from './components/cart/cart';
import ProductPage from './components/productPage/productPage';
import { Switch, Route } from "react-router-dom";
import './global.scss';

function App() {

  const [ cartOpen, setCartOpen ] = useState(false);
  const [ mobileMenu, setMobileMenu ] = useState(false);
  const [ cartList, setCartList ] = useState([]);
  const [ currentProduct, setCurrentProduct ] = useState();

  const handleCartOpen = () => {
    setCartOpen(true);
  }

  const handleCartClose = () => {
    setCartOpen(false);
  }

  const openMobileMenu = () => {
    setMobileMenu(true);
  }

  const closeMobileMenu = () => {
    setMobileMenu(false);
  }

  const handleIncrement = (index) => { 

      if(cartList[index].count > 0){
          cartList[index].count += 1;
      }

      localStorage.setItem('cartList', JSON.stringify(cartList));
      setCurrentProduct(Math.random());
  }

  const handleDecrement = (index) => {
      
      if(cartList[index].count < 2){
          cartList.splice(index, 1);
      } else {
          cartList[index].count -= 1;
      }

      localStorage.setItem('cartList', JSON.stringify(cartList));
      setCurrentProduct(Math.random());
  }
  
  useEffect(() => {
      const cartList = localStorage.getItem('cartList');
      setCartList(JSON.parse(cartList));
  }, [currentProduct, cartOpen]);


  let totalItem = 0;
  let totalPrice = 0;
  
  cartList.forEach(item => {
      totalItem += item.count;
      totalPrice += item.price * item.count;
  })

  return (
    <div className="main">
      <Header 
      handleCartOpen={handleCartOpen}
      openMobileMenu={openMobileMenu}
      closeMobileMenu={closeMobileMenu}
      mobileMenu={mobileMenu}
      totalItem={totalItem}
      />
      <div className="main_content">
        <Switch>
          <Route path="/collection/product/:id" render={() => <ProductPage handleCartOpen={handleCartOpen} />}/>
          <Route path="/collection" component={Collection}/>
          <Route path="/" component={Homepage}/>
        </Switch>
      </div>
      { cartOpen && <Cart 
      handleCartClose={handleCartClose} 
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      totalItem={totalItem}
      totalPrice={totalPrice}
      cartList={cartList}
      /> }
      
    </div>
    
  );
}

export default App;
