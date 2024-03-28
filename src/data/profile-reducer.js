import { profileAPI } from "./../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) dispatch(setStatus(status));
  });
};

export const getUserStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatus(data));
  });
};

export const getUserProfile = (id) => (dispatch) => {
  profileAPI.getUserProfile(id).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export default profileReducer;
