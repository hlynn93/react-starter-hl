/* @flow */

export type State = {}
export type GetState = () => State;
export type Action = { +type: string }
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
