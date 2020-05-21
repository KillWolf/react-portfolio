import React from 'react';
import classes from './Header.module.css';
import {Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'

const header = () => {
    return (
        <div className={classes.nav__container}>
            <Link to="/"><img alt="Logo" className={classes.nav__container__image} src={logo} height="75" width="75" /></Link>
            <h1>THE <strong>MONKEY</strong> BüCKET</h1>
        </div>

    )
}

export default header;