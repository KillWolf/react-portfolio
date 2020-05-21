import React from 'react';
import hero from '../../assets/images/jacob.jpg';
import DescriptiveText from '../UI/DescriptiveText/DescriptiveText'
import classes from './Content.module.css';

const content = (props) => {
    return (
        <div className={classes.main__content__grid__container}>
            <div className={classes.MainText}>
                    <h1 className={classes.MainHeader}>HELLO, <span style={{fontWeight: '700'}}>VISITOR</span></h1>
                <p className={classes.BodyText}>
                    I'm <i>Jacob</i>, a frontend developer, with a keen interest in<span className={classes.TextDecoration__Purple}>music</span> and<span className={classes.TextDecoration__Orange}>illustrations.</span></p>
            </div>
            <img src={hero} alt="Jacob in awesome pose" className={classes.MainImage} />
            <DescriptiveText alignment="left">INTRODUCTION</DescriptiveText>
        </div>
    )
}




export default content;