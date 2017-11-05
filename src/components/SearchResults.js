import React from 'react';
import {connect} from 'react-redux';
import {
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SORT_BY_COUNT_ANSWER,
  SORT_BY_TAGS
} from '../const';
import Table from './Table/index';

const SearchResults = props => (
  <Table
    items={props.searchResults.items}
    sort={props.searchResults.sort}
    onSortByAuthor={props.onSortByAuthor}
    onSortByTitle={props.onSortByTitle}
    onSortByCountAnswer={props.onSortByCountAnswer}
    onSortByTags={props.onSortByTags}
  />
);

const mapStateToProps = state => ({searchResults: state.searchResults});

const mapDispatchToProps = dispatch => ({
  onSortByAuthor: e => dispatch({type: SORT_BY_AUTHOR, list: 'searchResults'}),
  onSortByTitle: e => dispatch({type: SORT_BY_TITLE, list: 'searchResults'}),
  onSortByCountAnswer: e => dispatch({type: SORT_BY_COUNT_ANSWER, list: 'searchResults'}),
  onSortByTags: e => dispatch({type: SORT_BY_TAGS, list: 'searchResults'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
