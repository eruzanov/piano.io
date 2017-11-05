import React, {Component} from 'react';
import './index.css';

export default class extends Component {
  render() {
    return (
      <table className="search-results">
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
