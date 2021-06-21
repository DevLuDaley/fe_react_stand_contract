import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import { Box } from '@material-ui/core';

import {fetchContracts} from '../actions/fetchContracts'
// import {fetchWorkouts} from '../actions/fetchWorkouts'
import ContractsPage from '../components/ContractsPage';
import Contract from '../components/Contract'
// import Navbar from '../components/Navbar'

class ContractsContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchContracts = fetchContracts
        // this.fetchWorkouts = fetchWorkouts
        this.state = {
            contracts: []
            // ,
            // workouts: []
        }
    }
    componentDidMount(){
        this.props.fetchContracts()
        // this.props.fetchWorkouts()
        
    }
    render() {
        return (
            <Box>
            {/* <Navbar/> */}
                <Switch>
            {console.log('CONTRACTS CONTAINER props', this.props.contracts)}
            
            {console.log('CONTRACTS CONTAINER state', this.state)}
            
                <BrowserRouter>
                    {/* <Route
                        exact path='/'
                        render={(routerProps) =>
                            <ContractsPage {...routerProps}
                        contracts={this.props.contracts}
                        // workouts={this.props.workouts}
                    />}/> */}

                    <Route
                        exact path='/contracts/:id'
                        render={(routerProps) =>
                            <Contract {...routerProps}
                        contracts={this.props.contracts}
                        // workouts={this.props.workouts}
                    />}/>

                    <Route
                    exact path='/contracts'
                    render={(routerProps) =>
                        <ContractsPage {...routerProps}
                    contracts={this.props.contracts }
                    // workouts={this.props.workouts}
                    />}/>
</BrowserRouter>
                </Switch>
            </Box> 
        );
    }
}

//! redux store
const mapStateToProps = state => {
    return(
        {
            contracts: state.contractsReducer.contracts
            // ,
            // workouts: state.workoutsReducer.workouts
        }
    )
}

export default connect(mapStateToProps, {fetchContracts//, fetchWorkouts
})(ContractsContainer);