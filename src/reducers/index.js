import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { dishType } from './dishType';

const reducer = combineReducers({
  form: formReducer,
  dishType: dishType
});

export default reducer;