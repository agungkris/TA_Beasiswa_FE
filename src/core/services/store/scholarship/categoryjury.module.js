import ApiService from "../../api.service";
const state = {
  categoryJuryList: [],
  categoryJuryData: {}
};
const mutations = {
  setCategoryJuryList(state, payload) {
    state.categoryJuryList = payload;
  },
  setCategoryJuryData(state, payload) {
    state.categoryJuryData = payload;
  }
};
const actions = {
  async getCategoryJuryList(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshipcategoryjury"
      );
      context.commit("setCategoryJuryList", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createCategoryJury(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshipcategoryJury/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getCategoryJury(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/scholarshipcategoryJury/get/${id}`
      );
      context.commit("setCategoryJuryData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateCategoryJury(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/scholarshipcategoryJury/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteCategoryJury(context, { id }) {
    try {
      await ApiService.delete(
        `api/scholarship/scholarshipcategoryJury/delete/${id}`
      );
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const categoryJury = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default categoryJury;
