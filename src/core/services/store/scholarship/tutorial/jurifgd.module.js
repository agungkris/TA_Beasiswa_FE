import ApiService from "../../../api.service";
const state = {
  jurifgdList: [],
  jurifgdData: {}
};
const mutations = {
  setJuriFgdList(state, payload) {
    state.jurifgdList = payload;
  },
  setJuriFgdData(state, payload) {
    state.jurifgdData = payload;
  }
};
const actions = {
  async getJuriFgdList(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setJuriFgdData", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createJuriFgd(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshiptutorial/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getJuriFgd(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/jurifgd/get/${id}`
      );
      context.commit("setJuriFgdData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateJuriFgd(context, { id, payload }) {
    try {
      await ApiService.post(`api/scholarship/jurifgd/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteJuriFgd(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/jurifgd/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const jurifgd = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default jurifgd;
