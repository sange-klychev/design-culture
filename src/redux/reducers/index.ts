import { combineReducers } from 'redux';
import filtersReducers from './filters';
import navigationReducers from './navigation';

export const rootReducer = combineReducers({
  filters: filtersReducers,
  navigation: navigationReducers,
});

export type AppState = ReturnType<typeof rootReducer>;
