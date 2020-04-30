import React, { useEffect } from 'react';
import classes from './Navigation.module.css';

const Navigation = (props) => {
    let attachedClasses = [classes.SmallDot];
    let showCloseButton = false;
    if (props.currentState) {
        attachedClasses = [classes.BigDot]
        setTimeout(() => {
            showCloseButton = true;
        }, 500)

    }

    useEffect(() => {
        console.log(props);
        console.log('tis', showCloseButton);
    }, [props.showCloseButton]);


    return (
        <div onClick={props.currentState ? null : props.toggleMenuState} className={attachedClasses.join(' ')}>
            {showCloseButton ?
                <div onClick={props.toggleMenuState} className={classes.CloseButton}>
                    <div>X</div>
                </div>
                : null}
        </div>
    )
};

export default Navigation;