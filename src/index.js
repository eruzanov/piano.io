import React, {Component} from 'react';
import {render} from 'react-dom';
import 'normalize.css';

class App extends Component {
  render() {
    return <a href="http://piano.io/">piano.io</a>;
  }
}

render(<App/>, document.querySelector('#app'));
