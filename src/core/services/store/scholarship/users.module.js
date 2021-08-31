import ApiService from "../../api.service";
const state = {
  usersList: [],
  usersData: {
    prodi_id: null
  },
  usersAchievementList: []
};
const mutations = {
  setUsersList(state, payload) {
    state.usersList = payload;
  },
  setUsersData(state, payload) {
    state.usersData = payload;
  },
  setUsersAchievementList(state, payload) {
    state.usersAchievementList = payload;
  }
};
const actions = {
  async getUsersList(context) {
    try {
      let response = await ApiService.query("api/auth/users?level=student");
      context.commit("setUsersList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async getUsersAchievementList(context) {
    try {
      let response = await ApiService.query("api/auth/users/achievementlist");
      context.commit("setUsersAchievementList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createUsers(context, { payload }) {
    try {
      await ApiService.post("api/auth/register", payload);
    } catch (error) {
      throw Error(error.message);
    }
  },
  async getUsers(context, { id }) {
    try {
      let response = await ApiService.query(`api/auth/users/get/${id}`);
      context.commit("setUsersData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateUsers(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/users/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateAchievementUsers(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/users/achievement/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteUsers(context, { id }) {
    try {
      await ApiService.delete(`api/auth/users/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  },
  resetRegistrasi(context) {
    context.commit("setUsersData", {});
  }
};
const getters = {};

const users = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default users;
