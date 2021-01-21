import ApiService from "../../api.service";
const state = {
  prodiList: [],
  prodiData: {}
};
const mutations = {
  setProdiList(state, payload) {
    state.prodiList = payload;
  },
  setProdiData(state, payload) {
    state.prodiData = payload;
  }
};
const actions = {
  async getProdiList(context) {
    try {
      let response = await ApiService.query("api/auth/prodi");
      context.commit("setProdiList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createProdi(context, { payload }) {
    try {
      await ApiService.post("api/auth/prodi/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getProdi(context, { id }) {
    try {
      let response = await ApiService.query(`api/auth/prodi/get/${id}`);
      context.commit("setProdiData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateProdi(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/prodi/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteProdi(context, { id }) {
    try {
      await ApiService.delete(`api/auth/prodi/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const prodi = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default prodi;
