import ApiService from "../../api.service";
const state = {
  groupmemberList: [],
  groupmemberData: {}
};
const mutations = {
  setGroupMemberList(state, payload) {
    state.groupmemberList = payload;
  },
  setGroupMemberData(state, payload) {
    state.groupmemberData = payload;
  }
};
const actions = {
  async getGroupMemberList(context) {
    try {
      let response = await ApiService.get(
        "api/scholarship/scholarshipstudentgroupmembers"
      );
      context.commit("setGroupMemberList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createGroupMember(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipstudentgroupmembers/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getGroupMember(context, { id }) {
    try {
      let response = await ApiService.get(
        `api/scholarship/scholarshipstudentgroupmembers/get/${id}`
      );
      context.commit("setGroupMemberData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateGroupMember(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshipstudentgroupmembers/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteGroupMember(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshipstudentgroupmembers/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const groupmember = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default groupmember;
