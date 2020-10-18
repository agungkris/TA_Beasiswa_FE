import ApiService from "../../../api.service";
const state = {
  semesterList: [],
};
const mutations = {
  setSemesterList(state, payload) {
    state.semesterList = payload;
  },
};
const actions = {
  async getSemesterList(context) {
    try {
      let response = await ApiService.query("api/scholarship/semesters");
      context.commit("setSemesterList", response.data);
    } catch (error) {
      throw error;
    }
  },
};
const getters = {};

const semester = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default semester;
