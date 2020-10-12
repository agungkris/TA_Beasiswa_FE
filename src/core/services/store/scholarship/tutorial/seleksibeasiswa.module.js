import ApiService from "../../../api.service";
const state = {
  seleksibeasiswaData: {}
};
const mutations = {
  setSeleksiBeasiswaData(state, payload) {
    state.seleksibeasiswaData = payload;
  }
};
const actions = {
  async getSeleksiBeasiswa(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setSeleksiBeasiswaData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const seleksibeasiswa = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default seleksibeasiswa;
