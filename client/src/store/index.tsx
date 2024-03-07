// client/src/redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from 'src/components/Auth/Auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export default store;
