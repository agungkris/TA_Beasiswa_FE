import ApiService from "../../api.service";
const state = {
  paperjuryList: [],
  paperjuryData: {
    submission_id: []
  }
};
const mutations = {
  setPaperJuryList(state, payload) {
    state.paperjuryList = payload;
  },
  setPaperJuryData(state, payload) {
    state.paperjuryData = payload;
  }
};
const actions = {
  async getPaperJuryList(context) {
    try {
      let response = await ApiService.query("api/auth/users/add-submission");
      context.commit("setPaperJuryList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async getSubmissionMember(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/auth/users/submission-member/${id}`
      );
      context.commit("setPaperJuryList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createPaperJury(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/users/add-submission/${id}`, payload);
      //   context.commit("setPaperJuryData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getPaperJury(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/auth/users/add-submission/get/${id}`
      );
      context.commit("setPaperJuryData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updatePaperJury(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/auth/users/add-submission/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deletePaperJury(context, { id, submission_id }) {
    try {
      await ApiService.delete(
        `api/auth/users/removesubmissionmember/${id}/submission/${submission_id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const paperjury = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default paperjury;
