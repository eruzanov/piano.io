import React, {Component} from 'react';
import Link from '../Link';
import './index.css';

export default class extends Component {
  render() {
    const {author, title, countAnswer, tags} = this.props.sort;
    return (
      <table className="search-results">
        <thead>
        <tr>
          <th onClick={() => this.props.onSortByAuthor()}>
            автор вопроса
            {author === 'desc' && <span className="sort-desc">▾</span>}
            {author === 'asc' && <span className="sort-asc">▾</span>}
            {!author && <span className="sort">▾</span>}
          </th>
          <th onClick={() => this.props.onSortByTitle()}>
            тема
            {title === 'desc' && <span className="sort-desc">▾</span>}
            {title === 'asc' && <span className="sort-asc">▾</span>}
            {!title && <span className="sort">▾</span>}
          </th>
          <th onClick={() => this.props.onSortByCountAnswer()}>
            количество ответов
            {countAnswer === 'desc' && <span className="sort-desc">▾</span>}
            {countAnswer === 'asc' && <span className="sort-asc">▾</span>}
            {!countAnswer && <span className="sort">▾</span>}
          </th>
          <th onClick={() => this.props.onSortByTags()}>
            теги
            {tags === 'desc' && <span className="sort-desc">▾</span>}
            {tags === 'asc' && <span className="sort-asc">▾</span>}
            {!tags && <span className="sort">▾</span>}
          </th>
        </tr>
        </thead>
        <tbody>
        {this.props.items.map(item =>
          <tr key={item.question_id}>
            <td className="user-info">
              <Link to={{user: item.owner.user_id}}>
                <img className="user-avatar" src={item.owner.profile_image} alt={item.owner.display_name}/>
                {item.owner.display_name}
              </Link>
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
                <Link key={key} to={{tag: value}} className="tag">{value}</Link>
              )}
            </td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}
