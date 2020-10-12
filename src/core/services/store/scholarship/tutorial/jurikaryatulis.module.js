import ApiService from "../../../api.service";
const state = {
  jurikaryatulisData: {}
};
const mutations = {
  setJuriKaryaTulisData(state, payload) {
    state.jurikaryatulisData = payload;
  }
};
const actions = {
  async getJuriKaryaTulis(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setJuriKaryaTulisData", response.data);
    } catch (error) {
      throw error;
    }
  }
};
const getters = {};

const jurikaryatulis = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default jurikaryatulis;
