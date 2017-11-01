import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sidePanel} from '../../actions';
import './index.css';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results" onClick={this.props.sidePanel}>
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
            <tr key={item.question_id}>
              <td className="user-info">
                <a href={`#${item.owner.display_name}`}>
                  <img className="user-avatar" src={item.owner.profile_image} alt={item.owner.display_name}/>
                  {item.owner.display_name}
                </a>
              </td>
              <td>
                <a href="#">{item.title}</a>
              </td>
              <td>
                <a href="#" style={{fontSize: 20}}>{item.answer_count}</a>
              </td>
              <td>
                {item.tags.map((value, key) =>
                  <a key={key} href="#" className="tag">{value}</a>
                )}
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => state.searchResults;

const mapDispatchToProps = dispatch => ({
  sidePanel: () => dispatch(sidePanel(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
