import React from 'react';
import {connect} from 'react-redux';
import {
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SORT_BY_COUNT_ANSWER,
  SORT_BY_TAGS
} from '../const';
import Table from './Table/index';

const Questions = props => (
  <Table
    items={props.questions.items}
    sort={props.questions.sort}
    onSortByAuthor={props.onSortByAuthor}
    onSortByTitle={props.onSortByTitle}
    onSortByCountAnswer={props.onSortByCountAnswer}
    onSortByTags={props.onSortByTags}
  />
);

const mapStateToProps = state => ({questions: state.questions});

const mapDispatchToProps = dispatch => ({
  onSortByAuthor: e => dispatch({type: SORT_BY_AUTHOR, list: 'questions'}),
  onSortByTitle: e => dispatch({type: SORT_BY_TITLE, list: 'questions'}),
  onSortByCountAnswer: e => dispatch({type: SORT_BY_COUNT_ANSWER, list: 'questions'}),
  onSortByTags: e => dispatch({type: SORT_BY_TAGS, list: 'questions'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
