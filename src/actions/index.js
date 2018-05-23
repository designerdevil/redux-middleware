import { FETCH_TEST } from './types';
import { SHOW_PAGE_MESSAGE } from './types';

const API_ROOT = '/api';

const sampleData = {
  abc: "xyz"
}

export function fetchTest() {
  return (dispatch) => {
    
      dispatch({
        type: FETCH_TEST,
        payload: sampleData,
      });
  };
}

export function showMessage(page) {
  return (dispatch) => {
    
      dispatch({
        type: SHOW_PAGE_MESSAGE,
        payload: page,
      });
  };
}
