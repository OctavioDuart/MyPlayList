import React, { Component } from 'react';
import Header from './components/header/header';
import Form   from './components/form/form';
import Table  from './components/table/table';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table/>
       </div>
    );
  }
}

export default App;
