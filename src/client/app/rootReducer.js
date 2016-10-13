import { combineReducers } from 'redux';
import content from './content';

export default combineReducers({
  [content.constants.NAME]: content.reducer
});
