// App.js

import React, { Component } from 'react';
import Hoc from './HOC';

class My extends Component {

  render() {
    return (
      <div>
        Higher-Order Component Tutorial
        {this.props.data}
        <button onClick={this.props.callme}>click</button>
      </div>
    )
  }
}
My = Hoc(My);
export default My;
