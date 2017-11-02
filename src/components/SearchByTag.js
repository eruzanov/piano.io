import React, {Component} from 'react';
import axios from 'axios';
import {sidePanel} from '../actions';
import Table from './Table';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []}
  }

  componentDidMount() {
    axios
      .get(
        'questions',
        {params: {
          site: 'stackoverflow',
          tagged: this.props.tag,
        }}
      )
      .then(({data}) => this.setState({data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Table sidePanel={sidePanel} items={this.state.items}/>
    );
  }
}
