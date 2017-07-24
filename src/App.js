import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TodoBox from './TodoBox';

class App extends Component {
  render() {
    return (
      <div id="root">
        <section className="container vert-offset-top-2">
  		  	<div id="todoBox" className="todoBox col-xs-6 col-xs-offset-3">
            <TodoBox />
          </div>
  	    </section>
      </div>
    );
  }
}

export default App;
