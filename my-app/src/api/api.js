import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
<<<<<<< HEAD
    "API-KEY": "ad70deef-0f09-46a9-99ee-7db4f1f66db8",
=======
    "API-KEY": "76a5c139-90a9-4a61-a0a4-e862e5f46bfd",
>>>>>>> bd06db3 (ReduxThunkCreator/fixIssues)
  },
});
export let GetUsers = async (Current, Pages) => {
  return await instance
    .get(`users?page=${Current}&count=${Pages}`)
    .then((response) => {
      return response.data;
    });
};

export let GetUsersForPageChanged = async (PageNumber, Pages) => {
  return await instance
    .get(`users?page=${PageNumber}&count=${Pages}`)
    .then((response) => {
      return response.data;
    });
};
export let DeleteUserOnButtonDisabledUnfollow = async (userId) => {
  console.log(userId);
  return await instance.delete(
    `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
  );
};
export let PushUserOnButtonDisabledFollow = async (userId) => {
  console.log(userId);
  return await instance.post(`follow/${userId}`);
};
