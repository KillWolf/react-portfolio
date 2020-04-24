import React from 'react';
import hero from '../../assets/images/jacob.jpg';
import DescriptiveText from '../UI/DescriptiveText'
import classes from './MainContent.module.css';
import { findByLabelText } from '@testing-library/react';

const mainContent = (props) => {
    return (
        <div className={classes.main__content__container}>
            <div className={classes.FirstFlexChild}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
               
                <DescriptiveText alignment='left'>INTRODUCTION</DescriptiveText>
            </div>
            <div className={classes.SecondFlexChild}>
                <div style={{ backgroundImage: `url(${hero})` }} className={classes.main__content__image} alt="Jacob with bass" ></div>
            </div>
        </div>
    )
}




{/* 
<form onSubmit={props.onSubmit}>
<h1>
    HELLO, <input className={classes.main__content__input} onChange={props.change} value={props.name.toUpperCase()}></input>
    {/* <div className={classes.main__content__input__nameChangeContainer}>
        {props.nameChanged ? <div className={classes.main__content__input__nameChange}>Name changed to {props.name}. Welcome!</div> : <div></div>}
    </div> }
</h1>
</form>
<p className={classes.MainText}>
    I'm <i>Jacob</i>, a frontend developer, with a keen interest in 
    <span className={classes.TextDecoration__Purple}>music</span> and 
<span className={classes.TextDecoration__Orange}>illustrations</span> aswell.</p> */}

export default mainContent;