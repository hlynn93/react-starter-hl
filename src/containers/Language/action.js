// @flow
import { SET_LANGUAGE } from './constants';

export const setLanguage = (language:string) =>  ({
    type: SET_LANGUAGE,
    language
});
