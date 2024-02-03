import{Z as V}from"./zipcodes-YNp0Njm-.js";import{S as v}from"./sweetalert2.all-6m_Z_jZk.js";import{g as S,_ as E,h as R,c as i,a as s,F as g,f,n,b as o,w as y,r as w,o as r,e as C,i as k,j as B,p as N,d as z,t as D}from"./index-hEfUj-0E.js";const F="https://hexschool-freyja.onrender.com/api/v1/";S("phone",l=>/^09\d{8}$/i.test(l));S("password",l=>/^(?=.*[A-Za-z]).*$/.test(l));const q={data(){return{userStep:1,registerData:{email:"",password:"",confirmPassword:"",name:"",phone:"",birthday:"",isCheckRule:!1},organizedData:{},cityArray:[],addressSelected:{city:"",county:"",zipcode:"",detail:""},dayRange:0,birthday:{year:"",month:"",day:""}}},computed:{countyArray(){var l;return this.addressSelected.city?((l=this.organizedData[this.addressSelected.city])==null?void 0:l.countyList)||[]:[]}},watch:{"addressSelected.county":{handler(l){console.log("countyArray",this.countyArray),console.log("newValue",l);let e=this.countyArray.filter(p=>(console.log("item",p),p.countyName==l.countyName));console.log("array",e),e.length>0&&(this.addressSelected.zipcode=e[0].ZipCode,console.log("this.addressSelected.zipcode",this.addressSelected.zipcode))},immediate:!0},"birthday.year":{handler:"handleBirthdayChange",immediate:!0},"birthday.month":{handler:"handleBirthdayChange",immediate:!0},"birthday.day":{handler:"handleBirthdayChange",immediate:!0}},methods:{changeStep(l){this.$refs.step1Form&&this.$refs.step1Form.validate().then(e=>{if(e.valid){let p={"Content-Type":"application/json",Accept:"application/json"},c={email:this.registerData.email};this.axios.post(`${F}verify/email`,c,{headers:p}).then(a=>{a.data.status?a.data.result.isEmailExists?v.fire({icon:"error",iconColor:"#dc3545",title:"此信箱已註冊過",showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}}):this.userStep=l:v.fire({icon:"error",iconColor:"#dc3545",title:a.data.message,showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}})}).catch(a=>{console.log("err",a),v.fire({icon:"error",iconColor:"#C22538",title:a.response.data.message,showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}})})}})},saveRegisterData(){if(this.$refs.step2Form){let l={"Content-Type":"application/json",Accept:"application/json"},e={name:this.registerData.name,email:this.registerData.email,password:this.registerData.password,phone:this.registerData.phone,birthday:this.registerData.birthday,address:{zipcode:Number(this.addressSelected.zipcode),detail:this.addressSelected.detail}};console.log("---data",e),this.$refs.step2Form.validate().then(p=>{p.valid&&this.axios.post(`${F}user/signup`,e,{headers:l}).then(c=>{c.data.status?(console.log("res",c),console.log("res",JSON.stringify(c.data)),v.fire({icon:"success",iconColor:"#299F65",title:"註冊成功!",showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}}),this.$router.push({name:"login"})):(v.fire({icon:"error",iconColor:"#dc3545",title:c.data.message,showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}}),this.userStep=1)}).catch(c=>{console.log("err",c),v.fire({icon:"error",iconColor:"#C22538",title:c.response.data.message,showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}})})})}},isLeapYear(l){return l%4===0&&l%100!==0||l%400===0},updateDayRange(l,e){const p=[1,3,5,7,8,10,12];this.dayRange=e===2?this.isLeapYear(l)?29:28:p.includes(e)?31:30},handleBirthdayChange(l){this.updateDayRange(this.birthday.year,l);const e=new Date(Number(this.birthday.year),Number(this.birthday.month)-1,Number(this.birthday.day));this.registerData.birthday=e.toISOString(),console.log("this.registerData.birthday",this.registerData.birthday)},handleAddressSelect(){V.forEach(l=>{const{city:e,county:p,zipcode:c}=l;this.organizedData[e]||(this.organizedData[e]={CityName:e,countyList:[]}),this.organizedData[e].countyList.push({ZipCode:String(c),countyName:p})}),this.cityArray=Object.keys(this.organizedData),console.log("123",Object.values(this.organizedData)[0]),console.log(" this.cityArray",this.cityArray)},updateValue(){this.registerData.isCheckRule=!this.registerData.isCheckRule.toString(),console.log("this.registerData.isCheckRule",this.registerData.isCheckRule,typeof this.registerData.isCheckRule)}},mounted(){this.handleAddressSelect()}},u=l=>(N("data-v-e4f70209"),l=l(),z(),l),U=u(()=>s("span",{class:"text-primary"},"享樂酒店，誠摯歡迎",-1)),j=u(()=>s("h1",{class:"mb-7"},"立即註冊",-1)),P={class:"row g-1 stepper mb-7"},L={class:"col-auto d-flex"},I={class:"d-flex flex-column align-items-center"},O={class:"dot rounded-circle bg-primary d-flex align-items-center justify-content-center mb-1"},Z={key:1,class:"material-icons"},Y=u(()=>s("p",null,"輸入信箱及密碼",-1)),M=u(()=>s("div",{class:"col d-flex align-items-center"},[s("p",{class:"border-bottom border-gray w-100"})],-1)),T={class:"col-auto d-flex justify-content-end"},J=u(()=>s("p",null,"填寫基本資料",-1)),W={key:0,class:"row flex-column"},G={class:"col mb-3"},H={class:"form-label",for:"email"},K={class:"col mb-3"},Q={class:"form-label",for:"password"},X={class:"col mb-3"},$={class:"form-label",for:"confirmPassword"},ee={class:"col mt-3"},se={class:"col mb-3"},te=u(()=>s("span",{class:"pointer me-2"},"已經有會員了嗎?",-1)),ae={key:0,class:"row flex-column"},le={class:"col mb-3"},oe={class:"form-label",for:"name"},ie={class:"col mb-3"},re={class:"form-label",for:"phone"},de={class:"col mb-3"},ne={class:"form-label",for:"birthday",label:"生日"},ue={class:"row g-2"},ce={class:"col-md-4"},me=u(()=>s("option",{value:"",selected:""},"請選擇",-1)),he=["value"],pe={class:"col-md-4"},fe=u(()=>s("option",{value:"",selected:""},"請選擇",-1)),ye=["value"],be={class:"col-md-4"},_e=u(()=>s("option",{value:"",selected:""},"請選擇",-1)),ge=["value"],Ce={class:"col-md-12 d-flex flex-row"},ve={class:"col mb-3"},Be={class:"form-label",for:"address",label:"地址"},De={class:"row g-2"},we={class:"col-md-6"},Ae=u(()=>s("option",{value:"",selected:""},"請選擇",-1)),xe=["value"],ke={class:"col-md-6"},Fe=u(()=>s("option",{value:"",selected:""},"請選擇",-1)),Se=["value"],Ve={class:"col-md-12"},Ee={class:"col mb-3"},Re={class:"form-check"},Ne=u(()=>s("label",{class:"form-check-label",for:"pravicy"}," 我已閱讀並同意本網站個資使用規範",-1)),ze={class:"col mt-3"},qe={class:"col mb-3"},Ue=u(()=>s("span",{class:"pointer me-2"},"已經有會員了嗎?",-1));function je(l,e,p,c,a,b){const m=w("v-field"),h=w("ErrorMessage"),A=w("router-link"),x=w("v-form"),_=R("required");return r(),i(g,null,[U,j,s("div",P,[s("div",L,[s("div",I,[s("p",O,[a.userStep===1?(r(),i(g,{key:0},[f("1")],64)):(r(),i("span",Z," done "))]),Y])]),M,s("div",T,[s("div",{class:n(["d-flex flex-column align-items-center text-gray",{" text-white":a.userStep===2}])},[s("p",{class:n(["dot rounded-circle border border-gray bg-outline-gray d-flex align-items-center justify-content-center mb-1",{"bg-primary ":a.userStep===2}])}," 2 ",2),J],2)])]),o(x,{ref:"step1Form",onSubmit:b.changeStep},{default:y(({errors:d})=>[a.userStep===1?(r(),i("div",W,[s("div",G,[C((r(),i("label",H,[f("電子信箱")])),[[_,!0]]),o(m,{name:"email",id:"email",type:"email",class:n(["form-control",{"is-invalid":d.email}]),label:"帳號",placeholder:"hello@exsample.com",modelValue:a.registerData.email,"onUpdate:modelValue":e[0]||(e[0]=t=>a.registerData.email=t),rules:"required"},null,8,["class","modelValue"]),o(h,{name:"email",class:"invalid-feedback"})]),s("div",K,[C((r(),i("label",Q,[f("密碼")])),[[_,!0]]),o(m,{name:"password",label:"密碼",type:"password",class:n(["form-control",{"is-invalid":d.password}]),id:"password",placeholder:"請輸入密碼",modelValue:a.registerData.password,"onUpdate:modelValue":e[1]||(e[1]=t=>a.registerData.password=t),rules:"required|min:8|password"},null,8,["class","modelValue"]),o(h,{name:"password",class:"invalid-feedback"})]),s("div",X,[C((r(),i("label",$,[f("確認密碼")])),[[_,!0]]),o(m,{name:"confirmPassword",label:"確認密碼",type:"password",class:n(["form-control",{"is-invalid":d.confirmPassword}]),id:"confirmPassword",placeholder:"請再輸入一次密碼",modelValue:a.registerData.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=t=>a.registerData.confirmPassword=t),rules:"required|confirmed:@password"},null,8,["class","modelValue"]),o(h,{name:"confirmPassword",class:"invalid-feedback"})]),s("div",ee,[s("button",{type:"button",class:"btn py-3 btn-white w-100 site_button text-gray",onClick:e[3]||(e[3]=t=>b.changeStep(2))}," 下一步 ")]),s("div",se,[te,o(A,{to:{name:"login"},role:"button",class:"btn text-decoration-underline text-primary pointer"},{default:y(()=>[f("立即登入")]),_:1})])])):k("",!0)]),_:1},8,["onSubmit"]),o(x,{ref:"step2Form",onSubmit:e[14]||(e[14]=d=>b.saveRegisterData())},{default:y(({errors:d})=>[a.userStep===2?(r(),i("div",ae,[s("div",le,[C((r(),i("label",oe,[f("姓名")])),[[_,!0]]),o(m,{name:"name",label:"姓名",type:"text",class:n(["form-control",{"is-invalid":d.name}]),id:"name",placeholder:"輸入姓名",modelValue:a.registerData.name,"onUpdate:modelValue":e[4]||(e[4]=t=>a.registerData.name=t),rules:"required"},null,8,["class","modelValue"]),o(h,{name:"name",class:"invalid-feedback"})]),s("div",ie,[C((r(),i("label",re,[f("手機號碼")])),[[_,!0]]),o(m,{name:"phone",label:"手機號碼",type:"text",class:n(["form-control",{"is-invalid":d.phone}]),id:"phone",placeholder:"請輸入手機號碼",modelValue:a.registerData.phone,"onUpdate:modelValue":e[5]||(e[5]=t=>a.registerData.phone=t),rules:"required|phone"},null,8,["class","modelValue"]),o(h,{name:"phone",class:"invalid-feedback"})]),s("div",de,[C((r(),i("label",ne,[f("生日")])),[[_,!0]]),s("div",ue,[s("div",ce,[o(m,{name:"year",as:"select",label:"年",id:"birthday",class:n(["form-select",{"is-invalid":d.year}]),rules:"required",modelValue:a.birthday.year,"onUpdate:modelValue":e[6]||(e[6]=t=>a.birthday.year=t)},{default:y(()=>[me,(r(),i(g,null,B(100,t=>s("option",{key:t,value:new Date().getFullYear()-(100-t)},D(new Date().getFullYear()-(100-t))+" 年 ",9,he)),64))]),_:2},1032,["class","modelValue"])]),s("div",pe,[o(m,{name:"month",as:"select",label:"月",id:"birthday",class:n(["form-select",{"is-invalid":d.month}]),rules:"required",modelValue:a.birthday.month,"onUpdate:modelValue":e[7]||(e[7]=t=>a.birthday.month=t)},{default:y(()=>[fe,(r(),i(g,null,B(12,t=>s("option",{key:t,value:t},D(t)+" 月",9,ye)),64))]),_:2},1032,["class","modelValue"])]),s("div",be,[o(m,{name:"day",as:"select",label:"日",id:"birthday",class:n(["form-select",{"is-invalid":d.day}]),rules:"required",modelValue:a.birthday.day,"onUpdate:modelValue":e[8]||(e[8]=t=>a.birthday.day=t)},{default:y(()=>[_e,(r(!0),i(g,null,B(a.dayRange,t=>(r(),i("option",{key:t,value:t},D(t)+" 日",9,ge))),128))]),_:2},1032,["class","modelValue"])]),s("div",Ce,[o(h,{name:"year",class:"invalid-feedback"}),o(h,{name:"month",class:"invalid-feedback"}),o(h,{name:"day",class:"invalid-feedback"})])])]),s("div",ve,[C((r(),i("label",Be,[f("地址")])),[[_,!0]]),s("div",De,[s("div",we,[o(m,{name:"city",as:"select",label:"縣市",id:"address",class:n(["form-select",{"is-invalid":d.city}]),modelValue:a.addressSelected.city,"onUpdate:modelValue":e[9]||(e[9]=t=>a.addressSelected.city=t),rules:"required"},{default:y(()=>[Ae,(r(!0),i(g,null,B(a.cityArray,t=>(r(),i("option",{key:t,value:t},D(t),9,xe))),128))]),_:2},1032,["class","modelValue"])]),s("div",ke,[o(m,{name:"county",as:"select",label:"鄉鎮區",id:"address",class:n(["form-select",{"is-invalid":d.county}]),modelValue:a.addressSelected.county,"onUpdate:modelValue":e[10]||(e[10]=t=>a.addressSelected.county=t),rules:"required"},{default:y(()=>[Fe,(r(!0),i(g,null,B(b.countyArray,t=>(r(),i("option",{key:t.countyName,value:t},D(t.countyName),9,Se))),128))]),_:2},1032,["class","modelValue"])]),s("div",Ve,[o(m,{name:"detail",type:"text",label:"詳細地址",class:n(["form-control",{"is-invalid":d.detail}]),id:"address",placeholder:"請輸入詳細地址",modelValue:a.addressSelected.detail,"onUpdate:modelValue":e[11]||(e[11]=t=>a.addressSelected.detail=t),rules:"required"},null,8,["class","modelValue"]),o(h,{name:"city",class:"invalid-feedback"}),o(h,{name:"county",class:"invalid-feedback"}),o(h,{name:"detail",class:"invalid-feedback"})])])]),s("div",Ee,[s("div",Re,[Ne,o(m,{name:"isCheckRule",label:"個資使用規範",class:n([{"is-invalid":d.isCheckRule},"form-check-input"]),type:"checkbox",rules:"required",id:"pravicy",onClick:b.updateValue,modelValue:a.registerData.isCheckRule,"onUpdate:modelValue":e[12]||(e[12]=t=>a.registerData.isCheckRule=t),value:"true"},null,8,["class","onClick","modelValue"]),o(h,{name:"isCheckRule",class:"invalid-feedback"})])]),s("div",ze,[s("button",{type:"button",class:"btn py-3 btn-primary w-100 site_button text-white",onClick:e[13]||(e[13]=(...t)=>b.saveRegisterData&&b.saveRegisterData(...t))}," 完成註冊 ")]),s("div",qe,[Ue,o(A,{to:{name:"login"},role:"button",class:"btn text-decoration-underline text-primary pointer"},{default:y(()=>[f("立即登入")]),_:1})])])):k("",!0)]),_:1},512)],64)}const Oe=E(q,[["render",je],["__scopeId","data-v-e4f70209"]]);export{Oe as default};
