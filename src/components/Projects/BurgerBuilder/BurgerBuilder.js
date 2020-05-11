import React from 'react';
import classes from './BurgerBuilder.module.css';
import DescriptiveText from '../../UI/DescriptiveText/DescriptiveText';
import burger from '../../../assets/images/burger.png';


const burgerBuilder = () => (
    <div className={classes.BurgerBuilder}>
        <div className={classes.ImageContainer}>
            <img className={classes.Image} alt='Burger icon to represent Burger Builder app' src={burger} />
        </div>
        <div>fun</div>
        <div>fun</div>
        <div>fun</div>
        <div>See more</div>
        <DescriptiveText >BURGER BUILDER</DescriptiveText>


    </div>
);

export default burgerBuilder