import * as t from './actions'
import { CrewMember } from './types';

export interface CrewState {
    data: CrewMember[];
    error: string;
    status: t.Status;
    likedMembers: string[];
}

const initialState: CrewState = {
    data: [],
    error: '',
    status: t.Status.Loading,
    likedMembers: []
};

const reducer = (state = initialState, action: any) => {
    const {type, payload} = action
    switch (type) {
        case t.SET_CREW_SUCCESS:
            return ({...state, data: payload, status: t.Status.Idle})
        case t.SET_CREW_FAILURE:
            return ({...state, error: payload, status: t.Status.Failed})
        case t.LOADING_CREW:
            return ({...state, status: t.Status.Loading})
        case t.SET_LIKED_MEMBERS_SUCCESS:
            return ({...state, likedMembers: state.likedMembers.concat(payload)})
        case t.HANDLE_LIKE_MEMBER:
             if (state.likedMembers.includes(payload)) {
                return ({
                    ...state,
                    likedMembers: [
                        ...state.likedMembers.slice(0, state.likedMembers.indexOf(payload)),
                        ...state.likedMembers.slice(state.likedMembers.indexOf(payload) + 1),
                    ]
                })
            } else {
                return ({...state, likedMembers: state.likedMembers.concat(payload)})
            }
        default:
            return state
    }
}
export default reducer;