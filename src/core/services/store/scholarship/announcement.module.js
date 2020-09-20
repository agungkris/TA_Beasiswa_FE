import ApiService from "../../api.service";
const state = {
  announcementList: [],
  announcementData: {}
};
const mutations = {
  setAnnouncementList(state, payload) {
    state.announcementList = payload;
  },
  setAnnouncementData(state, payload) {
    state.announcementData = payload;
  }
};
const actions = {
  async getAnnouncementList(context, payload) {
    try {
      var searchParams = new URLSearchParams();
      if (payload != null) {
        searchParams.append("period_id", payload);
      }

      let response = await ApiService.query(
        "api/scholarship/scholarshipannouncement?" + searchParams
      );
      context.commit("setAnnouncementList", response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async createAnnouncement(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipannouncement/create",
        payload
      );
      context.commit("setAnnouncementData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getAnnouncement(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/scholarshipannouncement/get/${id}`
      );
      context.commit("setAnnouncementData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateAnnouncement(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshipannouncement/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteAnnouncement(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshipannouncement/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const announcement = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default announcement;
