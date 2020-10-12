import ApiService from "../../../api.service";
const state = {
  grupfgdData: {}
};
const mutations = {
  setGrupFgdData(state, payload) {
    state.grupfgdData = payload;
  }
};
const actions = {
  async getGrupFgd(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setGrupFgdData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const grupfgd = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default grupfgd;
