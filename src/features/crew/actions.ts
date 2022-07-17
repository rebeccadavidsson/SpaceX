import axios from 'axios'
import { SPACE_API_BASE_URL } from '../../utils/urls';
import { CompanyData } from '../company/types';
import { Dispatch } from 'react';

export const SET_CREW_SUCCESS = 'SET_CREW_SUCCESS';
export const SET_CREW_FAILURE = 'SET_CREW_FAILURE';

export const setCrewSuccess = (data: CompanyData[]) => {
    return {type: SET_CREW_SUCCESS, payload: data}
}

export const setCrewFailure = (error: Error) => {
    return {type: SET_CREW_FAILURE, payload: error}
}

export const getCrew = () => {
    return (dispatch: Dispatch<any>) => {
        fetchCrewData()
            .then(({data}) => dispatch(setCrewSuccess(data)))
            .catch((e: Error) => dispatch(setCrewFailure(e)))
    }
}

export function fetchCrewData(): Promise<{ data: CompanyData[] }> {
    return axios.get(`${SPACE_API_BASE_URL}/crew`);
}
