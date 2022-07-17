import { RootState } from '../../app/store';

export const selectCompany = (state: RootState) => state.company.data;
