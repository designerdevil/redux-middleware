import { SHOW_PAGE_MESSAGE } from './types';


export function showMessage(page) {
  return (dispatch) => {
    
      dispatch({
        type: SHOW_PAGE_MESSAGE,
        payload: page,
      });
  };
}
