import { SHOW_PAGE_MESSAGE } from '../actions/types';

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_PAGE_MESSAGE:
      return Object.assign({}, state, {
          'pageNo': action.payload
        });
    default:
      return state;
  }
};
