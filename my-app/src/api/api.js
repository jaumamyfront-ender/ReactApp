import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "f0f817fb-ae87-4732-8be4-12afaeaa4531",
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
export let DeleteUserOnButtonDisabledUnfollow = async (u) => {
  return await instance.delete(
    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`
  );
};
export let PushUserOnButtonDisabledFollow = async (u) => {
  return await instance.post(
    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`
  );
};
