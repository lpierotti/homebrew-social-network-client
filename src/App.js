import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import RecipeForm from './components/RecipeForm'
import Profile from './components/Profile'
import Recipe from './components/Recipe'
import RecipeList from './components/RecipeList'
import Navbar from './components/Navbar'

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Navbar />
        </div>
        
        
        <Route exact path={'/'} component={Welcome}/>
        <Route exact path={'/login'} render={({history}) => <LoginForm history={history}/>}/>
        <Route exact path={'/signup'} render={({history}) => <SignupForm history={history}/>}/>
        <Route exact path={'/recipe/new'} component={RecipeForm}/>
        <Route path={'/user/:id/profile'} render={({match}) => <Profile id={match.params.id}/>}/>
        <Route exact path={'/recipes'} component={RecipeList}/>
        <Route exact path={'/recipe/:id'} render={({match}) => <Recipe id={match.params.id} />}/>
      </div>
    );
  }
}

export default App;
