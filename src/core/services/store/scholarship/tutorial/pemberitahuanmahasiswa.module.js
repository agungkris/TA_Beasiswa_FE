import ApiService from "../../../api.service";
const state = {
  pemberitahuanmahasiswaData: {}
};
const mutations = {
  setPemberitahuanMahasiswaData(state, payload) {
    state.pemberitahuanmahasiswaData = payload;
  }
};
const actions = {
  async getPemberitahuanMahasiswa(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setPemberitahuanMahasiswaData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const pemberitahuanmahasiswa = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default pemberitahuanmahasiswa;
