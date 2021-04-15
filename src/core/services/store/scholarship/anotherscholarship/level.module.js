import ApiService from "../../../api.service";
const state = {
  levelList: [],
  levelData: {}
};
const mutations = {
  setLevelList(state, payload) {
    state.levelList = payload;
  },
  setLevelData(state, payload) {
    state.levelData = payload;
  }
};
const actions = {
  async getLevelList(context) {
    try {
      let response = await ApiService.query("api/scholarship/levels");
      context.commit("setLevelList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createLevel(context, { payload }) {
    try {
      await ApiService.post("api/scholarship/levels/create", payload);
      context.commit("setLevelData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getLevel(context, { id }) {
    try {
      let response = await ApiService.query(`api/scholarship/levels/get/${id}`);
      context.commit("setLevelData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateLevel(context, { id, payload }) {
    try {
      await ApiService.post(`api/scholarship/levels/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteLevel(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/levels/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const level = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default level;
