import { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import { ReactComponent as MobileSearchIcon } from '../../assets/mobile_search_icon.svg';
import { ReactComponent as CartIcon } from '../../assets/cart_icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu_icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/mobile_close_btn.svg';
import './headerStyles.scss';

const Header = ({ handleCartOpen, totalItem, closeMobileMenu, openMobileMenu, mobileMenu }) => {

    return (
    <>
        <header className="header">
            <div className="container">
                <div className="mobile_menu-icon" onClick={openMobileMenu}> 
                    <MenuIcon/>
                </div>
                <div className="header_left">
                <a href="/" className="logo_wrapper">
                    <img className="logo_image" src={logo} alt="BRAND LOGO"/>
                </a>
                </div>
                <div className="header_right">
                    <ul className="header_menu">
                        <li className="header_menu--item">
                            <a className="header_menu--link">Vikings</a>
                        </li>
                        <li className="header_menu--item">
                            <a className="header_menu--link">Ancient Egypt</a>
                        </li>
                        <li className="header_menu--item">
                            <a className="header_menu--link">Celtics</a>
                        </li>
                        <li className="header_menu--item">
                            <a className="header_menu--link">Sale</a>
                        </li>
                    </ul>
                    <div className="header_icons">
                        <span className="search-icon icon">
                            <SearchIcon/>
                        </span>
                        <span className="cart-icon icon" onClick={handleCartOpen}>
                            <CartIcon/>
                            <span className="count">{totalItem}</span>    
                        </span>
                    </div>
                </div>
            </div>
        </header>
        {
            mobileMenu &&
            <div className="mobile_menu-model">
                <span className="mobile_menu--close-btn" onClick={closeMobileMenu}>
                    <CloseBtn/>
                </span>
                <div className="mobile_menu-wrapper">
                    <div className="search_bar">
                        <input type="search" placeholder="Type your search" />
                        <button className="mobile_search-icon">
                            <MobileSearchIcon/>
                        </button>
                    </div>
                    <ul className="header_menu">
                        <li className="header_menu--item">
                            <a className="header_menu--link">Vikings</a>
                        </li>
                        <li className="header_menu--item">
                            <a className="header_menu--link">Ancient Egypt</a>
                        </li>
                        <li className="header_menu--item">
                            <a className="header_menu--link">Celtics</a>
                        </li>
                        <li className="header_menu--item">
                            <a className="header_menu--link">Sale</a>
                        </li>
                    </ul>
                </div>
            </div>
        }
    </>
    )
}

export default Header;