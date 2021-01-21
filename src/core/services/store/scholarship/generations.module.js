import ApiService from "../../api.service";
const state = {
  generationsList: [],
  generationsData: {}
};
const mutations = {
  setGenerationsList(state, payload) {
    state.generationsList = payload;
  },
  setGenerationsData(state, payload) {
    state.generationsData = payload;
  }
};
const actions = {
  async getGenerationsList(context) {
    try {
      let response = await ApiService.query("api/auth/generations");
      context.commit("setGenerationsList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createGenerations(context, { payload }) {
    try {
      await ApiService.post("api/auth/generations/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getGenerations(context, { id }) {
    try {
      let response = await ApiService.query(`api/auth/generations/get/${id}`);
      context.commit("setGenerationsData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateGenerations(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/generations/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteGenerations(context, { id }) {
    try {
      await ApiService.delete(`api/auth/generations/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const generations = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default generations;
