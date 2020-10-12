import ApiService from "../../../api.service";
const state = {
  laporanData: {}
};
const mutations = {
  setLaporanData(state, payload) {
    state.laporanData = payload;
  }
};
const actions = {
  async getLaporan(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setLaporanData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const laporan = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default laporan;
