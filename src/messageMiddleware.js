import messages from './messages';
import {SHOW_PAGE_MESSAGE} from './actions/types';

/**
 * Works in between action and reducers
 * Middleware to handle error before store is getting updated
 * Check specific event type and responds accordingly
 * */

const messageMiddleware = store => next => (action) => {
    const state = store.getState();
    switch (action.type) {
        case SHOW_PAGE_MESSAGE: {
            const pageNumber = action.payload;
            const actualMsg = messages[`page${pageNumber}`];
            action.payload = actualMsg;

            break;
        }

        default: {
            break;
        }
    }
    next(action);
};

export default messageMiddleware;
