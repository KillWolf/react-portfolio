import React from 'react';
import Content from '../Content/Content'
import Illustrations from '../Illustrations/Illustrations'
import Project from '../Projects/Project';
import Aux from '../../hoc/Aux/Aux';


const home = (props) => (
    <Aux>
        <Content />
        <Project />
        {/*<Illustrations /> ADD LATER WHEN LAYOUT IS FIXED */}
    </Aux>
);

export default home;