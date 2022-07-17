import { RootState } from '../../app/store';

export const selectCrew = (state: RootState) => state.crew.data;
