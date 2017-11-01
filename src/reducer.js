import {SEARCH_RESULT, SIDE_PANEL} from './const';

const initialState = {
  searchResults: {items: []},
  sidePanel: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return Object.assign({}, state, {searchResults: action.data});
    case SIDE_PANEL:
      return Object.assign({}, state, {sidePanel: action.payload});
    default:
      return state;
  }
};