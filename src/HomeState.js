import React, { useReducer } from 'react';
import axios from 'axios';
import HomeContext from './HomeContext.js';
import HomeReducer from './HomeReducer.js';
import {getStoriesAndComments} from './utils.js'
import {
    STORY_ITEMS,
    STORY_VS_COMMNETS
} from './types';

const HomeState = props => {
    const initialState = {
        storyItems: [],
        storyVsComments: {}
    };

    const [state, dispatch] = useReducer(HomeReducer, initialState);

    const getItemsApi = () => {
        
        axios.get('http://localhost:' + window.location.port + '/items.json', {'headers': {
            'Authorization': localStorage.getItem('auth-token')
        }})
        .then(res => {
            //TODO : get STORY_VS_COMMNETS , STORY_VS_COMMNETS from utility
            let arr = getStoriesAndComments(res.data);
            dispatch({
                type: STORY_ITEMS,
                payload: arr[0]
            });
            dispatch({
                type: STORY_VS_COMMNETS,
                payload: arr[1]
            });
        });
    };

    

    return (
        <HomeContext.Provider
            value={{
                storyItems: state.storyItems,
                storyVsComments: state.storyVsComments,
                getItemsApi,
                homeStateDispatch: dispatch
            }}
        >
            {props.children}
        </HomeContext.Provider>
    );
};

export default HomeState;