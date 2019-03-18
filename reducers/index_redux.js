import { combineReducers } from 'redux';


const fooReducer = (state = null, action) => {
  switch(action.type) {
    case 'foo':
      return action.payload || false;
    default:
      return state;
  }
};

export default combineReducers({
  foo: fooReducer
});
