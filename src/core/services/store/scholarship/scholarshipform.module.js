import ApiService from "../../api.service";
const state = {
  scholarshipformList: [],
  scholarshipformData: {}
};
const mutations = {
  setScholarshipFormList(state, payload) {
    state.scholarshipformList = payload;
  },
  setScholarshipFormData(state, payload) {
    state.scholarshipformData = payload;
  }
};
const actions = {
  async getScholarshipFormList(context) {
    try {
      let response = await ApiService.get(
        "api/scholarship/scholarshipinformation"
      );
      context.commit("setScholarshipFormList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createScholarshipForm(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipinformation/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getScholarshipForm(context, { id }) {
    try {
      let response = await ApiService.get(
        `api/scholarship/scholarshipform/get/${id}`
      );
      context.commit("setScholarshipFormData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateScholarshipForm(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshipform/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteScholarshipForm(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/scholarshipform/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const scholarshipform = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default scholarshipform;
