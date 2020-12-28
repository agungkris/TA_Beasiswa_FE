import ApiService from "../../../api.service";
const state = {
  financialList: [],
  financialData: {}
};
const mutations = {
  setFinancialList(state, payload) {
    state.financialList = payload;
  },
  setFinancialData(state, payload) {
    state.financialData = payload;
  }
};
const actions = {
  async getFinancialList(context, {student_id}) {
    try {
      var searchParams = new URLSearchParams();

      if (student_id != null) {
        searchParams.append("student_id", student_id);
      }
      let response = await ApiService.query(
        `api/scholarship/financialreport?` + searchParams
      );
      context.commit("setFinancialList", response.data);
      } catch (error) {
        throw error;
      }
  },
  async createFinancial(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/financialreport/create",
        payload
      );
      context.commit("setFinancialData", {});
    } catch (error) {
      throw Error(error);
    }
  },
  async getFinancial(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/financialreport/get/${id}`
      );
      context.commit("setFinancialData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateFinancial(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/financialreport/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteFinancial(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/financialreport/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const financial = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default financial;
