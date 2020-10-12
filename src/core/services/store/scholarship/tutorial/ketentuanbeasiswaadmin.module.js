import ApiService from "../../../api.service";
const state = {
  ketentuanbeasiswaadminData: {}
};
const mutations = {
  setKetentuanBeasiswaAdminData(state, payload) {
    state.ketentuanbeasiswaadminData = payload;
  }
};
const actions = {
  async getKetentuanBeasiswaAdmin(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setKetentuanBeasiswaAdminData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const ketentuanbeasiswaadmin = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default ketentuanbeasiswaadmin;
