import React from 'react';
import hero from '../../assets/images/jacob.jpg';
import classes from './MainContent.module.css';

const mainContent = () => {
    return (
        <div className={classes.main__content__container}>
            <div></div>
            <div className={classes.main__content__container__gridWrapper}>
                <h1 className={classes.main__content__container__gridWrapper__title}>HELLO, VISITOR</h1>
                <p className={classes.main__content__container__gridWrapper__content}>
                    Hi! I am a front-end webdeveloper who also dvelves into illustrations and other whatnots.
                </p>
            </div>
            <div>
                <div style={{ backgroundImage: `url(${hero})` }} className={classes.main__content__image} alt="Jacob with bass" ></div>
            </div>
        </div>
    )
}
// width="600" height="352"
export default mainContent;