import ApiService from "../../api.service";
const state = {
  uploadscholarshipList: [], //ini array untuk data yang banyak
  uploadscholarshipFgd: [],
  uploadscholarshipFinal: [],
  uploadscholarshipData: {}, //ini objek
  reportData: {},
  reportNewList: [],
  kmeansData: [],
  submitScholarship: [],
  submitIpk: []
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
  },
  setReportNewList(state, payload) {
    state.reportNewList = payload;
  },
  setKmeansData(state, payload) {
    state.kmeansData = payload;
  },
  setSubmitScholarshipList(state, payload) {
    state.submitScholarshipList = payload;
  },
  setSubmitIpkList(state, payload) {
    state.submitIpkList = payload;
  }
};
const actions = {
  async getUploadScholarshipList(
    context,
    { next_stage, period_id, final_stage, jury_id, submission_member }
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
      if (jury_id != null) {
        searchParams.append("jury_id", jury_id);
      }
      if (submission_member != null) {
        searchParams.append("submission_member", submission_member);
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
      // context.commit("setUploadScholarshipData", {});
    } catch (error) {
      throw Error(error);
    }
  },

  async getUploadScholarship(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/scholarshipsubmissions/get/${id}`
      );
      context.commit("setUploadScholarshipData", response.data.data);
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
  },

  async reportNew(context, { period_id }) {
    try {
      var searchParams = new URLSearchParams();
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      let response = await ApiService.post(
        "api/scholarship/scholarshipsubmissions/reportnew?" + searchParams
      );
      context.commit("setReportNewList", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async kmeans(context, { period_id }) {
    try {
      var searchParams = new URLSearchParams();
      if (period_id != null) {
        searchParams.append("period_id", period_id);
      }
      let response = await ApiService.post(
        "api/scholarship/scholarshipsubmissions/kmeans?" + searchParams
      );
      context.commit("setKmeansData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },
  async submitScholarship(context, { beasiswa_list }) {
    try {
      const payload = {
        beasiswa_list: beasiswa_list
      };

      let response = await ApiService.post(
        "api/scholarship/scholarshipsubmissions/submit-scholarship",
        payload
      );
      context.commit("setSubmitScholarshipList", response.data);
    } catch (error) {
      throw Error(error);
    }
  },
  async submitIpk(context, { ipk_list }) {
    try {
      const payload = {
        ipk_list: ipk_list
      };

      let response = await ApiService.post(
        "api/scholarship/scholarshipsubmissions/submitipk",
        payload
      );
      context.commit("setSubmitIpkList", response.data);
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
