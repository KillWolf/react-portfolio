import React from 'react';
import classes from './Placeholder.module.css';
import DescriptiveText from '../../UI/DescriptiveText/DescriptiveText';

const placeholder = () => (
    <div className={classes.Placeholder}>
        <p>Placeholder</p>
        <DescriptiveText>PLACEHOLDER</DescriptiveText>
    </div>
);

export default placeholder;