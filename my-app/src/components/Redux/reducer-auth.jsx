import { LoginAPI } from "../../api/api";
let initialState = {
  Id: null,
  email: null,
  login: null,
  isAuth: false,
  whichResponse: "",
  initialized: false,
  redirectToLogin: false,
};

const setUserAuth = "auth/setUserAuth";
const unsetAuth = "auth/unsetAuth";
const responseFromServer = "auth/responseFromServer";
const succsessfullInit = "auth/succsessfullInit";
const unsuccsessfullInit = "auth/unsuccsessfullInit";

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
export let succsessfullInitilization = () => ({ type: succsessfullInit });
export let RedirectToLogin = (response) => ({ type: unsuccsessfullInit, response: response });

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
    case succsessfullInit:
      return {
        ...state,
        initialized: true,
      };
    case unsuccsessfullInit:
      return {
        ...state,
        redirectToLogin: action.response,
        initialized: true,
      };

    default:
      return state;
  }
};
export default Auth;

export const AuthTHC = () => async (dispatch) => {
  let response = await LoginAPI.HeaderLogIn();
  const { id, login, email } = response.data.data;

  if (response.data.resultCode === 0) {
    dispatch(setUserAuthAC(id, login, email));
    dispatch(succsessfullInitilization());
  }
  if (response.data.resultCode === 1) {
    dispatch(responseFromSr(response.data.messages));
    dispatch(RedirectToLogin(true));
  }
};

export const LoginTHC = (email, password, rememberMe) => async (dispatch) => {
  const response = await LoginAPI.Login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    const response = await LoginAPI.HeaderLogIn();
    let { id, login, email } = response.data.data;
    dispatch(setUserAuthAC(id, login, email));
    dispatch(RedirectToLogin(false));
  }

  if (response.data.resultCode === 1) {
    dispatch(responseFromSr(response.data.messages));
  }
};

export const logoutTHC = () => (dispatch) => {
  LoginAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserAuthAC(null, null, null));
      dispatch(unsetAuthAC());
    }
  });
};
