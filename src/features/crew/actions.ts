import axios from 'axios'
import { SPACE_API_BASE_URL } from '../../utils/urls';
import { Dispatch } from 'react';
import { CrewMember } from './types';
import { getLikedMembersFromLocalStorage } from '../../utils/helpers';

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
    const likedMembers = getLikedMembersFromLocalStorage();

    // When never set before, likedMembers from localStorage is an object
    if (Object.keys(likedMembers).length || likedMembers.length) {

        // Remove id if it is found in localStorage -> this member was already liked before
        if (likedMembers.includes(id)) {
            const index = likedMembers.indexOf(id);
            index > -1 && likedMembers.splice(index, 1);
            window.localStorage.setItem(LIKED_MEMBERS, JSON.stringify(likedMembers))
        } else {

            // Add id to already existing members in localstorage
            window.localStorage.setItem(LIKED_MEMBERS, JSON.stringify(likedMembers.concat([id])))
        }
    } else {

        // Set initial array with member-ids
        window.localStorage.setItem(LIKED_MEMBERS, JSON.stringify([id]))
    }
    return {type: HANDLE_LIKE_MEMBER, payload: id}
}

export const getCrew = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loadingCrew());

        const likedMemberIds = getLikedMembersFromLocalStorage();
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
