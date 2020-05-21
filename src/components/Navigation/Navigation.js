import React, { useState } from 'react';
import classes from './Navigation.module.css';
import MenuList from './MenuList/MenuList'
import Aux from '../../hoc/Aux/Aux'

const Navigation = () => {

    const [toggleMenuState, setToggleMenuState] = useState(false);
    const [hideMenuList, setHideMenuListState] = useState(true);

    
    const toggleMenu = () => {
        let newState = !toggleMenuState;
        setToggleMenuState(newState);
        setHideMenuListState(true);
    };

    if (toggleMenuState) {
        let newState = !toggleMenuState;
        setTimeout(() => {
            setHideMenuListState(newState);
        }, 300)
    }

    return (
        <Aux>
            <div onClick={toggleMenuState ? null : toggleMenu} className={toggleMenuState ? classes.BigDot : classes.SmallDot}>
                {toggleMenuState ?
                    <div onClick={toggleMenu} className={classes.CloseButton}>
                        <div >X</div>
                    </div>
                    : null}
                    <MenuList toggleMenu={toggleMenu} hideMenuList={hideMenuList}/>
            </div>

        </Aux>
    )
};

export default Navigation;