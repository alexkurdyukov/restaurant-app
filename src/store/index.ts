import { combineReducers, legacy_createStore as createStore } from 'redux';
import { filterReducer } from './reducers/filter.reducer';
import { setPositionReducer } from './reducers/setPosition.reducer';

const rootReducer = combineReducers({
    setPosition: setPositionReducer,
    filters: filterReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

