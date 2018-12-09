import React from 'react';
import './Sidebar.css';
import SocialLinks from '../social-links/SocialLinks';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, CART_ITEM, LOGIN_ITEM } from '../../mocks/portfolio-menu-items.mock';
import userService from '../../services/user.service';

const Sidebar = () => {
    const items = [...MENU_ITEMS, userService.checkIfUserIsAuthenticated() ? CART_ITEM : LOGIN_ITEM];
    
    return (
        <div className="sidebar">
            <ul >
                {
                    items.map(item => {
                        return <li className="item"
                            key={item.label}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    })
                }
            </ul>
            <SocialLinks />
        </div>
    )
};

export default Sidebar;