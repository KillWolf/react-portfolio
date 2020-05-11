import React from 'react';
import classes from './Descriptivetext.module.css';

//Functional component used for background text used to describe the current area.
const descriptivetext = (props) => {

    const alignment = () => {
        return props.alignment === 'left' ? classes.textAlign__left : classes.textAlign__right;
    }

    return (
        <div className={[classes.DescriptiveText, alignment()].join(' ')}>{props.children}</div>
    )
};

export default descriptivetext;