import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css';

const Menu = (props) => {
    return (
        <nav className="menu_main">
            <div className="logo-container">
                <Link to="/">
                    <img  className="logo" src={require('../img/kvklogo.png')} alt="kvk-union-logo"/>
                </Link>     
            </div>
            <div className="nav_bar">
                <ul>
                    <li className="dropdown_menu">
                        <p>Новинки</p>
                        <ul className="dropdown_content">
                            <li className="menu_item">Новинка 1</li>
                            <li className="menu_item">Новинка 2</li>
                            <li className="menu_item">Новинка 3</li>
                            <li className="menu_item">Новинка 4</li>
                        </ul>
                    </li>
                    <li className="dropdown_menu">Светильники</li>
                    <li className="dropdown_menu">Фурнитура</li>
                    <li className="dropdown_menu">Крепёж</li>
                    <li className="dropdown_menu">
                        <Link to="/add_group">Добавить группу товаров</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    );
};

export default Menu;