import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import react-router-dom
 import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

import rootReducer from './rootReducer'
import Routes from './routes';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// Set up redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up react-router-redux
const history = createHistory();
const middleware = routerMiddleware(history);

// Set up reducers and enhancers
const reducers = combineReducers({
  ...rootReducer,
  router: routerReducer,
  toastr: toastrReducer,
  form: formReducer
});

const enhancers = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

const store = createStore(reducers, enhancers);

// Set up app

const App = () => {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
};

export default App;
