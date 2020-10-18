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

import tutoriallaporanbeasiswa from "./scholarship/tutorial/laporanbeasiswa.module";
import tutorialakunmahasiswa from "./scholarship/tutorial/akunmahasiswa.module";
import tutorialakunjuri from "./scholarship/tutorial/akunjuri.module";
import tutorialgrupfgd from "./scholarship/tutorial/grupfgd.module";
import tutorialpemberitahuanadmin from "./scholarship/tutorial/pemberitahuanadmin.module";
import tutorialperiode from "./scholarship/tutorial/periode.module";
import tutorialseleksibeasiswa from "./scholarship/tutorial/seleksibeasiswa.module";
import tutorialketentuanbeasiswaadmin from "./scholarship/tutorial/ketentuanbeasiswaadmin.module";
import tutorialjurifgd from "./scholarship/tutorial/jurifgd.module";
import tutorialjurikaryatulis from "./scholarship/tutorial/jurikaryatulis.module";
import tutorialpemberitahuanmahasiswa from "./scholarship/tutorial/pemberitahuanmahasiswa.module";
import tutorialketentuanbeasiswamahasiswa from "./scholarship/tutorial/ketentuanbeasiswamahasiswa.module";
import tutorialpengumpulandokumenmahasiswa from "./scholarship/tutorial/pengumpulandokumenmahasiswa.module";

import semester from "./scholarship/anotherscholarship/semester.module";
import academic from "./scholarship/anotherscholarship/academic.module";
import competition from "./scholarship/anotherscholarship/competition.module";
import event from "./scholarship/anotherscholarship/event.module";
import organization from "./scholarship/anotherscholarship/organization.module";
import paper from "./scholarship/anotherscholarship/paper.module";
import financial from "./scholarship/anotherscholarship/financial.module";

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
    paperjury,

    tutoriallaporanbeasiswa,
    tutorialakunmahasiswa,
    tutorialakunjuri,
    tutorialgrupfgd,
    tutorialpemberitahuanadmin,
    tutorialperiode,
    tutorialseleksibeasiswa,
    tutorialketentuanbeasiswaadmin,
    tutorialjurifgd,
    tutorialjurikaryatulis,
    tutorialpemberitahuanmahasiswa,
    tutorialketentuanbeasiswamahasiswa,
    tutorialpengumpulandokumenmahasiswa,

    semester,
    academic,
    competition,
    event,
    organization,
    paper,
    financial
    //#endregion
  }
});
