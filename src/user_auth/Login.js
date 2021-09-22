import React, { Component } from 'react';
import axios from 'axios'
// import {Link} from 'react-router-dom'
import { Link } from 'react-router-dom';
// import {fetchContracts} from '../actions/fetchContracts'
import {fetchContracts} from '../actions/fetchContracts'

// import { Link, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import Contract from '../components/Contract'
// import App from '../App'
// import Home from '../user_auth/Home'
// import TempPage from '../user_auth/TempPage'
// import {App, handleLogin} from '../App'
// import {handleLogin} from '../App'

class Login extends Component {
  constructor(props) {
    super(props);
    this.fetchContracts = fetchContracts
    this.props = props
    this.state = { 
      username: '',
      // email: '',
      password: '',
      errors: '',
      isLoggedIn: true,
      //  isLoggedIn: false,
      user: {},
      location: ""
      ,
      contracts: []
      
    };

    console.log("LOGIN this.props =>>>> ", this.props);
  }

    handleLogin = (response) => {
    this.setState({
      isLoggedIn: true,
      user: response.data.user
      }
    )
      this.props.fetchContracts();
      this.props.history.push('/contracts')
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };

    handleSubmit = (event) => {
        event.preventDefault()
        // const {username, email, password} = this.state
        const {username, password} = this.state

        console.log('LOGIN => this.props => ', this.props)
        console.log('LOGIN =>  this.state => ', this.state)

        let user = {
          username: username,
          // email: email,
          password: password
        }


      
  // axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
    axios.post('http://localhost:3000/users', {user}, {withCredentials: true})
    .then(response => {
      
      // console.log('this.props => ', this.props);
        if (response.data.logged_in) {
          
              // console.log('response.data.logged_in = TRUE this.state => ', this.state)
              // console.log('response=> ', response)
              // console.log('75 this.handleLogin(response) => ', this.handleLogin(response))
              // this.props.handleLogin(response.data)
              // this.handleLogin(response.data)
              this.handleLogin(response)
              //  ||
              // this.props.handleLogin(response.data)
              // this.redirect()
              // return (<button>clickable</button>)
              // return (<Contracts/>)
              // return (
              // <div>


                // {console.log("Lu, here are your WINS!", response)}


            } else {
              this.setState({
                errors: response.data.errors
              })
            }
        })
      .catch(error => console.log('api errors:', error))
    };
      redirect = () => {
          this.props.history.push('/')
         }

    handleErrors = () => {
        return (
          <div>
            <ul>
             {this.state.errors.map(error => {
              return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      };
      
render() 
{
    // const {username, email, password} = this.state 
    const {username, password} = this.state 
    return (
      <div>
        <h1>Log In</h1>        
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {/* <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            /> */}
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />         
            <button placeholder="submit" type="submit">
              Log In
            </button>          
          
            <div>
              or <Link to='/signup'>sign up</Link>
            </div>

         </form>
         
      </div>
    );
  }
}
export default Login;