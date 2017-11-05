import {SEARCH_RESULT, CHANGE_PARAMS} from './const';

const initialState = {
  searchResults: {items: []},
  sidePanel: false,
  queryParams: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return Object.assign({}, state, {searchResults: action.data});
    case CHANGE_PARAMS:
      return Object.assign({}, state, {queryParams: action.params});
    default:
      return state;
  }
};