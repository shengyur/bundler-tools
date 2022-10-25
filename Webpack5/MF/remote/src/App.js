import LocalButton from './Button';
import React from 'react';
import NewsList from './NewsList';

const App = () => (
  <div>
    <h1>我是remote应用</h1>
    <NewsList />
    <h2>App 2</h2>
    <LocalButton />
  </div>
);

export default App;
