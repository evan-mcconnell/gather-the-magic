// import constants from './../constants';

const { c } = constants;

const authReducer = (state = {}, action) => {
  switch(action.c) {
    case c.TRIGGER:
      return state;
    default: 
      return state;
  }
};

export default authReducer;