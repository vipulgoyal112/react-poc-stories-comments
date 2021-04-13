import {
    STORY_ITEMS,
    STORY_VS_COMMNETS
} from './types';

export default (state, action) => {
switch (action.type) {
    case STORY_ITEMS:
    return {
        ...state,
        storyItems: action.payload
    };
    case STORY_VS_COMMNETS:
    return {
        ...state,
        storyVsComments: action.payload
    };
    default:
        return state;
    }
};