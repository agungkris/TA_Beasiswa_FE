import ApiService from "../../../api.service";
const state = {
  academicList: [],
  academicData: {}
};
const mutations = {
  setAcademicList(state, payload) {
    state.academicList = payload;
  },
  setAcademicData(state, payload) {
    state.academicData = payload;
  }
};
const actions = {
  async getAcademicList(context, {student_id}) {
    try {
      var searchParams = new URLSearchParams();

      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      let response = await ApiService.query(
        `api/scholarship/academicachievement?` + searchParams
      );
      context.commit("setAcademicList", response.data.data);
      } catch (error) {
        throw error;
      }
  },
  async createAcademic(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/academicachievement/create",
        payload
      );
      context.commit("setAcademicData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getAcademic(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/academicachievement/get/${id}`
      );
      context.commit("setAcademicData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateAcademic(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/academicachievement/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteAcademic(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/academicachievement/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const academic = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default academic;
