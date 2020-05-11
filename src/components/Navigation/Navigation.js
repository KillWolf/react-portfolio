import React, { useState } from 'react';
import classes from './Navigation.module.css';
import Aux from '../../hoc/Aux/Aux'

const Navigation = () => {

    const [toggleMenuState, setToggleMenuState] = useState(false);
    const [hideMenuList, setHideMenuListState] = useState(true);

    let attachedClasses = [classes.MenuList];

    if (!hideMenuList) {
        attachedClasses = [...attachedClasses, classes.MenuListShown]
    }

    const toggleMenu = () => {
        let newState = !toggleMenuState;
        setToggleMenuState(newState);
        setHideMenuListState(true);
    };

    if (toggleMenuState) {
        let newState = !toggleMenuState;
        console.log(newState)
        setTimeout(() => {
            setHideMenuListState(newState);
        }, 300)
    } 

    return (
        <Aux>
            <div onClick={toggleMenu} className={toggleMenuState ? classes.BigDot : classes.SmallDot}>
                {toggleMenuState ?
                    <div onClick={() => toggleMenu} className={classes.CloseButton}>
                        <div>X</div>
                    </div>
                    : null}
            </div>
            <div className={attachedClasses.join(' ')}>
                <ul>
                    <li>Illustrations</li>
                    <li>Music</li>
                    <li>Contact</li>
                </ul>
            </div>
        </Aux>
    )
};

export default Navigation;