import { SHOW_PAGE_MESSAGE } from './types';

const setMessage = (page) => {
  return (dispatch) => {
      dispatch({
        type: SHOW_PAGE_MESSAGE,
        payload: page,
      });
  };
}

export function showMessage(page) {
  //Can be a REST API call to get the data based on page and set it in store
  return setMessage(page);
}
