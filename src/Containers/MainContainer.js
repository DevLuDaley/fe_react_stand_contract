import React, { Component } from 'react';
// import {Route, Switch} from 'react-router-dom'

import {  Box } from '@material-ui/core';


import ContractsContainer from './ContractsContainer'
// import WorkoutsContainer from './WorkoutsContainer'
// import Header from '../components/Header'
// import Navbar from '../components/Navbar'


class MainContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Box>

                {/* <Header/> */}
                {/* <Navbar/> */}
                <ContractsContainer contracts={this.props.contracts}/>
                
                {/* ROUTINES CONTAINER */}

                {/* <WorkoutsContainer contracts={this.props.workouts}/> */}
                {/* WORKOUTS CONTAINER */}

            </Box> );

    }
}
export default MainContainer;