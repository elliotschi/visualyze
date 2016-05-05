import axios from 'axios';
import * as types from '../constants/actionTypes';

const { FETCH_GITHUB_USER, FETCH_GITHUB_REPOS } = types;

export const fetchGithubUser = (username) => {
  const request = axios.get(`/api/github/user/${username}`);

  return {
    type: FETCH_GITHUB_USER,
    payload: request
  }
};

export const fetchGithubRepos = () => {
  const request = axios.get(`api/github/repos`);

  return {
    type: FETCH_GITHUB_REPOS,
    payload: request
  }
};


