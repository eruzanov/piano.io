import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Questions from './Questions';
import QuestionInfo from './QuestionInfo';
import SidePanel from './SidePanel'
import './pager.css';

const App = ({queryParams}) => {
  if (queryParams.question) {
    return <QuestionInfo id={queryParams.question}/>;
  } else {
    return [
      <Header key={0}/>,
      <div key={1} className="container">
        <Questions/>
        <SidePanel/>
      </div>
    ]
  }
};

const mapStateToProps = state => ({queryParams: state.queryParams});

export default connect(mapStateToProps)(App);
