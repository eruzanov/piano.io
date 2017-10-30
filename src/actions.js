import axios from 'axios';
import {API_KEY, SEARCH_RESULT} from './const';

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