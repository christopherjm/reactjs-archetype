import * as t from './actionTypes';

export function getLocation(location){
  return {
    type: t.GET_LOCATION,
    location
  }
}
