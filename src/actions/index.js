// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const getCharacters = (characters) => {
  return {
    type: SUCCESS,
    payload: characters,
  }
}

const setFailure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  }
}

const setFetchingState = (status) => {
  return {
    type: FETCHING,
    payload: status,
  }
}

export const fetchCharacters = () => dispatch => {
  debugger
  dispatch(setFetchingState(true));
  axios.get('https://swapi.co/api/people')
    .then(response => {
      console.log('response here' + response.data.results)
      dispatch(getCharacters(response.data))
    })
    .catch(error => {
      debugger;
      dispatch(setFailure(error.message))
    })
    .finally(() => {
      dispatch(setFetchingState(false));
    })
}
