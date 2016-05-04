import { FETCH_GITHUB_USER, FETCH_GITHUB_REPOS } from '../constants/actionTypes';

const initialState = {
  user: null,
  repos: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER:
      return {
        ...state,
        user: action.payload.data
      };

    case FETCH_GITHUB_REPOS:
      return {
        ...state,
        repos: action.payload.data
      }

    default: 
      return state;
  }
}
