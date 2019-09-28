import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';


// set up store and saga
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

let unsubscribe = store.subscribe(() =>
  console.log('store', store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */