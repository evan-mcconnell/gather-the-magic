import { combineReducers } from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import collectionReducer from './collectionReducer';
import deckReducer from './deckReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  collection: collectionReducer,
  deck: deckReducer
});


export default rootReducer;
