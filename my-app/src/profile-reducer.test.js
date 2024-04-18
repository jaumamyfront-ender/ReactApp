
import ProfileContentReducer, { ActionCreatorAdd } from "./components/Redux/reducer-content";

  //call action+ add some new value --> new initialized state --> letnewstate.posts.length--result

test("expectations of new added element to state profile", () => {
  // Create an action to add a post
  let action = ActionCreatorAdd("test is successful");

  // Define initial state
  let initialState = {
    AddProfilePost: [{ message: "" }],
    Profile: {
      photos: {},
    },
    status: "",
  };

  // Call reducer with initial state and action to get the new state
  let newState = ProfileContentReducer(initialState, action);

  // Assert that the length of AddProfilePost array in the new state is 1
  expect(newState.AddProfilePost.length).toBe(1);
});

