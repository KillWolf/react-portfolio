import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
import classes from './MenuList.module.css';


const MenuList = (props) => {

    let attachedClasses = [classes.MenuList];
    if (!props.hideMenuList) {
        attachedClasses = [...attachedClasses, classes.MenuListShown]
    }
    return (
        <div className={attachedClasses.join(' ')}>
            {/*TODO: WHITE COLOR ON LOGO */}
            <Link to="/"><img alt="Logo" className={classes.nav__container__image} src={logo} height="75" width="75" /></Link>
            <ul>
                <li><Link onClick={props.toggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.toggleMenu} to="/about">About</Link></li>
                <li>Music</li>
                <li>Contact</li>
            </ul>
        </div>
    )
};

export default MenuList;