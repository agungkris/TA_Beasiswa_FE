import ApiService from "../../../api.service";
const state = {
  jurifgdData: {}
};
const mutations = {
  setJuriFgdData(state, payload) {
    state.jurifgdData = payload;
  }
};
const actions = {
  async getJuriFgd(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setJuriFgdData", response.data);
    } catch (error) {
      throw error;
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
