import React from 'react';
import classes from './Illustrations.module.css';
import fedteminister from '../../assets/images/fedteminister.jpg'

const illustrations = () => {
    return (
        <div className={classes.main__illustration}>
            <div style={{ backgroundImage:`url(${fedteminister})`}}></div>
            <div>fun</div>
            <div>fun</div>
            <div>fun</div>

        </div>
    )
    
}

export default illustrations;