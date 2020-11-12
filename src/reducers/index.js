import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import submitReducer from './submitReducer';
import typeReducer from './typeReducer';

const reducer = combineReducers({
  form: formReducer,
  dishType: typeReducer,
  formObject: submitReducer
});

export default reducer;