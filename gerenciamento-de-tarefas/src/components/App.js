import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1>Hello, tarefas</h1>
          </div>
        </div>
      </div>
    );
  }
}