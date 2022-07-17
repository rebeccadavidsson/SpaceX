import axios from 'axios'
import { SPACE_API_BASE_URL } from '../../utils/urls';
import { CompanyData } from './types';
import { Dispatch } from 'react';

export const SET_COMPANY_SUCCESS = 'SET_COMPANY_SUCCESS';
export const SET_COMPANY_FAILURE = 'SET_COMPANY_FAILURE';

export const setCompanySuccess = (data: CompanyData) => {
    return {type: SET_COMPANY_SUCCESS, payload: data}
}

export const setCompanyFailure = (error: Error) => {
    return {type: SET_COMPANY_FAILURE, payload: error}
}

export const getCompany = () => {
    return (dispatch: Dispatch<any>) => {
        fetchCompanyData()
            .then(({data}) => dispatch(setCompanySuccess(data)))
            .catch((error: Error) => dispatch(setCompanyFailure(error)))
    }
}

export function fetchCompanyData(): Promise<{ data: CompanyData }> {
    return axios.get(`${SPACE_API_BASE_URL}/company`);
}
