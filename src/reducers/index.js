import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  form: formReducer
});

export default reducer;