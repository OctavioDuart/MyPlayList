import React, { Component } from 'react';
import Header from './components/header/header';
import Form   from './components/form/form';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
       </div>
    );
  }
}

export default App;
