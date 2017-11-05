import React from 'react';
import {connect} from 'react-redux';
import {
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SORT_BY_COUNT_ANSWER,
  SORT_BY_TAGS
} from '../const';
import Table from './Table';

const QuestionsByTag = props => (
  <Table
    items={props.questions.items}
    sort={props.questions.sort}
    onSortByAuthor={props.onSortByAuthor}
    onSortByTitle={props.onSortByTitle}
    onSortByCountAnswer={props.onSortByCountAnswer}
    onSortByTags={props.onSortByTags}
  />
);

const mapStateToProps = state => ({questions: state.questionsByTag});

const mapDispatchToProps = dispatch => ({
  onSortByAuthor: e => dispatch({type: SORT_BY_AUTHOR, list: 'questionsByTag'}),
  onSortByTitle: e => dispatch({type: SORT_BY_TITLE, list: 'questionsByTag'}),
  onSortByCountAnswer: e => dispatch({type: SORT_BY_COUNT_ANSWER, list: 'questionsByTag'}),
  onSortByTags: e => dispatch({type: SORT_BY_TAGS, list: 'questionsByTag'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsByTag);
