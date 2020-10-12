import ApiService from "../../../api.service";
const state = {
  ketentuanbeasiswamahasiswaData: {}
};
const mutations = {
  setKetentuanBeasiswaMahasiswaData(state, payload) {
    state.ketentuanbeasiswamahasiswaData = payload;
  }
};
const actions = {
  async getKetentuanBeasiswaMahasiswa(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setKetentuanBeasiswaMahasiswaData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const ketentuanbeasiswamahasiswa = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default ketentuanbeasiswamahasiswa;
