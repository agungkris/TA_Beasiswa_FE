(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db301"],{"6f94":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("KTCodePreview",{attrs:{title:"Buat Akun Juri"},scopedSlots:e._u([{key:"preview",fn:function(){return[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,label:"Nama Lengkap",required:""},model:{value:e.createjuryData.name,callback:function(a){e.$set(e.createjuryData,"name",a)},expression:"createjuryData.name"}}),t("v-text-field",{attrs:{rules:e.usernameRules,label:"NIDN",required:""},model:{value:e.createjuryData.username,callback:function(a){e.$set(e.createjuryData,"username",a)},expression:"createjuryData.username"}}),t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.createjuryData.email,callback:function(a){e.$set(e.createjuryData,"email",a)},expression:"createjuryData.email"}}),t("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",required:""},model:{value:e.createjuryData.password,callback:function(a){e.$set(e.createjuryData,"password",a)},expression:"createjuryData.password"}}),t("v-container",{attrs:{fluid:""}},[t("v-checkbox",{attrs:{label:"Juri Karya Tulis"},model:{value:e.createjuryData.karya_tulis,callback:function(a){e.$set(e.createjuryData,"karya_tulis",a)},expression:"createjuryData.karya_tulis"}}),t("v-checkbox",{attrs:{label:"Juri FGD"},model:{value:e.createjuryData.fgd,callback:function(a){e.$set(e.createjuryData,"fgd",a)},expression:"createjuryData.fgd"}})],1),t("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Confirm ")]),t("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" Reset Form ")])],1)]},proxy:!0}])})],1)])])},s=[],u=(t("96cf"),t("1da1")),i=t("5530"),l=t("d968"),n=t("0bce"),c=t("2f62"),o={data:function(){return{karyatulis:!1,fgd:!1,createjuryData:{valid:!1,name:"",nameRules:[function(e){return!!e||"Name is required"}],username:"",usernameRules:[function(e){return!!e||"NIK is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],password:"",passwordRules:[function(e){return!!e||"Password is required"}]}}},computed:Object(i["a"])({},Object(c["d"])("createjury",["createjuryData"])),components:{KTCodePreview:l["a"]},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vuetify",route:"alerts"},{title:"Form Inputs & Control",route:"autocompletes"},{title:"Fileinptus"}])},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("createjury",["createCreateJury"])),{},{validate:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.$refs.form.validate()){a.next=7;break}return e.snackbar=!0,e.createjuryData.level="juri",a.next=5,e.createCreateJury({payload:e.createjuryData});case 5:e.createjuryData={},e.$router.push({name:"JuryList"});case 7:case"end":return a.stop()}}),a)})))()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}})},d=o,m=t("2877"),f=t("6544"),v=t.n(f),y=t("8336"),b=t("ac7c"),p=t("a523"),j=t("4bd4"),k=t("8654"),D=Object(m["a"])(d,r,s,!1,null,null,null);a["default"]=D.exports;v()(D,{VBtn:y["a"],VCheckbox:b["a"],VContainer:p["a"],VForm:j["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0db301.0dfd965f.js.map