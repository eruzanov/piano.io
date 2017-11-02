import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sidePanel} from '../actions';
import Table from './Table/index';

class SearchResults extends Component {
  render() {
    return (
      <Table sidePanel={this.props.sidePanel} items={this.props.items || []}/>
    );
  }
}

const mapStateToProps = state => state.searchResults;

const mapDispatchToProps = dispatch => ({
  sidePanel: payload => dispatch(sidePanel(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
