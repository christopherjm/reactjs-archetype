import Immutable from 'immutable'

export default (state = {}, action) => {
  debugger;
  switch (action.type) {
   case 'LOCATION':
     return state = action.location
   default:
     return state
  };
}
