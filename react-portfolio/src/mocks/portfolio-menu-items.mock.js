import { FaShoppingCart, FaHome, FaThList, FaPlusSquare, FaInfo, FaSignInAlt, } from "react-icons/fa";
import React from 'react';
export const MENU_ITEMS = [
    { label: 'Home', path: '/home', icon: <FaHome /> },
    { label: 'Portfolio List', path: '/items', icon: <FaThList /> },
    { label: 'Add New Item', path: '/items/new', icon: <FaPlusSquare /> },
    { label: 'About', path: '/about', icon: <FaInfo /> },
]

export const CART_ITEM = { label: 'Cart', path: '/cart', icon: <FaShoppingCart /> };
export const LOGIN_ITEM = { label: 'Login', path: '/login', icon: <FaSignInAlt /> };