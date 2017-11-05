import axios from 'axios';
import {API_KEY, SITE, SEARCH_RESULT, CHANGE_PARAMS} from './const';

export const search = intitle => dispatch => {
  axios
    .get('search', {params: {key: API_KEY, site: SITE, intitle}})
    .then(({data}) => dispatch({type: SEARCH_RESULT, items: data.items}))
    .catch(err => console.log(err));
};

export const changeParams = params => dispatch => {
  dispatch({type: CHANGE_PARAMS, params});
};
