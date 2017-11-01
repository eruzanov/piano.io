import axios from 'axios';
import {API_KEY, SEARCH_RESULT, SIDE_PANEL} from './const';

export const search = intitle => dispatch => {
  axios
    .get(
      'search',
      {
        params: {
          key: API_KEY,
          site: 'stackoverflow',
          intitle
        }
      }
    )
    .then(({data}) => {
      dispatch({type: SEARCH_RESULT, data})
    })
    .catch(err => console.log(err));
};

export const sidePanel = payload => dispatch => {
  dispatch({type: SIDE_PANEL, payload});
};