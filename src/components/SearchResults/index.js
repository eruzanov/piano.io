import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <table>
          <thead>
          <tr>
            <th>автор вопроса</th>
            <th>тема</th>
            <th>количество ответов</th>
            <th>теги</th>
          </tr>
          </thead>
          <tbody>
          {this.props.items.map(item =>
          <tr>
            <td>{item.owner.display_name}</td>
            <td>{item.title}</td>
            <td>{item.answer_count}</td>
            <td>{item.tags.join(', ')}</td>
          </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => state.searchResults;

export default connect(mapStateToProps)(SearchResults);
