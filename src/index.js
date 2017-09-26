import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'
import { BrowserRouter as Router } from 'react-router-dom'
import recipesReducer from './reducers/recipesReducer'


const rootReducer = combineReducers({users: usersReducer, recipes: recipesReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
