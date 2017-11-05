import React, {Component} from 'react';
import './index.css';

export default class extends Component {
  render() {
    return (
      <table className="search-results">
        <thead>
        <tr>
          <th onClick={() => this.props.onSortByAuthor()}>
            автор вопроса
            {this.props.sort.author === 'desc' && <span className="sort-desc">▾</span>}
            {this.props.sort.author === 'asc' && <span className="sort-asc">▾</span>}
          </th>
          <th onClick={() => this.props.onSortByTitle()}>
            тема
            {this.props.sort.title === 'desc' && <span className="sort-desc">▾</span>}
            {this.props.sort.title === 'asc' && <span className="sort-asc">▾</span>}
          </th>
          <th onClick={() => this.props.onSortByCountAnswer()}>
            количество ответов
            {this.props.sort.countAnswer === 'desc' && <span className="sort-desc">▾</span>}
            {this.props.sort.countAnswer === 'asc' && <span className="sort-asc">▾</span>}
          </th>
          <th onClick={() => this.props.onSortByTags()}>
            теги
            {this.props.sort.tags === 'desc' && <span className="sort-desc">▾</span>}
            {this.props.sort.tags === 'asc' && <span className="sort-asc">▾</span>}
          </th>
        </tr>
        </thead>
        <tbody>
        {this.props.items.map(item =>
          <tr key={item.question_id}>
            <td className="user-info">
              <a href={`#user=${item.owner.user_id}`}>
                <img className="user-avatar" src={item.owner.profile_image} alt={item.owner.display_name}/>
                {item.owner.display_name}
              </a>
            </td>
            <td>
              <a href={`#question=${item.question_id}`}>{item.title}</a>
            </td>
            <td>
              <a href={`#question=${item.question_id}`} style={{fontSize: 20}}>
                {item.answer_count}
              </a>
            </td>
            <td>
              {item.tags.map((value, key) =>
                <a key={key} href={`#tag=${value}`} className="tag">{value}</a>
              )}
            </td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}
