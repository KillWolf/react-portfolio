import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg'

const header = () => {
    return (
        <nav className={classes.nav__container}>
            <img alt="Logo" className={classes.nav__container__image} src={logo} height="75" width="75" />
            <h1>THE <strong>MONKEY</strong> BüCKET</h1>
        </nav>
    )
}

export default header;