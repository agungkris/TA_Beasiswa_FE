(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af71394"],{"8df5":function(e,t,a){"use strict";var i=a("c26a"),r=a.n(i);r.a},a9ca:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"},[a("span",{staticClass:"font-weight-bold font-size-3 text-dark-60"},[e._v(" Sudah memiliki Akun? ")]),a("router-link",{staticClass:"font-weight-bold font-size-3 ml-2 text-success",attrs:{to:{name:"login"}}},[e._v(" Masuk! ")])],1),a("div",{staticClass:"login-form login-signin"},[e._m(0),a("b-form",{ref:"usersData",staticClass:"usersData",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[a("b-form-group",{attrs:{id:"example-input-group-0",label:"","label-for":"example-input-0"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{id:"example-input-0",name:"example-input-0",state:e.validateState("name"),"aria-describedby":"input-0-live-feedback",placeholder:"Nama Lengkap"},model:{value:e.usersData.name,callback:function(t){e.$set(e.usersData,"name",t)},expression:"usersData.name"}}),a("b-form-invalid-feedback",{attrs:{id:"input-0-live-feedback"}},[e._v(" Nama lengkap Wajib diisi. ")])],1),a("b-form-group",{attrs:{id:"example-input-group-1",label:"","label-for":"example-input-1"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{id:"example-input-1",name:"example-input-1",state:e.validateState("username"),"aria-describedby":"input-1-live-feedback",placeholder:"NIM"},model:{value:e.usersData.username,callback:function(t){e.$set(e.usersData,"username",t)},expression:"usersData.username"}}),a("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(" NIK wajib diisi. ")])],1),a("b-form-group",{attrs:{id:"example-input-group-4",label:"","label-for":"example-input-4"}},[a("b-form-select",{attrs:{options:e.prodiList,"value-field":"id","text-field":"name"},model:{value:e.usersData.prodi,callback:function(t){e.$set(e.usersData,"prodi",t)},expression:"usersData.prodi"}}),a("b-form-invalid-feedback",{attrs:{id:"input-4-live-feedback"}},[e._v(" Program Studi wajib diisi. ")])],1),a("b-form-group",{attrs:{id:"example-input-group-5",label:"","label-for":"example-input-5"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{id:"example-input-5",name:"example-input-5",state:e.validateState("generation"),"aria-describedby":"input-5-live-feedback",placeholder:"Tahun Angkatan"},model:{value:e.usersData.generation,callback:function(t){e.$set(e.usersData,"generation",t)},expression:"usersData.generation"}}),a("b-form-invalid-feedback",{attrs:{id:"input-5-live-feedback"}},[e._v(" Tahun Angkatan wajib diisi. ")])],1),a("b-form-group",{attrs:{id:"example-input-group-2",label:"","label-for":"example-input-2"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{id:"example-input-2",name:"example-input-2",state:e.validateState("email"),"aria-describedby":"input-2-live-feedback",placeholder:"Email (Username)"},model:{value:e.usersData.email,callback:function(t){e.$set(e.usersData,"email",t)},expression:"usersData.email"}}),a("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[e._v(" Email wajib diisi dengan menggunakan format email. ")])],1),a("b-form-group",{attrs:{id:"example-input-group-3",label:"","label-for":"example-input-3"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{type:"password",id:"example-input-3",name:"example-input-3",state:e.validateState("password"),"aria-describedby":"input-3-live-feedback",placeholder:"Password"},model:{value:e.usersData.password,callback:function(t){e.$set(e.usersData,"password",t)},expression:"usersData.password"}}),a("b-form-invalid-feedback",{attrs:{id:"input-3-live-feedback"}},[e._v(" Password wajib diisi. ")])],1),a("div",{staticClass:"form-group d-flex flex-wrap flex-center"},[a("button",{ref:"kt_login_signup_submit",staticClass:"btn btn-outline-success font-weight-bold px-9 py-4 my-3 font-size-3 mx-4",attrs:{type:"submit"}},[e._v(" Daftar ")]),a("button",{staticClass:"btn btn-outline-secondary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4",on:{click:function(t){return e.$router.push("login")}}},[e._v(" Batal ")])])],1)],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-10 mb-lg-10"},[a("h3",{staticClass:"font-size-h1"},[e._v("DAFTAR")]),a("p",{staticClass:"text-muted font-weight-semi-bold"},[e._v(" Isi data di bawah ini untuk membuat Akun ")]),a("p",{staticClass:"text-muted font-weight-semi-bold"},[e._v(" PERINGATAN!! Pendaftaran Beasiswa Anda akan gagal apabila data dibawah ini tidak sesuai dengan semestinya. ")])])}],s=(a("96cf"),a("1da1")),n=a("5530"),o=a("2f62"),l=a("854b"),u=a("1dce"),d=a("b5ae"),p=a("0bce"),c={mixins:[u["validationMixin"]],name:"register",data:function(){return{form:{email:"",password:""}}},validations:{usersData:{name:{required:d["required"],minLength:Object(d["minLength"])(3)},username:{required:d["required"],minLength:Object(d["minLength"])(3)},prodi:{required:d["required"]},generation:{required:d["required"],minLength:Object(d["minLength"])(3)},email:{required:d["required"],email:d["email"]},password:{required:d["required"],minLength:Object(d["minLength"])(3)}}},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["b"])("users",["createUsers"])),Object(o["b"])("prodi",["getProdiList"])),{},{validate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.usersData.validate()||!e.$refs.profilesData.validate()){t.next=8;break}return t.next=3,e.createUsers({payload:e.usersData});case 3:return t.next=5,e.createProfiles({payload:e.profilesData});case 5:e.usersData={},e.profilesData={},e.$router.push({name:"Login"});case 8:case"end":return t.stop()}}),t)})))()},validateState:function(e){var t=this.$v.usersData[e],a=t.$dirty,i=t.$error;return a?!i:null},resetusersData:function(){var e=this;this.usersData={name:null,username:null,prodi:null,generation:null,email:null,password:null},this.$nextTick((function(){e.$v.$reset()}))},onSubmit:function(){var e=this;if(this.$v.usersData.$touch(),!this.$v.usersData.$anyError){this.$store.dispatch(l["b"]);var t=this.$refs["kt_login_signup_submit"];t.classList.add("spinner","spinner-light","spinner-right"),this.createUsers({payload:this.usersData}).then((function(){e.$router.push({name:"login"})})),t.classList.remove("spinner","spinner-light","spinner-right")}}}),computed:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["d"])({errors:function(e){return e.auth.errors}})),Object(o["d"])("users",["usersData"])),Object(o["d"])("prodi",["prodiList"])),Object(o["d"])("generations",["generationsList"])),mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch(p["a"],[{title:"Setting",route:"alert"},{title:e.title}]),t.next=3,e.getProdiList();case 3:case"end":return t.stop()}}),t)})))()}},m=c,b=(a("8df5"),a("2877")),f=Object(b["a"])(m,i,r,!1,null,"79a4c1f7",null);t["default"]=f.exports},c26a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6af71394.01d5bbe0.js.map