import axios from 'axios';
import {
  API_KEY,
  SITE,
  QUESTIONS,
  QUESTIONS_BY_USER,
  QUESTIONS_BY_TAG,
  CHANGE_PARAMS
} from './const';

export const search = intitle => dispatch => {
  axios
    .get('search', {params: {key: API_KEY, site: SITE, intitle}})
    .then(({data}) => dispatch({type: QUESTIONS, items: data.items}))
    .catch(err => console.log(err));
};

export const questionsByUser = userId => dispatch => {
  axios
    .get(`/users/${userId}/questions`, {params: {site: SITE}})
    .then(({data}) => dispatch({type: QUESTIONS_BY_USER, items: data.items}))
    .catch(err => console.log(err));
};

export const questionsByTag = tag => dispatch => {
  axios
    .get('questions', {params: {site: SITE, tagged: tag}})
    .then(({data}) => dispatch({type: QUESTIONS_BY_TAG, items: data.items}))
    .catch(err => console.log(err));
};

export const changeParams = params => dispatch => {
  dispatch({type: CHANGE_PARAMS, params});
};
