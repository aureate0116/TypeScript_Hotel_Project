import{S as f}from"./sweetalert2.all-6m_Z_jZk.js";import{m as g,_ as A,c as v,b as l,w as h,F as B,r,o as w,a as e,n as _,e as x,v as F,f as k,p as E,d as y}from"./index-OEbCzfE_.js";import{u as S}from"./userAuthStore-yZeccZrX.js";const V="https://hexschool-freyja.onrender.com/api/v1/",U={data(){return{userAccount:{email:"",password:""},loginSetting:{isRememberAccount:!1}}},methods:{...g(S,["getUserEmail"]),userLogin(){let o=this.userAccount,s={"Content-Type":"application/json",Accept:"application/json"};this.$refs.myForm&&this.$refs.myForm.validate().then(m=>{m.valid&&this.axios.post(`${V}user/login`,o,{headers:s}).then(t=>{t.data.status?(document.cookie=`loginToken=${t.data.token};  path=/ ;`,document.cookie=`userInfo=${JSON.stringify(t.data.result)};  path=/ ;`,this.$router.push({name:"userCenter"})):f.fire({icon:"error",iconColor:"#dc3545",title:t.data.message,showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}})}).catch(t=>{f.fire({icon:"error",iconColor:"#C22538",title:t.response.data.message,showConfirmButton:!1,width:"400px",customClass:{title:"fs-4"}})})}),this.loginSetting.isRememberAccount==!0?document.cookie=`userEmail=${this.userAccount.email};  path=/ ;`:document.cookie="userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}},mounted(){if(this.getUserEmail()){this.loginSetting.isRememberAccount=!0;const o=this.getUserEmail();this.userAccount.email=o!==null?o:""}}},n=o=>(E("data-v-cd0bb8c3"),o=o(),y(),o),R=n(()=>e("span",{class:"text-primary"},"享樂酒店，誠摯歡迎",-1)),I=n(()=>e("h1",{class:"mb-7"},"立即開始旅程",-1)),L={class:"row g-2 d-flex flex-column"},T={class:"col mb-3"},j=n(()=>e("label",{class:"form-label",for:"email"},"電子信箱",-1)),N={class:"col mb-3"},D=n(()=>e("label",{class:"form-label",for:"password"},"密碼",-1)),M={class:"mt-3 d-flex justify-content-between"},$={class:"form-check"},q=n(()=>e("label",{class:"form-check-label",for:"isRememberAccount"}," 記住帳號",-1)),J=n(()=>e("span",{class:"text-decoration-underline text-primary pointer"},"忘記密碼？",-1)),z={class:"col mb-3"},O={class:"col mb-3"},G=n(()=>e("span",{class:"pointer me-2"},"沒有會員嗎?",-1));function H(o,s,m,t,a,u){const d=r("v-field"),p=r("ErrorMessage"),b=r("router-link"),C=r("v-form");return w(),v(B,null,[R,I,l(C,{ref:"myForm",onSubmit:s[4]||(s[4]=c=>u.userLogin())},{default:h(({errors:c})=>[e("div",L,[e("div",T,[j,l(d,{name:"email",id:"email",type:"email",class:_(["form-control",{"is-invalid":c.email}]),label:"帳號",placeholder:"hello@exsample.com",modelValue:a.userAccount.email,"onUpdate:modelValue":s[0]||(s[0]=i=>a.userAccount.email=i),rules:"required"},null,8,["class","modelValue"]),l(p,{name:"email",class:"invalid-feedback"})]),e("div",N,[D,l(d,{name:"password",type:"password",label:"密碼",class:_(["form-control",{"is-invalid":c.password}]),id:"password",placeholder:"請輸入密碼",modelValue:a.userAccount.password,"onUpdate:modelValue":s[1]||(s[1]=i=>a.userAccount.password=i),rules:"required"},null,8,["class","modelValue"]),l(p,{name:"password",class:"invalid-feedback"}),e("div",M,[e("div",$,[x(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"isRememberAccount","onUpdate:modelValue":s[2]||(s[2]=i=>a.loginSetting.isRememberAccount=i)},null,512),[[F,a.loginSetting.isRememberAccount]]),q]),J])]),e("div",z,[e("button",{type:"button",class:"btn py-3 btn-white w-100 site_button text-gray",onClick:s[3]||(s[3]=(...i)=>u.userLogin&&u.userLogin(...i))}," 會員登入 ")]),e("div",O,[G,l(b,{to:{name:"register"},role:"button",class:"text-decoration-underline text-primary pointer"},{default:h(()=>[k("前往註冊")]),_:1})])])]),_:1},512)],64)}const W=A(U,[["render",H],["__scopeId","data-v-cd0bb8c3"]]);export{W as default};
