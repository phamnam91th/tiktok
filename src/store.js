import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Thêm reducers khác nếu cần
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;