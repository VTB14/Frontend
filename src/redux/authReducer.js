import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  login: null,
  password: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return{
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state;
  }
}

export const setAuthUserData = (userId, password, login) => ({type: SET_USER_DATA, data: {userId, password, login} });

export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0){
        let {id, login, password} = response.data.data;
        dispatch(setAuthUserData(id, login, password))
      }
    })
}
export const login = (login, password ) => (dispatch) => {
  authAPI.login(login, password )
    .then(response => {
      if (response.data.resultCode === 0){
        dispatch(getAuthUserData())
      }
    })
}

export default authReducer;