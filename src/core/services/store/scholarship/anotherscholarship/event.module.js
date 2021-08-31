import ApiService from "../../../api.service";
const state = {
  eventList: [],
  eventData: {}
};
const mutations = {
  setEventList(state, payload) {
    state.eventList = payload;
  },
  setEventData(state, payload) {
    state.eventData = payload;
  }
};
const actions = {
  async getEventList(context, { student_id }) {
    try {
      var searchParams = new URLSearchParams();

      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      let response = await ApiService.query(
        `api/scholarship/eventachievement?` + searchParams
      );
      context.commit("setEventList", response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async createEvent(context, { payload }) {
    try {
      await ApiService.post("api/scholarship/eventachievement/create", payload);
      context.commit("setEventData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getEvent(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/eventachievement/get/${id}`
      );
      context.commit("setEventData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateEvent(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/eventachievement/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteEvent(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/eventachievement/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  },
  resetEvent(context) {
    context.commit("setEventData", {});
  }
};
const getters = {};

const event = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default event;
