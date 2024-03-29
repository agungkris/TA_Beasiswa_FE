import ApiService from "../../../api.service";
const state = {
  paperList: [],
  paperData: {}
};
const mutations = {
  setPaperList(state, payload) {
    state.paperList = payload;
  },
  setPaperData(state, payload) {
    state.paperData = payload;
  }
};
const actions = {
  async getPaperList(context, { student_id }) {
    try {
      var searchParams = new URLSearchParams();

      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      let response = await ApiService.query(
        `api/scholarship/paperachievement?` + searchParams
      );
      context.commit("setPaperList", response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async createPaper(context, { payload }) {
    try {
      await ApiService.post("api/scholarship/paperachievement/create", payload);
      context.commit("setPaperData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getPaper(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/paperachievement/get/${id}`
      );
      context.commit("setPaperData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updatePaper(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/paperachievement/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deletePaper(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/paperachievement/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  },
  resetPaper(context) {
    context.commit("setPaperData", {});
  }
};
const getters = {};

const paper = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default paper;
