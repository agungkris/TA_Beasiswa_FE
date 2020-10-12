import ApiService from "../../../api.service";
const state = {
  akunjuriData: {}
};
const mutations = {
  setAkunJuriData(state, payload) {
    state.akunjuriData = payload;
  }
};
const actions = {
  async getAkunJuri(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setAkunJuriData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const akunjuri = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default akunjuri;
