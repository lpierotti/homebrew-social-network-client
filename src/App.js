import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { Route, withRouter } from 'react-router-dom'
import Welcome from './components/Welcome'
import RecipeForm from './components/RecipeForm'
import Profile from './components/Profile'
import Recipe from './components/Recipe'
import RecipeList from './components/RecipeList'
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'

class App extends Component {
  
  componentWillMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        
        
        <Route exact path={'/'} component={Welcome}/>
        <Route exact path={'/login'} render={({history}) => <LoginForm history={history}/>}/>
        <Route exact path={'/signup'} render={({history}) => <SignupForm history={history}/>}/>
        <Route exact path={'/recipes/new'} render={({history}) => <RecipeForm history={history}/>}/>
        <Route path={'/user/:id/profile'} render={({match}) => <Profile id={match.params.id}/>}/>
        <Route exact path={'/recipes'} component={RecipeList}/>
        <Route path={'/recipe/:id'} render={({match}) => <Recipe id={match.params.id} />}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => {dispatch(getCurrentUser())}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
