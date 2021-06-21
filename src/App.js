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
// import Contracts from './components/Contract';
// import ContractsPage from './components/ContractsPage';
import ContractsContainer from './Containers/ContractsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
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
         {/* <BrowserRouter> */}
          <Switch>
            <Route exact path='/' component={Home}

            />
            <Route exact path='/login' component={Login} 
              // render={ handleLogin={handleLogin}} 

            />
            {/* <Route exact path='/contracts' component={Contracts} 
            /> */}
             {/* <Route exact path='/contracts' component={ContractsPage} 
            />  */}

            <Route exact path='/TempPage' component={TempPage} 
            />

            <Route 
              exact path='/signup' 
              component={Signup} 
/>

          </Switch>
        {/* </BrowserRouter> */}
        <ContractsContainer/>
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
