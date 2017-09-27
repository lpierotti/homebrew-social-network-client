import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { Route, withRouter, Redirect } from 'react-router-dom'
import Welcome from './components/Welcome'
import RecipeForm from './components/RecipeForm'
import Profile from './components/Profile'
import Recipe from './components/Recipe'
import RecipeList from './components/RecipeList'
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'
import MapContainer from './components/MapContainer'
import GroupForm from './components/GroupForm'
import Group from './components/Group'

class App extends Component {
  
  componentWillMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        
        
        <Route exact path={'/'} component={Welcome}/>
        <Route exact path={'/login'} render={({history}) => (localStorage.getItem('jwt') ? <Redirect to='/'/> : <LoginForm history={history}/>)}/>
        <Route exact path={'/signup'} render={({history}) => (localStorage.getItem('jwt') ? <Redirect to='/'/> : <SignupForm history={history}/>)}/>
        <Route exact path={'/recipes/new'} render={({history}) => <RecipeForm history={history}/>}/>
        <Route path={'/user/:id/profile'} render={({match}) => (localStorage.getItem('jwt') ? <Profile id={match.params.id}/> : <Redirect to='/'/>)}/>
        <Route exact path={'/recipes'} component={RecipeList}/>
        <Route path={'/recipe/:id'} render={({match}) => <Recipe id={match.params.id} />}/>
        <Route exact path={'/map'} component={MapContainer}/>
        <Route exact path={'/group/new'} component={GroupForm}/>
        <Route path={'/group/:id'} render={({match}) => <Group id={match.params.id} />}/>
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
