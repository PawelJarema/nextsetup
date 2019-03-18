import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import reduxThunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';

const makeStore = (initialState, options) => {
  return createStore(combineReducers, initialState, applyMiddleware(reduxThunk));
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // possible to dispatch from here
    // ctx.store.dispatch({type: 'foo', payload: 'some foos'});
    const pageProps = (
      Component.getInitialProps
      ?
      await Component.getInitialProps(ctx)
      :
      {}
    );

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={ store }>
          <Component { ...pageProps } />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
