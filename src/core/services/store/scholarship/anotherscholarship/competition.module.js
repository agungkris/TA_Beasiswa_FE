import ApiService from "../../../api.service";
const state = {
  competitionList: [],
  competitionData: {}
};
const mutations = {
  setCompetitionList(state, payload) {
    state.competitionList = payload;
  },
  setCompetitionData(state, payload) {
    state.competitionData = payload;
  }
};
const actions = {
  async getCompetitionList(context, { student_id }) {
    try {
      var searchParams = new URLSearchParams();

      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      let response = await ApiService.query(
        `api/scholarship/competitionachievement?` + searchParams
      );
      context.commit("setCompetitionList", response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async createCompetition(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/competitionachievement/create",
        payload
      );
      context.commit("setCompetitionData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getCompetition(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/competitionachievement/get/${id}`
      );
      context.commit("setCompetitionData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateCompetition(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/competitionachievement/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteCompetition(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/competitionachievement/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const competition = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default competition;
