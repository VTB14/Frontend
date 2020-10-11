const SEND_DATA = 'SEND_DATA';
const UPDATE_DATA = 'UPDATE_DATA';

let initialState = {
  login: "",
  password: ""
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        login: action.login,
        password: action.password
      }
    case SEND_DATA:
      return {
        ...state,
        login: action.login,
        password: action.password
      }
    default:
      return state;
  }
}

export const sendMessageAC = () => ({type: SEND_DATA})
export const updateDataAC = (login) => 
({type: UPDATE_DATA, login: login})

export default loginReducer;