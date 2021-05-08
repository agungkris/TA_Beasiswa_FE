import Vue from "vue";
import Router from "vue-router";
import store from "./core/services/store";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },

        {
          path: "/scholarship-announcement",
          name: "ScholarshipAnnouncement",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "announcement",
              name: "AnnouncementList",
              component: () =>
                import("@/view/pages/admin/announcement/AnnouncementList.vue")
            },
            {
              path: "announcement/create",
              name: "AnnouncementCreate",
              component: () =>
                import("@/view/pages/admin/announcement/AnnouncementCreate.vue")
            },
            {
              path: "announcement/edit/:id",
              name: "AnnouncementEdit",
              component: () =>
                import("@/view/pages/admin/announcement/AnnouncementEdit.vue")
            }
          ]
        },
        {
          path: "/scholarship-requirement",
          name: "ScholarshipRequirement",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "term-condition",
              name: "TermConditionList",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/termCondition/TermConditionList.vue"
                )
            },
            {
              path: "term-condition/create",
              name: "TermConditionCreate",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/termCondition/TermConditionCreate.vue"
                )
            },
            {
              path: "term-condition/edit",
              name: "TermConditionEdit",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/termCondition/TermConditionEdit.vue"
                )
            },

            {
              path: "scholarship-form",
              name: "ScholarshipFormList",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/scholarshipForm/ScholarshipFormList.vue"
                )
            },
            {
              path: "scholarship-form/create",
              name: "ScholarshipFormCreate",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/scholarshipForm/ScholarshipFormCreate.vue"
                )
            },
            {
              path: "scholarship-form/edit",
              name: "ScholarshipFormEdit",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/scholarshipForm/ScholarshipFormEdit.vue"
                )
            },

            {
              path: "templete-cv",
              name: "TempleteCVList",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/templeteCV/TempleteCVList.vue"
                )
            },
            {
              path: "templete-cv/create",
              name: "TempleteCVCreate",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/templeteCV/TempleteCVCreate.vue"
                )
            },
            {
              path: "templete-cv/edit",
              name: "TempleteCVEdit",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipRequirement/templeteCV/TempleteCVEdit.vue"
                )
            }
          ]
        },

        {
          path: "/users",
          name: "Users",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "jury",
              name: "JuryList",
              component: () =>
                import("@/view/pages/admin/users/jury/JuryList.vue")
            },
            {
              path: "jury/create",
              name: "JuryCreate",
              component: () =>
                import("@/view/pages/admin/users/jury/JuryCreate.vue")
            },
            {
              path: "jury/edit/:id",
              name: "JuryEdit",
              component: () =>
                import("@/view/pages/admin/users/jury/JuryEdit.vue")
            },
            {
              path: "jurypaper/create/:id",
              name: "JuryPaperCreate",
              component: () =>
                import("@/view/pages/admin/users/jury/JuryPaperCreate.vue")
            },
            {
              path: "jury/detail/:id",
              name: "JuryDetail",
              component: () =>
                import("@/view/pages/admin/users/jury/JuryDetail.vue")
            },

            {
              path: "students",
              name: "StudentsList",
              component: () =>
                import("@/view/pages/admin/users/students/StudentsList.vue")
            },
            {
              path: "students/create",
              name: "StudentsCreate",
              component: () =>
                import("@/view/pages/admin/users/students/StudentsCreate.vue")
            },
            {
              path: "students/edit/:id/period/:period",
              name: "StudentsEdit",
              component: () =>
                import("@/view/pages/admin/users/students/StudentsEdit.vue")
            },
            {
              path: "students/fgd/:id/period/:period",
              name: "StudentsFgd",
              component: () =>
                import("@/view/pages/admin/users/students/StudentsFgd.vue")
            },
            {
              path: "students/akun",
              name: "StudentsAkun",
              component: () =>
                import("@/view/pages/admin/users/students/StudentsAkun.vue")
            },
            {
              path: "students/akun/edit/:id",
              name: "StudentsAkunEdit",
              component: () =>
                import("@/view/pages/admin/users/students/StudentsAkunEdit.vue")
            },

            {
              path: "selection/fgd",
              name: "SelectionFgd",
              component: () =>
                import("@/view/pages/admin/selections/FgdSelection.vue")
            },
            {
              path: "selection/ipk",
              name: "SelectionIpk",
              component: () =>
                import("@/view/pages/admin/selections/IpkSelection.vue")
            },
            {
              path: "selection/administration",
              name: "SelectionAdministration",
              component: () =>
                import(
                  "@/view/pages/admin/selections/AdministrationSelection.vue"
                )
            }
          ]
        },

        {
          path: "/scholarship-reports",
          name: "ScholarshipReports",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "pembangunan-jaya-scholarship",
              name: "PembangunanJayaScholarshipList",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipReports/pembangunanJayaScholarship/PembangunanJayaScholarshipList.vue"
                )
            },
            {
              path: "others-scholarship",
              name: "OthersScholarshipList",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipReports/othersScholarship/OthersScholarshipList.vue"
                )
            },
            {
              path: "others-scholarship-report/:id",
              name: "OthersScholarshipReport",
              component: () =>
                import(
                  "@/view/pages/admin/scholarshipReports/othersScholarship/OthersScholarshipReport.vue"
                )
            }
          ]
        },

        {
          path: "/master-data",
          name: "MasterData",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "groups",
              name: "GroupsList",
              component: () =>
                import("@/view/pages/admin/masterData/groups/GroupsList.vue")
            },
            {
              path: "groups/create",
              name: "GroupsCreate",
              component: () =>
                import("@/view/pages/admin/masterData/groups/GroupsCreate.vue")
            },
            {
              path: "groups/edit/:id",
              name: "GroupsEdit",
              component: () =>
                import("@/view/pages/admin/masterData/groups/GroupsEdit.vue")
            },
            {
              path: "groups/detail/:id",
              name: "GroupsDetail",
              component: () =>
                import("@/view/pages/admin/masterData/groups/GroupsDetail.vue")
            },
            {
              path: "periods",
              name: "PeriodsList",
              component: () =>
                import("@/view/pages/admin/masterData/periods/PeriodsList.vue")
            },
            {
              path: "periods/create",
              name: "PeriodsCreate",
              component: () =>
                import(
                  "@/view/pages/admin/masterData/periods/PeriodsCreate.vue"
                )
            },
            {
              path: "periods/edit/:id",
              name: "PeriodsEdit",
              component: () =>
                import("@/view/pages/admin/masterData/periods/PeriodsEdit.vue")
            }
          ]
        },
        // AKHIR ADMIN

        // AWAL JURI
        {
          path: "/fgd-assessment",
          name: "FgdAssessment",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "fgd-assessment/list",
              name: "FgdAssessmentList",
              component: () =>
                import("@/view/pages/juri/fgdAssessment/FgdAssessmentList.vue")
            },
            {
              path: "fgd-assessment/edit/:student_id/period/:period",
              name: "FgdAssessmentEdit",
              component: () =>
                import("@/view/pages/juri/fgdAssessment/FgdAssessmentEdit.vue")
            },
            {
              path: "fgd-assessment/detail/:id/period/:period",
              name: "FgdAssessmentDetail",
              component: () =>
                import(
                  "@/view/pages/juri/fgdAssessment/FgdAssessmentDetail.vue"
                )
            }
          ]
        },
        {
          path: "/paper-assessment",
          name: "PaperAssessment",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "paper-assessment/list",
              name: "PaperAssessmentList",
              component: () =>
                import(
                  "@/view/pages/juri/paperAssessment/PaperAssessmentList.vue"
                )
            },
            {
              path: "paper-assessment/create/:id/period/:period",
              name: "PaperAssessmentCreate",
              component: () =>
                import(
                  "@/view/pages/juri/paperAssessment/PaperAssessmentCreate.vue"
                )
            }
          ]
        },
        // AKHIR JURI

        // AWAL MAHASISWA
        // belom diedit
        {
          path: "/scholarship-requirement-students",
          name: "ScholarshipRequirementStudents",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "term-condition-students",
              name: "TermConditionStudentsList",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/scholarshipRequirementStudents/termCondition/TermConditionList.vue"
                )
            },

            {
              path: "scholarship-form-students",
              name: "ScholarshipFormStudentsList",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/scholarshipRequirementStudents/scholarshipForm/ScholarshipFormList.vue"
                )
            },

            {
              path: "templete-cv-students",
              name: "TempleteCVStudentsList",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/scholarshipRequirementStudents/templeteCV/TempleteCVList.vue"
                )
            }
          ]
        },

        {
          path: "/upload-scholarship-requirement",
          name: "UploadScholarshipRequirement",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "upload-scholarship-requirement/list",
              name: "UploadScholarshipRequirementList",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/uploadScholarshipRequirement/UploadScholarshipRequirementList.vue"
                )
            },
            {
              path: "upload-scholarship-requirement/edit",
              name: "UploadScholarshipRequirementEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/uploadScholarshipRequirement/UploadScholarshipRequirementEdit.vue"
                )
            }
          ]
        },

        {
          path: "/another-scholarship-requirement",
          name: "AnotherScholarshipRequirement",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "another-scholarship-requirement/list",
              name: "AnotherScholarshipRequirementList",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/UploadAnotherScholarshipRequirementList.vue"
                )
            },

            {
              path: "academic/create",
              name: "AcademicCreate",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/AcademicCreate.vue"
                )
            },
            {
              path: "academic/edit/:id",
              name: "AcademicEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/AcademicEdit.vue"
                )
            },

            {
              path: "competition/create",
              name: "CompetitionCreate",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/CompetitionCreate.vue"
                )
            },
            {
              path: "competition/edit/:id",
              name: "CompetitionEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/CompetitionEdit.vue"
                )
            },

            {
              path: "event/create",
              name: "EventCreate",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/EventCreate.vue"
                )
            },
            {
              path: "event/edit/:id",
              name: "EventEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/EventEdit.vue"
                )
            },

            {
              path: "organization/create",
              name: "OrganizationCreate",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/OrganizationCreate.vue"
                )
            },
            {
              path: "organization/edit/:id",
              name: "OrganizationEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/OrganizationEdit.vue"
                )
            },

            {
              path: "paper/create",
              name: "PaperCreate",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/PaperCreate.vue"
                )
            },
            {
              path: "paper/edit/:id",
              name: "PaperEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/PaperEdit.vue"
                )
            },

            {
              path: "financial/create",
              name: "FinancialCreate",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/FinancialCreate.vue"
                )
            },
            {
              path: "financial/edit/:id",
              name: "FinancialEdit",
              component: () =>
                import(
                  "@/view/pages/mahasiswa/anotherScholarshipRequirement/FinancialEdit.vue"
                )
            }
          ]
        },
        // AKHIR MAHASISWA

        {
          path: "/profile",
          name: "Profile",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "profile/edit",
              name: "ProfileEdit",
              component: () => import("@/view/pages/Profile.vue")
            }
          ]
        },

        {
          path: "/wizard",
          name: "wizard",
          component: () => import("@/view/pages/wizard/Wizard.vue"),
          children: [
            {
              path: "wizard-1",
              name: "wizard-1",
              component: () => import("@/view/pages/wizard/Wizard-1.vue")
            },
            {
              path: "wizard-2",
              name: "wizard-2",
              component: () => import("@/view/pages/wizard/Wizard-2.vue")
            },
            {
              path: "wizard-3",
              name: "wizard-3",
              component: () => import("@/view/pages/wizard/Wizard-3.vue")
            },
            {
              path: "wizard-4",
              name: "wizard-4",
              component: () => import("@/view/pages/wizard/Wizard-4.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("@/view/pages/error/Error-2.vue")
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("@/view/pages/error/Error-3.vue")
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("@/view/pages/error/Error-4.vue")
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("@/view/pages/error/Error-5.vue")
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("@/view/pages/error/Error-6.vue")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/Auth"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login"),
          beforeEnter: (to, from, next) => {
            if (store.state.auth.isAuthenticated) {
              next("/dashboard");
            } else {
              next();
            }
          }
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/Register")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
