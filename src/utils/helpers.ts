import { CrewMember } from '../features/crew/types';
import { LIKED_MEMBERS } from '../features/crew/actions';

export const getGridChunks = (crewData: CrewMember[], chunkSize: number) => {

    // Copy original array to avoid manipulation
    const data = [...crewData];

    // Set chunks of arrays in order to display a left-right grid-effect
    return [...Array(Math.ceil(data.length / chunkSize))].map(_ => data.splice(0, chunkSize));
}

// Load already-liked members from localstorage
export const getLikedMembersFromLocalStorage = () => JSON.parse(localStorage.getItem(LIKED_MEMBERS) || '{}');