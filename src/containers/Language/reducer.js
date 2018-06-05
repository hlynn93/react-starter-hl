// @flow
import { SET_LANGUAGE } from './constants';
import { Languages } from '../../translations';
import type { State, Action } from '../../types';

const initialState = {
    value: Languages.English
}

export default (state:State = initialState, action:Action) =>  {
    const { type } = action
    switch (type) {
        case SET_LANGUAGE:
            return {
                ...state,
                value: action.language
            }

        default: return state
    }
};
