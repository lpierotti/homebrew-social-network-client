import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import AuthAdapter from './adapters/authAdapter'
import { Route, Link } from 'react-router-dom'
import Welcome from './components/Welcome'
import RecipeForm from './components/RecipeForm'
import Profile from './components/Profile'
import Recipe from './components/Recipe'

class App extends Component {
  
  handleClick = (event) => {
    event.preventDefault()
    AuthAdapter.logOut()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        {localStorage.getItem('jwt') ? <button onClick={this.handleClick}>Logout</button> : <div><Link to={'/signup'}>Signup</Link><br/><Link to={'/login'}>Login</Link></div>}
        <Route exact path={'/'} component={Welcome}/>
        <Route exact path={'/login'} render={({history}) => <LoginForm history={history}/>}/>
        <Route exact path={'/signup'} render={({history}) => <SignupForm history={history}/>}/>
        <Route exact path={'/recipe/new'} component={RecipeForm}/>
        <Route exact path={'/profile'} component={Profile}/>
      </div>
    );
  }
}

export default App;
