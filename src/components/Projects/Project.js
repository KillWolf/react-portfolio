import React, { useState } from 'react';
import classes from './Project.module.css'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Placeholder from './Placeholder/Placeholder';
import Aux from '../../hoc/Aux/Aux'

const Project = () => {

    const [currentProjectSelected, setCurrentProject] = useState('Burger Builder');
    const projects = [{ id: 'Burger Builder', comp: <BurgerBuilder /> }, { id: 'Placeholder', comp: <Placeholder /> }];
    const changeProjectHandler = (project) => setCurrentProject(project);

    const currentProject = projects.filter(el => el.id === currentProjectSelected);


    const projectNav = projects.map((el) => {
        const attachedClasses = [classes.Links];

        if (el.id === currentProjectSelected) {
            attachedClasses.push(classes.Active)
        }
        return (
            <Aux key={el.id}>
                <span className={attachedClasses.join(' ')} onClick={() => changeProjectHandler(el.id)}>{el.id}</span>
                <span> / </span>
            </Aux>)
    });

    return (
        <div className={classes.Project}>
            <div className={classes.ProjectNav}>Projects: {projectNav}</div>
            {currentProject[0].comp}
        </div>
    )
};

export default Project;