import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './AppReducer';

// export const store = createStore(AppReducer, applyMiddleware(thunk))
const composeEnhancers =
  // @ts-ignore
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
export const store = createStore(
  AppReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);
