import React from 'react';
import hero from '../../assets/images/jacob.jpg';
import DescriptiveText from '../UI/DescriptiveText/DescriptiveText'
import classes from './Content.module.css';

const content = (props) => {
    return (
        <div className={classes.main__content__grid__container}>
            <div className={classes.MainText}>
                <form onSubmit={props.onSubmit}>
                    <h1 className={classes.MainHeader}>
                        HELLO, <input className={classes.main__content__input} onChange={props.change} value={props.name.toUpperCase()}></input>
                        <div className={classes.main__content__input__nameChangeContainer}>
                            {props.nameChanged ? <div className={classes.main__content__input__nameChange}>Name changed to {props.name}. Welcome!</div> : <div></div>}
                        </div>
                    </h1>
                </form>
                <p className={classes.BodyText}>
                    I'm <i>Jacob</i>, a frontend developer, with a keen interest in<span className={classes.TextDecoration__Purple}>music</span> and<span className={classes.TextDecoration__Orange}>illustrations.</span></p>
            </div>
            <img src={hero} alt="Jacob in awesome pose" className={classes.MainImage} />
            <DescriptiveText alignment="left">INTRODUCTION</DescriptiveText>
        </div>
    )
}




export default content;