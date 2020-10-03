import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";

import period from "./settings/period.module";
import group from "./settings/group.module";
import termcondition from "./scholarship/termcondition.module";
import scholarshipform from "./scholarship/scholarshipform.module";
import createjury from "./scholarship/createjury.module";
import uploadscholarship from "./scholarship/uploadscholarship.module";
import cvtemplete from "./scholarship/cvtemplete.module";
import users from "./scholarship/users.module";
import announcement from "./scholarship/announcement.module";
import groupmember from "./settings/groupmember.module";
import paperassessment from "./scholarship/paperassessment.module";
import fgdassessment from "./scholarship/fgdassessment.module";
import categoryjury from "./scholarship/categoryjury.module";
import paperjury from "./scholarship/paperjury.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    //#region setting / master data
    period,
    group,
    termcondition,
    scholarshipform,
    createjury,
    uploadscholarship,
    cvtemplete,
    users,
    announcement,
    groupmember,
    paperassessment,
    fgdassessment,
    categoryjury,
    paperjury
    //#endregion
  }
});
