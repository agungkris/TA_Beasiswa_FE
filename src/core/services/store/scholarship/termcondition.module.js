import ApiService from "../../api.service";
const state = {
  termconditionList: [],
  termconditionData: {}
};
const mutations = {
  setTermConditionList(state, payload) {
    state.termconditionList = payload;
  },
  setTermConditionData(state, payload) {
    state.termconditionData = payload;
  }
};
const actions = {
  async getTermConditionList(context) {
    try {
      let response = await ApiService.get(
        "api/scholarship/scholarshipinformation"
      );
      context.commit("setTermConditionList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createTermCondition(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipinformation/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getTermCondition(context, { id }) {
    try {
      let response = await ApiService.get(
        `api/scholarship/termcondition/get/${id}`
      );
      context.commit("setTermConditionData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateTermCondition(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/termcondition/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteTermCondition(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/termcondition/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const termcondition = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default termcondition;
