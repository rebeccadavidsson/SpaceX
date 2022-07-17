import { RootState } from '../../app/store';

export const selectCrew = (state: RootState) => state.crew.data;

export const selectCrewStatus = (state: RootState) => state.crew.status;

export const selectLikedMembers = (state: RootState) => state.crew.likedMembers;
