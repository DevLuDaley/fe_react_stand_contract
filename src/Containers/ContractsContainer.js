import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import { Box } from '@material-ui/core';

import {fetchContracts} from '../actions/fetchContracts'
// import {fetchWorkouts} from '../actions/fetchWorkouts'
import ContractsPage from '../components/ContractsPage';
import Contract from '../components/Contract'
import Login from '../user_auth/Login'
// import Navbar from '../components/Navbar'

class ContractsContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchContracts = fetchContracts
        this.state = {
            contracts: []
        }
    }
    componentDidMount(){
        this.props.fetchContracts()
        
    }
    render() {
        return (
            <Box>
            {/* <Navbar/> */}
                <Switch>
            {console.log('CONTRACTS CONTAINER props', this.props.contracts)}
            
            {/* {console.log('CONTRACTS CONTAINER state', this.state)} */}
            
                    <BrowserRouter>
                        <Route
                            exact path='/contracts/:id'
                            render={(routerProps) =>
                                <Contract {...routerProps}
                            contracts={this.props.contracts}
                        />}/>
                        <Route
                            exact path='/contracts'
                            render={(routerProps) =>
                                <ContractsPage {...routerProps}
                            contracts={this.props.contracts}
                        />}/>
                        <Route
                            exact path='/login'
                            render={(routerProps) =>
                                <Login {...routerProps}
                            contracts={this.props.contracts}
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