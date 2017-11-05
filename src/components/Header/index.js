import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeParams} from '../../actions';
import './index.css';

class SearchForm extends Component {
  render() {
    const {search=''} = this.props.queryParams;
    return (
      <div className="header">
        <div className="search-form">
          <input
            type="text"
            className="search-form__input"
            value={search}
            onInput={e => this.props.onInput(e)}
            onChange={e => this.props.onInput(e)}
            />
          <a href={`#search=${search}`}>
            <button className="search-form__button" disabled={!search}>Поиск</button>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({queryParams: state.queryParams});

const mapDispatchToProps = dispatch => ({
  onInput: e => dispatch(changeParams({search: e.target.value}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
