import { LoginAPI } from "../../api/api";
import { AuthTHC } from "./reducer-auth";
let initialState = {
  initialized: false,
  
};

const successInitialized = "successInitialized";

export let initializedSuccess = () => ({
  type: successInitialized,
});

const AppInitialized = (state = initialState, action) => {
  switch (action.type) {
    case successInitialized:
      return {
        ...state,

      };

    default:
      return state;
  }
};
export default AppInitialized;

export const InitializedTHC = () => {
  return (dispatch) => {
dispatch(AuthTHC())

  };
};

//this component not work generaly(all logic is into Auth Component)
