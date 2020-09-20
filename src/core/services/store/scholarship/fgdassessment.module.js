import ApiService from "../../api.service";
const state = {
  fgdassessmentList: [],
  fgdassessmentData: {}
};
const mutations = {
  setFgdAssessmentList(state, payload) {
    state.fgdassessmentList = payload;
  },
  setFgdAssessmentData(state, payload) {
    state.fgdassessmentData = payload;
  }
};
const actions = {
  async getFgdAssessmentList(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshippresentationassessments"
      );
      context.commit("setFgdAssessmentList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createFgdAssessment(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshippresentationassessments/create/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getFgdAssessment(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/scholarshippresentationassessments/get/${id}`
      );
      context.commit("setFgdAssessmentData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateFgdAssessment(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshippresentationassessments/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteFgdAssessment(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshippresentationassessments/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const fgdassessment = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default fgdassessment;
