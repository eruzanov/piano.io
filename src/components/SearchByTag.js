import React, {Component} from 'react';
import axios from 'axios';
import {SITE} from '../const'
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
          site: SITE,
          tagged: this.props.tag,
        }}
      )
      .then(({data}) => this.setState({data}))
      .catch(err => console.log(err));
  }

  render() {
    return <Table items={this.state.items}/>;
  }
}
