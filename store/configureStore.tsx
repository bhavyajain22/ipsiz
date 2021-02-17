import {applyMiddleware, createStore} from 'redux';
import {createRootReducer} from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  createRootReducer, // root reducer with router state
  {},
  composeWithDevTools(
    applyMiddleware(
      thunk,
      // ... other middlewares ...
    ),
  ),
);

export default store;
