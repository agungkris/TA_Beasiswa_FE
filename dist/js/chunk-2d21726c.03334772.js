(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21726c"],{c603:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-md-6"},[e("v-card",{staticClass:"mb-6"},[e("v-card-title",[t._v("DATA MAHASISWA")]),e("v-card-text",[e("p",[t._v("Nama Mahasiswa : "+t._s(t.uploadscholarshipData.student.name))]),e("p",[t._v(" Program Studi : "+t._s(t.uploadscholarshipData.student.profile.prodi)+" ")]),e("p",[t._v(" Angkatan : "+t._s(t.uploadscholarshipData.student.profile.generation)+" ")])])],1),e("v-card",[e("v-card-title",[t._v("PENILAIAN JURI")]),e("v-card-text",[e("p",[t._v("PENILAIAN KARYA TULIS :"+t._s(t.paperassessmentReport.papers_score))]),e("p",[t._v("KOMENTAR JURI :"+t._s(t.paperassessmentReport.comment))]),e("p",[t._v("PENILAIAN FGD :"+t._s(t.fgdassessmentReport.final_score))])])],1)],1),e("div",{staticClass:"col-md-6"},[e("v-card",[e("v-card-title",[t._v("FILE MAHASISWA")]),e("v-card-text",[t._v(" FORMULIR BEASISWA : "),e("a",{attrs:{href:t.uploadscholarshipData.submit_form}},[t._v("DOWNLOAD")])]),e("v-card-text",[t._v(" BRS : "),e("a",{attrs:{href:t.uploadscholarshipData.brs}},[t._v("DOWNLOAD")])]),e("v-card-text",[t._v(" TRANSKRIP NILAI : "),e("a",{attrs:{href:t.uploadscholarshipData.raport}},[t._v("DOWNLOAD")])]),e("v-card-text",[t._v(" CURRICULUM VITAE : "),e("a",{attrs:{href:t.uploadscholarshipData.cv}},[t._v("DOWNLOAD")])]),e("v-card-text",[t._v(" KARYA TULIS : "),e("a",{attrs:{href:t.uploadscholarshipData.papers}},[t._v("DOWNLOAD")])]),e("v-card-text",[t._v(" BUKTI PRESTASI / SURAT PERMOHONAN REKTOR : "),e("a",{attrs:{href:t.uploadscholarshipData.other_requirement}},[t._v("DOWNLOAD")])])],1)],1),e("v-card-text",{staticClass:"text-center"},[e("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:function(a){return t.validate(1)}}},[t._v(" Mendapat Beasiswa ")]),e("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:function(a){return t.validate(0)}}},[t._v(" Gagal ")])],1)],1)},s=[],c=(e("96cf"),e("1da1")),o=e("5530"),n=e("0bce"),i=e("2f62"),p={data:function(){return{id:this.$route.params.id}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])("uploadscholarship",["uploadscholarshipData"])),Object(i["d"])("paperassessment",["paperassessmentReport"])),Object(i["d"])("fgdassessment",["fgdassessmentReport"])),components:{},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vuetify",route:"alerts"},{title:"Form Inputs & Control",route:"autocompletes"},{title:"Fileinptus"}]),this.onFetchData()},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["b"])("uploadscholarship",["getUploadScholarship","FinalStage"])),Object(i["b"])("paperassessment",["report"])),Object(i["b"])("fgdassessment",["reportFgd"])),{},{onFetchData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getUploadScholarship({id:t.id});case 2:return a.next=4,t.report({student_id:t.uploadscholarshipData.student_id,period_id:t.$route.params.period});case 4:return a.next=6,t.reportFgd({student_id:t.uploadscholarshipData.student_id,period_id:t.$route.params.period});case 6:case"end":return a.stop()}}),a)})))()},validate:function(t){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.FinalStage({id:a.id,final_stage:t});case 2:a.uploadscholarshipData={},a.$router.push({name:"StudentsList"});case 4:case"end":return e.stop()}}),e)})))()}})},d=p,l=e("2877"),u=e("6544"),h=e.n(u),v=e("8336"),_=e("b0af"),m=e("99d9"),f=Object(l["a"])(d,r,s,!1,null,null,null);a["default"]=f.exports;h()(f,{VBtn:v["a"],VCard:_["a"],VCardText:m["b"],VCardTitle:m["c"]})}}]);
//# sourceMappingURL=chunk-2d21726c.03334772.js.map