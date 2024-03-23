import { LoginAPI } from "../../api/api";
let initialState = {
  Id: null,
  email: null,
  login: null,
  isAuth: false,
  whichResponse: "",
};

const setUserAuth = "setUserAuth";
const unsetAuth = "unsetAuth";
const responseFromServer = "responseFromServer";

export let setUserAuthAC = (Id, email, login) => ({
  type: setUserAuth,
  authData: { Id, email, login },
});

export let unsetAuthAC = () => ({
  type: unsetAuth,
  isAuth: false,
});

export let responseFromSr = (messages) => ({
  type: responseFromServer,
  response: messages,
});

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case setUserAuth:
      return {
        ...state,
        ...action.authData,
        isAuth: true,
      };

    case unsetAuth:
      return {
        ...state,
        isAuth: false,
      };

    case responseFromServer:
      return {
        ...state,
        whichResponse: action.response,
      };
    default:
      return state;
  }
};
export default Auth;

export const AuthTHC = () => {
  return (dispatch) => {
    LoginAPI.HeaderLogIn().then((response) => {
      let { id, login, email } = response.data.data;

      if (response.data.resultCode === 0) {
        dispatch(setUserAuthAC(id, login, email));
      }
      if (response.data.resultCode === 1) {
        console.log(response.data.messages);
        dispatch(responseFromSr(response.data.messages));
      }
    });
  };
};

export const LoginTHC = (email, password, rememberMe) => {
  return (dispatch) => {
    LoginAPI.Login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        LoginAPI.HeaderLogIn().then((response) => {
          let { id, login, email } = response.data.data;
          dispatch(setUserAuthAC(id, login, email));
        });
      }
      if (response.data.resultCode === 1) {
        dispatch(responseFromSr(response.data.messages));
      }
    });
  };
};

export const logoutTHC = () => (dispatch) => {
  LoginAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserAuthAC(null, null, null));
      dispatch(unsetAuthAC());
    }
  });
};
