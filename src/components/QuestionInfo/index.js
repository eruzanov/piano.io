import React, {Component} from 'react';
import axios from 'axios';
import {SITE} from '../../const';
import Markdown from 'react-markdown';
import './index.css';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body_markdown: '',
      answers: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `questions/${this.props.id}`,
        {params: {site: SITE, filter: '!9YdnSIN16'}}
      )
      .then(({data}) => this.setState(Object.assign({}, data.items[0])))
      .catch(err => console.log(err));
    axios
      .get(
        `questions/${this.props.id}/answers`,
        {params: {site: SITE, filter: '!9YdnSLiq6'}}
      )
      .then(({data}) => this.setState(Object.assign({}, this.state, {answers: data.items})))
      .catch(err => console.log(err));
  }

  render() {
    const {link, title, body_markdown, answers} = this.state;
    return (
      <div style={{margin: 20}}>
        <a href={link}>
          <h1>{title}</h1>
        </a>
        <Markdown source={body_markdown}/>
        {!!answers.length && <h2>{answers.length} Answer{answers.length > 1 ? 's' : ''}</h2>}
        {answers.map(item =>
          <div key={item.answer_id} className="answer">
            <Markdown source={item.body_markdown}/>
            <a href={item.link}>{item.display_name}</a>
          </div>
        )}
      </div>
    );
  }
}