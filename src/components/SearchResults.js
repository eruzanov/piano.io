import React from 'react';
import {connect} from 'react-redux';
import Table from './Table/index';

const SearchResults = ({items}) => <Table items={items || []}/>;

const mapStateToProps = state => state.searchResults;

export default connect(mapStateToProps)(SearchResults);
