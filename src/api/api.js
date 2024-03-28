import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bf7e3a79-fe8f-437a-802e-2d34a3540723",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },
  getUserProfile(id) {
    return profileAPI.getProfile(id);
  },
};

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/` + id).then((res) => res.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/` + id).then((res) => res.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then((res) => res.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};
