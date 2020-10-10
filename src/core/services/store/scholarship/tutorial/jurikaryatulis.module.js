import ApiService from "../../../api.service";
const state = {
  jurikaryatulisList: [],
  jurikaryatulisData: {}
};
const mutations = {
  setJuriKaryaTulisList(state, payload) {
    state.jurikaryatulisList = payload;
  },
  setJuriKaryaTulisData(state, payload) {
    state.jurikaryatulisData = payload;
  }
};
const actions = {
  async getJuriKaryaTulisList(context) {
    try {
      let response = await ApiService.query(
        "api/scholarship/scholarshiptutorial"
      );
      context.commit("setJuriKaryaTulisData", response.data);
    } catch (error) {
      throw error;
    }
  },
  async createJuriKaryaTulis(context, { payload }) {
    try {
      await ApiService.post(
        "api/scholarship/scholarshiptutorial/create",
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async getJuriKaryaTulis(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/scholarship/jurikaryatulis/get/${id}`
      );
      context.commit("setJuriKaryaTulisData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateJuriKaryaTulis(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/scholarship/jurikaryatulis/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteJuriKaryaTulis(context, { id }) {
    try {
      await ApiService.delete(`api/scholarship/jurikaryatulis/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const jurikaryatulis = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default jurikaryatulis;
