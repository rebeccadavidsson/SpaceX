import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import companyReducer from '../features/company/reducer';
import crewReducer from '../features/crew/reducer';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    crew: crewReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
