import ApiService from "../../api.service";
const state = {
  cvtempleteList: [],
  cvtempleteData: {}
};
const mutations = {
  setCvTempleteList(state, payload) {
    state.cvtempleteList = payload;
  },
  setCvTempleteData(state, payload) {
    state.cvtempleteData = payload;
  }
};
const actions = {
  async getCvTempleteList(context) {
    try {
      let response = await ApiService.get(
        "api/scholarship/scholarshipinformation"
      );
      context.commit("setCvTempleteList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createCvTemplete(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipinformation/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getCvTemplete(context, { id }) {
    try {
      let response = await ApiService.get(
        `api/scholarship/cvtemplete/get/${id}`
      );
      context.commit("setCvTempleteData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateCvTemplete(context, { id, payload }) {
    try {
      await ApiService.post(`api/scholarship/cvtemplete/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteCvTemplete(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/cvtemplete/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const cvtemplete = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default cvtemplete;
