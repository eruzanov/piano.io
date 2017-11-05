import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import SearchResults from './Questions';
import SearchByUser from './QuestionsByUser';
import QuestionInfo from './QuestionInfo';
import SearchByTag from './QuestionsByTag';
import './pager.css';

const App = ({queryParams}) => {
  switch (true) {
    case !!queryParams.user:
      return <SearchByUser user={queryParams.user}/>;
    case !!queryParams.question:
      return <QuestionInfo id={queryParams.question}/>;
    case !!queryParams.tag:
      return <SearchByTag tag={queryParams.tag}/>;
    default:
      return [
        <Header key={0}/>,
        <div key={1} className="container">
          <SearchResults/>
        </div>
      ]
  }
};

const mapStateToProps = state => ({queryParams: state.queryParams});

export default connect(mapStateToProps)(App);
