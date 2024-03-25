import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bf7e3a79-fe8f-437a-802e-2d34a3540723",
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => response.data);
};

export const followUser = (userId) => {
  return instance
    .post(`follow/${userId}`, {})
    .then((response) => response.data);
};

export const auth = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

export const getUserProfile = (id) => {
  return instance.get(`profile/` + id).then((res) => res.data);
};
