import ApiService from "../../../api.service";
const state = {
  organizationList: [],
  organizationData: {}
};
const mutations = {
  setOrganizationList(state, payload) {
    state.organizationList = payload;
  },
  setOrganizationData(state, payload) {
    state.organizationData = payload;
  }
};
const actions = {
  async getOrganizationList(context) {
    try {
        let response = await ApiService.query(
          "api/scholarship/organizationachievement"
        );
        context.commit("setOrganizationList", response.data.data);
      } catch (error) {
        throw error;
      }
  },
  async createOrganization(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/organizationachievement/create",
        payload
      );
      context.commit("setOrganizationData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getOrganization(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/organizationachievement/get/${id}`
      );
      context.commit("setOrganizationData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateOrganization(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/organizationachievement/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteOrganization(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/organizationachievement/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const organization = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default organization;
