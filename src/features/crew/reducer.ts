import * as t from './actions'
import { CrewMember } from './types';

export interface CrewState {
    data: CrewMember[];
    error: string;
}

const initialState: CrewState = {
    data: [],
    error: ''
};

const reducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch (type) {
        case t.SET_CREW_SUCCESS:
            return ({...state, data: payload})
        case t.SET_CREW_FAILURE:
            return ({...state, error: payload})
        default:
            return state
    }
}
export default reducer;