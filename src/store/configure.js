import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;

  const middlewares = [];

  const store = createStore(
    modules,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configure;
