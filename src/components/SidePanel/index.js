import React from 'react';
import {connect} from 'react-redux';
import QuestionsByTag from '../QuestionsByTag';
import QuestionsByUser from '../QuestionsByUser';
import './index.css';

const SidePanel = props => {
  const {search, user=false, tag=false} = props.queryParams;
  return (
    <div className={`side-panel ${user || tag ? 'side-panel--open' : ''}`}>
      <a href={`#search=${search}`} className="side-panel__overlay"/>
      <div className="side-panel__container">
        {user && <QuestionsByUser user={user}/>}
        {tag && <QuestionsByTag tag={tag}/>}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({queryParams: state.queryParams});

export default connect(mapStateToProps)(SidePanel);
