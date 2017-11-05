import {
  QUESTIONS,
  QUESTIONS_BY_USER,
  QUESTIONS_BY_TAG,
  CHANGE_PARAMS,
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SORT_BY_COUNT_ANSWER,
  SORT_BY_TAGS,
} from './const';

const initialState = {
  questions: {items: [], sort: {}},
  questionsByUser: {items: [], sort: {}},
  questionsByTag: {items: [], sort: {}},
  sidePanel: false,
  queryParams: {},
};

export default (state = initialState, action) => {
  let items = [], sort;

  switch (action.type) {
    case QUESTIONS:
      return Object.assign({}, state, {questions: {items: action.items, sort: {}}});
      case QUESTIONS_BY_USER:
      return Object.assign({}, state, {questionsByUser: {items: action.items, sort: {}}});
      case QUESTIONS_BY_TAG:
      return Object.assign({}, state, {questionsByTag: {items: action.items, sort: {}}});
    case CHANGE_PARAMS:
      return Object.assign({}, state, {queryParams: action.params});
    case SORT_BY_AUTHOR:
      items = state[action.list].items.slice().sort((a, b) =>
        a.owner.display_name.localeCompare(b.owner.display_name)
      );
      sort = state[action.list].sort.author ? (state[action.list].sort.author === 'desc' ? 'asc' : 'desc') : 'asc';
      if (sort === 'desc') items.reverse();
      return Object.assign(
        {},
        state,
        {
          [action.list]: {items, sort: {author: sort}}
        }
      );
    case SORT_BY_TITLE:
      items = state[action.list].items.slice().sort((a, b) => a.title.localeCompare(b.title));
      sort = state[action.list].sort.title ? (state[action.list].sort.title === 'desc' ? 'asc' : 'desc') : 'asc';
      if (sort === 'desc') items.reverse();
      return Object.assign(
        {},
        state,
        {
          [action.list]: {items, sort: {title: sort}}
        }
      );
    case SORT_BY_COUNT_ANSWER:
      items = state[action.list].items.slice().sort((a, b) => a.answer_count - b.answer_count);
      sort = state[action.list].sort.countAnswer ? (state[action.list].sort.countAnswer === 'desc' ? 'asc' : 'desc') : 'asc';
      if (sort === 'desc') items.reverse();
      return Object.assign(
        {},
        state,
        {
          [action.list]: {items, sort: {countAnswer: sort}}
        }
      );
    case SORT_BY_TAGS:
      items = state[action.list].items.slice().sort((a, b) => a.tags.length - b.tags.length);
      sort = state[action.list].sort.tags ? (state[action.list].sort.tags === 'desc' ? 'asc' : 'desc') : 'asc';
      if (sort === 'desc') items.reverse();
      return Object.assign(
        {},
        state,
        {
          [action.list]: {items, sort: {tags: sort}}
        }
      );
    default:
      return state;
  }
};