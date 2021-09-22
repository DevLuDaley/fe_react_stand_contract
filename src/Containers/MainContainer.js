import React, { Component } from 'react';
// import {Route, Switch} from 'react-router-dom'

import {  Box } from '@material-ui/core';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import {Home, Login, Logged_in} from './user_auth'
import TempPage from '../user_auth/TempPage'
import Home from '../user_auth/Home'
import Login from '../user_auth/Login'
import Signup from '../user_auth/Signup'
import Contract from '../components/Contract';
import ContractsList from '../components/ContractsList';
import ContractsPage from '../components/ContractsPage';

import ContractsContainer from './ContractsContainer'

// import WorkoutsContainer from './WorkoutsContainer'
// import Header from '../components/Header'
// import Navbar from '../components/Navbar'


class MainContainer extends Component {
    
//     render() {
//         return (
//             <Box>
//                 <ContractsContainer contracts={this.props.contracts}/>
//             </Box> );

//     }
// }

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      // isLoggedIn: true,
      user: {}
     };
     this.props = props;
  }
componentDidMount() {
  this.loginStatus()
}
loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', 
    {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
        console.log(" MAIN =>>> this.props ",this.props);
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}
            />
            {/* <Route exact path='/login' component={Login}  */}
              {/* // render={ handleLogin={handleLogin}}  */}
            {/* /> */}
             {/* <Route
                  exact path='/login'
                  render={(routerProps) =>
                      <Login {...routerProps}
                      contracts={this.props.contracts
                      }
              />}/> */}
              <Route
                            exact path='/login'
                            render={(routerProps) =>
                                <Login {...routerProps}
                            contracts={this.props.contracts}
                        />}/>
            

            <Route
                            exact path='/contracts'
                            render={(routerProps) =>
                                <ContractsPage {...routerProps}
                            contracts={this.props.contracts}
                        />}/>

            {/* <Route exact path='/TempPage' component={TempPage}  */}
            {/* /> */}

            <Route 
              exact path='/signup' 
              component={Signup} 
            />

          </Switch>
        </BrowserRouter>
        {/* <ContractsContainer contracts={this.props.contracts}/>
         */}

             <Box>
                 <ContractsContainer contracts={this.props.contracts}/>
             </Box>
      </div>
    );
  }
  }

export default MainContainer;