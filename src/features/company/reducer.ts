import * as t from './actions'
import { CompanyData } from './types';

export interface CompanyState {
    error: ''
    data: CompanyData;
}

const initialState: CompanyState = {
    error: '',
    data: {}
};

const reducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch (type) {
        case t.SET_COMPANY_SUCCESS:
            return ({...state, data: payload})
        case t.SET_COMPANY_FAILURE:
            return ({...state, error: payload})
        default:
            return state
    }
}
export default reducer;