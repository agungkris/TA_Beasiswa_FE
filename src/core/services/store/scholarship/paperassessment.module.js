import ApiService from "../../api.service";
const state = {
  paperassessmentList: [],
  paperassessmentData: {},
  paperassessmentReport: {}
};
const mutations = {
  setPaperAssessmentList(state, payload) {
    state.paperassessmentList = payload;
  },
  setPaperAssessmentData(state, payload) {
    state.paperassessmentData = payload;
  },
  setPaperAssessmentReport(state, payload) {
    state.paperassessmentReport = payload;
  }
};
const actions = {
  async report(context, { student_id, period_id }) {
    try {
      var searchParams = new URLSearchParams();
      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      let response = await ApiService.query(
        "api/scholarship/scholarshippaperassessments/report?" + searchParams
      );
      context.commit("setPaperAssessmentReport", response.data);
    } catch (error) {
      throw error;
    }
  },
  async getPaperAssessmentList(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshippaperassessments"
      );
      context.commit("setPaperAssessmentList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createPaperAssessment(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshippaperassessments/create/${id}`,
        payload
      );
      context.commit("setPaperAssessmentData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getPaperAssessment(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/scholarshippaperassessments/get/${id}`
      );
      context.commit("setPaperAssessmentData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updatePaperAssessment(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshippaperassessments/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deletePaperAssessment(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshippaperassessments/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const paperassessment = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default paperassessment;
