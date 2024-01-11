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
