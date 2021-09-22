// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import {Home, Login, Logged_in} from './user_auth'
import TempPage from './user_auth/TempPage'
import Home from './user_auth/Home'
import Login from './user_auth/Login'
import Signup from './user_auth/Signup'
import Contract from './components/Contract';
import ContractsList from './components/ContractsList';
import ContractsPage from './components/ContractsPage';


class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { 
    //   isLoggedIn: false,
    //   // isLoggedIn: true,
    //   user: {}
    //  };
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
        console.log(" APP =>>> this.props ",this.props);
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
             <Route
                  exact path='/login'
                  render={(routerProps) =>
                      <Login {...routerProps} 
                      contracts={this.props.contracts
                      }
              />}/>

            <Route exact path='/contract' component={Contract} 
            />
            <Route exact path='/contractslist' component={ContractsList}
            />

            {/* <Route exact path='/contracts' component={ContractsPage} 
            /> */}

            <Route
                            exact path='/contracts'
                            render={(routerProps) =>
                                <ContractsPage {...routerProps}
                            contracts={this.props.contracts}
                        />}/>

            <Route exact path='/TempPage' component={TempPage} 
            />

            <Route 
              exact path='/signup' 
              component={Signup} 
/>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//       </header>
//     </div>
//   );
// }

export default App;
