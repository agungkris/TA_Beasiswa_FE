import ApiService from "../../../api.service";
const state = {
  dokumenmahasiswaData: {}
};
const mutations = {
  setDokumenMahasiswaData(state, payload) {
    state.dokumenmahasiswaData = payload;
  }
};
const actions = {
  async getDokumenMahasiswa(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setDokumenMahasiswaData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const dokumenmahasiswa = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default dokumenmahasiswa;
