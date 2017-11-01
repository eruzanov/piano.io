import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sidePanel} from '../../actions';
import QuestionInfo from '../QuestionInfo';
import './index.css';

class SidePanel extends Component {
  onClose(e) {
    if (e.target !== this.overlay) return;
    this.props.sidePanelClose();
  }

  render() {
    const {sidePanel} = this.props;
    return (
      <div
        className={`side-panel ${sidePanel ? 'side-panel--open' : ''}`}
        onClick={e => this.onClose(e)}
      >
        <div className="side-panel__overlay" ref={el => this.overlay = el}/>
        <div className="side-panel__container">
          {sidePanel.user && 'user'}
          {sidePanel.question && <QuestionInfo id={sidePanel.question}/>}
          {sidePanel.tag && 'tag'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({sidePanel: state.sidePanel});

const mapDispatchToProps = dispatch => ({
  sidePanelClose: () => dispatch(sidePanel(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
