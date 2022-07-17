import axios from 'axios'
import { SPACE_API_BASE_URL } from '../../utils/urls';
import { Dispatch } from 'react';
import { CrewMember } from './types';

export enum Status {
    Idle = 1,
    Loading = 2,
    Failed = 3
}

export const LOADING_CREW = 'LOADING_CREW';
export const SET_CREW_SUCCESS = 'SET_CREW_SUCCESS';
export const SET_CREW_FAILURE = 'SET_CREW_FAILURE';
export const SET_LIKED_MEMBERS_SUCCESS = 'SET_LIKED_MEMBERS_SUCCESS';
export const HANDLE_LIKE_MEMBER = 'HANDLE_LIKE_MEMBER';
export const LIKED_MEMBERS = 'LIKED_MEMBERS';


export const loadingCrew = () => {
    return {type: LOADING_CREW, payload: Status.Loading}
}

export const setCrewSuccess = (data: CrewMember[]) => {
    return {type: SET_CREW_SUCCESS, payload: data}
}

export const setCrewFailure = (error: Error) => {
    return {type: SET_CREW_FAILURE, payload: error}
}

export const setLikedMembers = (likedMemberIds: string[]) => {
    return {type: SET_LIKED_MEMBERS_SUCCESS, payload: likedMemberIds}
}

export const handleLikeMember = (id: string) => {
    const likedMembers = JSON.parse(localStorage.getItem(LIKED_MEMBERS) || '{}');
    if (Object.keys(likedMembers).length || likedMembers.length) {
        if (likedMembers.includes(id)) {
            const index = likedMembers.indexOf(id);
            index > -1 && likedMembers.splice(index, 1);
            window.localStorage.setItem(LIKED_MEMBERS, JSON.stringify(likedMembers))
        } else {
            window.localStorage.setItem(LIKED_MEMBERS, JSON.stringify(likedMembers.concat([id])))
        }
    } else {
        window.localStorage.setItem(LIKED_MEMBERS, JSON.stringify([id]))
    }
    return {type: HANDLE_LIKE_MEMBER, payload: id}
}

export const getCrew = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loadingCrew());

        // Load alread-liked members from localstorage and save to store
        const likedMemberIds = JSON.parse(localStorage.getItem(LIKED_MEMBERS) || '{}');
        likedMemberIds && dispatch(setLikedMembers(likedMemberIds));

        // Fetch data from API
        fetchCrewData()
            .then(({data}) => {
                if (data.length) {
                    dispatch(setCrewSuccess(data));
                } else {
                    dispatch(setCrewFailure(new Error('Data could not be fetched')));
                }
            })
            .catch((e: Error) => dispatch(setCrewFailure(e)))
    }
}

export function fetchCrewData(): Promise<{ data: CrewMember[] }> {
    return axios.get(`${SPACE_API_BASE_URL}/crew`);
}
