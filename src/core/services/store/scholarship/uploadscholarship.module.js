import ApiService from "../../api.service";
const state = {
  uploadscholarshipList: [], //ini array untuk data yang banyak
  uploadscholarshipFgd: [],
  uploadscholarshipFinal: [],
  uploadscholarshipData: {}, //ini objek
  reportData: {}
};
const mutations = {
  setUploadScholarshipList(state, payload) {
    state.uploadscholarshipList = payload;
  },
  setUploadScholarshipFgd(state, payload) {
    state.uploadscholarshipFgd = payload;
  },
  setUploadScholarshipFinal(state, payload) {
    state.uploadscholarshipFinal = payload;
  },
  setUploadScholarshipData(state, payload) {
    state.uploadscholarshipData = payload;
  },
  setReportData(state, payload) {
    state.reportData = payload;
  }
};
const actions = {
  async getUploadScholarshipList(
    context,
    { next_stage, period_id, final_stage }
  ) {
    try {
      var searchParams = new URLSearchParams();
      if (next_stage != null) {
        searchParams.append("next_stage", next_stage);
      }
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      if (final_stage != null) {
        searchParams.append("final_stage", final_stage);
      }

      let response = await ApiService.query(
        "api/scholarship/scholarshipsubmissions?" + searchParams
      );
      context.commit("setUploadScholarshipList", response.data.data);
    } catch (error) {
      throw error;
    }
  },

  async getUploadScholarshipFgd(
    context,
    { next_stage, period_id, final_stage }
  ) {
    try {
      var searchParams = new URLSearchParams();
      if (next_stage != null) {
        searchParams.append("next_stage", next_stage);
      }
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      if (final_stage != null) {
        searchParams.append("final_stage", final_stage);
      }

      let response = await ApiService.query(
        "api/scholarship/scholarshipsubmissions?" + searchParams
      );
      context.commit("setUploadScholarshipFgd", response.data.data);
    } catch (error) {
      throw error;
    }
  },

  async getUploadScholarshipFinal(
    context,
    { next_stage, period_id, final_stage }
  ) {
    try {
      var searchParams = new URLSearchParams();
      if (next_stage != null) {
        searchParams.append("next_stage", next_stage);
      }
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      if (final_stage != null) {
        searchParams.append("final_stage", final_stage);
      }

      let response = await ApiService.query(
        "api/scholarship/scholarshipsubmissions?" + searchParams
      );
      context.commit("setUploadScholarshipFgd", response.data);
    } catch (error) {
      throw error;
    }
  },

  async createUploadScholarship(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipsubmissions/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },

  async getUploadScholarship(context, { id }) {
    try {
      let response = await ApiService.get(
        `api/scholarship/scholarshipsubmissions/get/${id}`
      );
      context.commit("setUploadScholarshipData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateUploadScholarship(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshipsubmissions/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },

  async NextStage(context, { id, next_stage }) {
    try {
      let payload = {
        next_stage
      };
      await ApiService.post(
        `api/scholarship/scholarshipsubmissions/nextstage/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },

  async FinalStage(context, { id, final_stage }) {
    try {
      let payload = {
        final_stage
      };
      await ApiService.post(
        `api/scholarship/scholarshipsubmissions/finalstage/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteUploadScholarship(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshipsubmissions/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  },

  async report(context, { period_id }) {
    try {
      var searchParams = new URLSearchParams();
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      let response = await ApiService.post(
        "api/scholarship/scholarshipsubmissions/report?" + searchParams
      );
      context.commit("setReportData", response.data);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const uploadscholarship = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default uploadscholarship;
