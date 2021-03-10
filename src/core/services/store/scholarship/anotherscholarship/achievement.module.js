import ApiService from "../../../api.service";
const state = {
  achievementList: [],
  achievementData: {}
};
const mutations = {
  setAchievementList(state, payload) {
    state.achievementList = payload;
  },
  setAchievementData(state, payload) {
    state.achievementData = payload;
  }
};
const actions = {
  async getAchievementList(context, { student_id }) {
    try {
      var searchParams = new URLSearchParams();

      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      let response = await ApiService.query(
        `api/scholarship/scholarshipachievements?` + searchParams
      );
      context.commit("setAchievementList", response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async createAchievement(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipachievements/create",
        payload
      );
      context.commit("setAchievementData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getAchievement(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/scholarshipachievements/get/${id}`
      );
      context.commit("setAchievementData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateAchievement(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshipachievements/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteAchievement(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshipachievements/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const achievement = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default achievement;
