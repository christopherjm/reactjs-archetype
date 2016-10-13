import Immutable from 'immutable';
import * as t from './actionTypes';
import * as constants from './constants';

const initialLocationState = {
  id: "fc01",
  barcode: "barcode",
  locationType: "location",
  name: "test"
}

export default (state = initialLocationState, action) => {
  debugger;
  switch (action.type) {
   case t.GET_LOCATION:
     return state = action[constants.NAME]
   default:
     return state
  };
}
