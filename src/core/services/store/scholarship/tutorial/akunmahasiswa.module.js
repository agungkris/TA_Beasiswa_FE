import ApiService from "../../../api.service";
const state = {
  akunmahasiswaData: {}
};
const mutations = {
  setAkunMahasiswaData(state, payload) {
    state.akunmahasiswaData = payload;
  }
};
const actions = {
  async getAkunMahasiswa(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setAkunMahasiswaData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const akunmahasiswa = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default akunmahasiswa;
