import React from 'react';
import DescriptiveText from '../UI/DescriptiveText'
import classes from './Illustrations.module.css';
import fedteminister from '../../assets/images/fedteminister.jpg'

const illustrations = () => {
    return (
        <div className={classes.MainIllustration}>
            <div className={classes.image} style={{ backgroundImage:`url(${fedteminister})`}}></div>
            <div>fun</div>
            <div>fun</div>
            <div>fun</div>
            <div>See more</div>
            <DescriptiveText >ILLUSTRATIONS</DescriptiveText>


        </div>
    )
    
}

export default illustrations;