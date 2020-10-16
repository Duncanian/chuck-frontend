import React from 'react';
import {
  ApolloProvider
} from '@apollo/client';
import {Route, Switch} from 'react-router-dom';
import {client} from './apollo-client';
import Category from './components/Category';
import Header from './components/Header';
import Joke from './components/RandomJoke';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <Header/>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route path="/random/:category" component={Joke} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
