import { HeaderLogIn } from "../../api/api";
let initialState = {
  Id: null,
  email: null,
  login: null,
  isAuth: false,
};
const setUserAuth = "setUserAuth";
export let setUserAuthAC = (Id, email, login) => ({
  type: setUserAuth,
  authData: { Id, email, login },
});

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case setUserAuth:
      return {
        ...state,
        ...action.authData,
        isAuth: true,
      };
    default:
      return state;
  }
};
export default Auth;

export const AuthTHC = () => {
  return (dispatch) => {
    HeaderLogIn().then((response) => {
      let { id, login, email } = response.data.data;

      if (response.data.resultCode === 0) {
        dispatch(setUserAuthAC(id, login, email));
      }
    });
  };
};
