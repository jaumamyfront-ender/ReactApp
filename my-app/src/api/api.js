import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "76a5c139-90a9-4a61-a0a4-e862e5f46bfd",
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
  return await instance.delete(
    `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
  );
};
export let PushUserOnButtonDisabledFollow = async (userId) => {
  return await instance.post(`follow/${userId}`);
};

export let HeaderLogIn = async () => {
  return await instance.get(`auth/me`);
};

export let GetNewProfileAndShowHim = async (userId) => {
  // console.warn("obsolete method,please use profileAPI object");
  return instance.get(`profile/${userId}`);
};
export const ProfileAPI = {
  getStatus(userId) {
    // console.log(userId);
    return instance.get(`profile/status/${userId}`);
  },
  putStatus(status) {
    // console.log(status);
    return instance.put(`profile/status/`, { status: status });
  },
};
