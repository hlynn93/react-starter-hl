// @flow
import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import { default as languageReducer } from '../containers/Language/reducer';

export const createReducer = () => {
    return combineReducers({
        route: routerReducer,
        language: languageReducer
    })
}
