import ApiService from "../../../api.service";
const state = {
  tingkatList: [],
  tingkatData: {}
};
const mutations = {
  setTingkatList(state, payload) {
    state.tingkatList = payload;
  },
  setTingkatData(state, payload) {
    state.tingkatData = payload;
  }
};
const actions = {
  async getTingkatList(context) {
    try {
      let response = await ApiService.query("api/scholarship/levels");
      context.commit("setTingkatList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createTingkat(context, { payload }) {
    try {
      await ApiService.post("api/scholarship/levels/create", payload);
      context.commit("setTingkatData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getTingkat(context, { id }) {
    try {
      let response = await ApiService.query(`api/scholarship/levels/get/${id}`);
      context.commit("setTingkatData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateTingkat(context, { id, payload }) {
    try {
      await ApiService.post(`api/scholarship/levels/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteTingkat(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/levels/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const tingkat = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default tingkat;
