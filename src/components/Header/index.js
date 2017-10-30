import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search} from '../../actions';
import './index.css';

class SearchForm extends Component {
  onSearch(e) {
    e.preventDefault();
    const intitle = e.target.search.value.trim();
    if (intitle) this.props.onSearch(intitle);
  };

  render() {
    return (
      <div className="header">
        <form className="search-form" onSubmit={e => this.onSearch(e)}>
          <input name="search" className="search-form__input" type="text"/>
          <button className="search-form__button">Поиск</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSearch: s => dispatch(search(s))
});

export default connect(null, mapDispatchToProps)(SearchForm);
