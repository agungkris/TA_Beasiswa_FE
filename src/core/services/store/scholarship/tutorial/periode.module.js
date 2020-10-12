import ApiService from "../../../api.service";
const state = {
  periodeData: {}
};
const mutations = {
  setPeriodeData(state, payload) {
    state.periodeData = payload;
  }
};
const actions = {
  async getPeriode(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setPeriodeData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const periode = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default periode;
