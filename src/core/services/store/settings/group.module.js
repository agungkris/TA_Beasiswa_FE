import ApiService from "../../api.service";
const state = {
  groupList: [],
  groupData: {}
};
const mutations = {
  setGroupList(state, payload) {
    state.groupList = payload;
  },
  setGroupData(state, payload) {
    state.groupData = payload;
  }
};
const actions = {
  async randomMember(context, { period }) {
    try {
      let response = await ApiService.query(
        "api/scholarship/studentgroup/random?period_id=" + period
      );
      context.commit("setGroupList", response.data);
    } catch (error) {
      throw error;
    }
  },

  async getGroupList(context, payload) {
    try {
      var searchParams = new URLSearchParams();
      if (payload != null) {
        searchParams.append("period_id", payload);
      }

      let response = await ApiService.query(
        "api/scholarship/studentgroup?" + searchParams
      );
      context.commit("setGroupList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createGroup(context, { payload }) {
    try {
      await ApiService.post("api/scholarship/studentgroup/create", payload);
      context.commit("setGroupData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getGroup(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/studentgroup/get/${id}`
      );
      context.commit("setGroupData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateGroup(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/studentgroup/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteGroup(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/studentgroup/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  },
  resetGroup(context) {
    context.commit("setGroupData", {});
  }
};
const getters = {};

const group = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default group;
