import {
    STORY_ITEMS,
    COMMENTS
} from './types';

export default (state, action) => {
switch (action.type) {
    case STORY_ITEMS:
    return {
        ...state,
        storyItems: action.payload
    };
    case COMMENTS:
    return {
        ...state,
        comments: action.payload
    };
    default:
        return state;
    }
};