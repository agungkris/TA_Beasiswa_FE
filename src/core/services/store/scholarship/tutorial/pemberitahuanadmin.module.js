import ApiService from "../../../api.service";
const state = {
  pemberitahuanadminData: {}
};
const mutations = {
  setPemberitahuanAdminData(state, payload) {
    state.pemberitahuanadminData = payload;
  }
};
const actions = {
  async getPemberitahuanAdmin(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setPemberitahuanAdminData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const pemberitahuanadmin = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default pemberitahuanadmin;
