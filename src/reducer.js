import {SEARCH_RESULT} from './const';

const initialState = {
  searchResults: {items: []},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return Object.assign({}, state, {searchResults: action.data});
    default:
      return state;
  }
};