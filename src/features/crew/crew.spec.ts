/**
 * Unit tests for crew reducer and actions
 */

import * as t from './actions';
import reducer, { CrewState } from './reducer';
import { handleLikeMember, loadingCrew, setCrewFailure, setCrewSuccess, setLikedMembers } from './actions';
import * as getLikedMembersFromLocalStorage from '../../utils/helpers';

describe('Crew reducer', () => {

    const initialState: CrewState = {
        data: [],
        error: '',
        status: t.Status.Loading,
        likedMembers: []
    };

    const mockData = [
        {
            "name": "Robert Behnken",
            "agency": "NASA",
            "image": "https://imgur.com/0smMgMH.png",
            "wikipedia": "https://en.wikipedia.org/wiki/Robert_L._Behnken",
            "launches": [
                "5eb87d46ffd86e000604b388"
            ],
            "status": "active",
            "id": "5ebf1a6e23a9a60006e03a7a"
        },
        {
            "name": "Douglas Hurley",
            "agency": "NASA",
            "image": "https://i.imgur.com/ooaayWf.png",
            "wikipedia": "https://en.wikipedia.org/wiki/Douglas_G._Hurley",
            "launches": [
                "5eb87d46ffd86e000604b388"
            ],
            "status": "active",
            "id": "5ebf1b7323a9a60006e03a7b"
        }
    ]

    it('should handle initial state', () => {
        expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle set crew with success', () => {
        const actual = reducer(initialState, setCrewSuccess(mockData));
        expect(actual.status).toEqual(t.Status.Idle)
        expect(actual.data).toEqual(mockData);
    });

    it('should handle set crew failure', () => {
        const error = new Error('Error!');
        const actual = reducer(initialState, setCrewFailure(error));
        expect(actual.status).toEqual(t.Status.Failed)
        expect(actual.error).toEqual(error);
    });

    it('should handle loading crew', () => {
        const actual = reducer(initialState, loadingCrew());
        expect(actual.status).toEqual(t.Status.Loading);
    });

    it('should handle set liked members with success', () => {
        const likedMembers = ['1', '2'];
        const actual = reducer(initialState, setLikedMembers(likedMembers));
        expect(actual.likedMembers).toEqual(likedMembers);
    });

    it('should add member on handleMember', () => {

        // Mock localstorage
        jest.spyOn(getLikedMembersFromLocalStorage, 'getLikedMembersFromLocalStorage').mockReturnValue('');

        const memberId = '123';
        const actual = reducer(initialState, handleLikeMember(memberId));
        expect(actual.likedMembers).toEqual([memberId]);
    });

    it('should remove member on handleMember when already a liked member', () => {

        const memberId = '123';
        initialState.likedMembers = [memberId]

        // Mock localstorage
        jest.spyOn(getLikedMembersFromLocalStorage, 'getLikedMembersFromLocalStorage').mockReturnValue([memberId]);

        const actual = reducer(initialState, handleLikeMember(memberId));
        expect(actual.likedMembers).toEqual([]);
    });

})
