import ApiService from "../../api.service";
const state = {
  createjuryList: [],
  createjuryData: {}
};
const mutations = {
  setCreateJuryList(state, payload) {
    state.createjuryList = payload;
  },
  setCreateJuryData(state, payload) {
    state.createjuryData = payload;
  }
};
const actions = {
  async getCreateJuryList(context) {
    try {
      let response = await ApiService.query("api/auth/users?level=juri");
      context.commit("setCreateJuryList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createCreateJury(context, { payload }) {
    try {
      await ApiService.post("api/auth/users/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getCreateJury(context, { id }) {
    try {
      let response = await ApiService.query(`api/auth/users/get/${id}`);
      context.commit("setCreateJuryData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateCreateJury(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/users/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteCreateJury(context, { id }) {
    try {
      await ApiService.delete(`api/auth/users/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const createjury = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default createjury;
