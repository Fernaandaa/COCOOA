import React from "react";
import "./Header.css";
import Logo from '../../img/Logo- COCOA.png'
import { FaBars , FaShoppingCart } from 'react-icons/fa';


export default function Header() {
    return (
        <div className="container-nav">
            <div className="container-logo">
                <a href="#" className="logo"><img  className="AA" src={Logo} /></a> 
    </div>
       {/*} <a href="#" className="logo"></a> 
        <div className="container-logo">
                <a href="#" className="logo"><img src={Logo} /></a> 
</div>*/}
            
            <nav className="navbar">
            
            
            
            
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler" className="i-nav"><FaBars /></label>
                <div className="menu">
                    <ul className="list">
                        <h1 className="t-logo">Cocoa</h1>
                        <li><img src={require('../../img/Logo- COCOA.png')} alt="" className="img-bottom" /></li>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li>
                            <a href="#">Panadería</a>
                            <ul className="list-subitem">
                                <li><a href="#" className="subitems">Galería</a></li>
                                <li><a href="#" className="subitems">Integral</a></li>
                                <li><a href="#" className="subitems">Artesanal</a></li>
                                <li><a href="#" className="subitems">Hojaldres</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pastelería</a>
                            <ul  className="list-subitem">
                                <li><a href="#" className="subitems">Galería</a></li>
                                <li><a href="#" className="subitems">Galletas</a></li>
                                <li><a href="#" className="subitems">Pasteles</a></li>
                                <li><a href="#" className="subitems">Postres</a></li>
                            </ul>
                        </li>
                        <li className="i-cart"><a href="#"><FaShoppingCart /></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};