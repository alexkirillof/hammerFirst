(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[10],{472:function(e,t,a){"use strict";var c=a(473),s=a.n(c),r=a(19),n=a(474).a(),o=a(28),i=a(266);const l=s.a.create({baseURL:r.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((e=>{const t=localStorage.getItem(o.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(n.push(d),window.location.reload()),e}),(e=>{i.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((e=>e.data),(e=>{let t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(o.b),n.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),i.a.error(t),Promise.reject(e)}));var j=l;const h={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},478:function(e,t,a){"use strict";var c=a(0),s=a.n(c),r=a(39),n=a(481),o=a(120),i=a(544),l=a(543),d=a(442),j=a(460),h=a(545),m=a(5);const b=()=>Object(m.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(m.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(m.jsx)("g",{id:"Connected_Home_1_",children:Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(m.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(m.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(m.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(m.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})}),u=()=>Object(m.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(m.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(m.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})});var g=a(3),p=a(2),x=a(15),O=a(7),f=a.n(O),v=a(109),w=a(69),y=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],C=c.forwardRef((function(e,t){var a=e.className,s=e.component,r=e.viewBox,n=e.spin,o=e.rotate,i=e.tabIndex,l=e.onClick,d=e.children,j=Object(x.a)(e,y);Object(w.g)(Boolean(s||d),"Should have `component` prop or `children`."),Object(w.f)();var h=c.useContext(v.a),m=h.prefixCls,b=void 0===m?"anticon":m,u=h.rootClassName,O=f()(u,b,a),C=f()(Object(p.a)({},"".concat(b,"-spin"),!!n)),N=o?{msTransform:"rotate(".concat(o,"deg)"),transform:"rotate(".concat(o,"deg)")}:void 0,F=Object(g.a)(Object(g.a)({},w.e),{},{className:C,style:N,viewBox:r});r||delete F.viewBox;var k=i;return void 0===k&&l&&(k=-1),c.createElement("span",Object(g.a)(Object(g.a)({role:"img"},j),{},{ref:t,tabIndex:k,onClick:l,className:O}),s?c.createElement(s,Object(g.a)({},F),d):d?(Object(w.g)(Boolean(r)||1===c.Children.count(d)&&c.isValidElement(d)&&"use"===c.Children.only(d).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),c.createElement("svg",Object(g.a)(Object(g.a)({},F),{},{viewBox:r}),d)):null)}));C.displayName="AntdIcon";var N=C;var F=s.a.forwardRef(((e,t)=>Object(m.jsx)(N,{component:e.svg,className:e.className}))),k=a(58),M=a(472),P=a(46),I=a(477);const z=e=>{let t=Object(P.g)();const{otherSignIn:a,showForgetPassword:s,hideAuthMessage:r,onForgetPasswordClick:g,showLoading:p,extra:x,loading:O,showMessage:f,message:v,authenticated:w,showAuthMessage:y,token:C,redirect:N,allowRedirect:k}=e;Object(c.useEffect)((()=>{null!==C&&k&&t.push(N),f&&setTimeout((()=>{r()}),3e3)}));const z=Object(m.jsxs)("div",{children:[Object(m.jsx)(n.a,{children:Object(m.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(m.jsx)(o.a,{onClick:()=>{p()},className:"mr-2",disabled:O,icon:Object(m.jsx)(F,{svg:b}),children:"Google"}),Object(m.jsx)(o.a,{onClick:()=>{p()},icon:Object(m.jsx)(F,{svg:u}),disabled:O,children:"Facebook"})]})]});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:f?1:0,marginBottom:f?20:0},children:Object(m.jsx)(i.a,{type:"error",showIcon:!0,message:v})}),Object(m.jsxs)(l.a,{layout:"vertical",name:"login-form",onFinish:e=>{p();M.a.login(e).then((e=>{w("fakeToken")})).then((e=>{y(e)}))},children:[Object(m.jsx)(l.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(m.jsx)(d.a,{prefix:Object(m.jsx)(j.a,{className:"text-primary"})})}),Object(m.jsx)(l.a.Item,{name:"password",label:Object(m.jsxs)("div",{className:"".concat(s?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(m.jsx)("span",{children:"Password"}),s&&Object(m.jsx)("span",{onClick:()=>g,className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(m.jsx)(d.a.Password,{prefix:Object(m.jsx)(h.a,{className:"text-primary"})})}),Object(m.jsx)(l.a.Item,{children:Object(m.jsx)(o.a,{type:"primary",htmlType:"submit",block:!0,loading:O,children:"Sign In"})}),a?z:null,x]})]})};z.defaultProps={otherSignIn:!0,showForgetPassword:!1};const B={showAuthMessage:k.c,showLoading:k.d,hideAuthMessage:k.b,authenticated:k.a};t.a=Object(r.b)((e=>{let{auth:t}=e;const{loading:a,message:c,showMessage:s,token:r,redirect:n}=t;return{loading:a,message:c,showMessage:s,token:r,redirect:n}}),B)(z)},481:function(e,t,a){"use strict";var c=a(4),s=a(2),r=a(7),n=a.n(r),o=a(0),i=a(65),l=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(c=Object.getOwnPropertySymbols(e);s<c.length;s++)t.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(e,c[s])&&(a[c[s]]=e[c[s]])}return a};t.a=function(e){var t=o.useContext(i.b),a=t.getPrefixCls,r=t.direction,d=e.prefixCls,j=e.type,h=void 0===j?"horizontal":j,m=e.orientation,b=void 0===m?"center":m,u=e.orientationMargin,g=e.className,p=e.children,x=e.dashed,O=e.plain,f=l(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),v=a("divider",d),w=b.length>0?"-".concat(b):b,y=!!p,C="left"===b&&null!=u,N="right"===b&&null!=u,F=n()(v,"".concat(v,"-").concat(h),Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},"".concat(v,"-with-text"),y),"".concat(v,"-with-text").concat(w),y),"".concat(v,"-dashed"),!!x),"".concat(v,"-plain"),!!O),"".concat(v,"-rtl"),"rtl"===r),"".concat(v,"-no-default-orientation-margin-left"),C),"".concat(v,"-no-default-orientation-margin-right"),N),g),k=Object(c.a)(Object(c.a)({},C&&{marginLeft:u}),N&&{marginRight:u});return o.createElement("div",Object(c.a)({className:F},f,{role:"separator"}),p&&"vertical"!==h&&o.createElement("span",{className:"".concat(v,"-inner-text"),style:k},p))}},486:function(e,t,a){"use strict";a.r(t);a(0);var c=a(478),s=a(516),r=a(517),n=a(542),o=a(39),i=a(5);const l={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=e=>{const t=Object(o.c)((e=>e.theme.currentTheme));return Object(i.jsx)("div",{className:"h-100",style:l,children:Object(i.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(i.jsx)(s.a,{justify:"center",children:Object(i.jsx)(r.a,{xs:20,sm:20,md:20,lg:7,children:Object(i.jsx)(n.a,{children:Object(i.jsxs)("div",{className:"my-4",children:[Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(i.jsxs)("p",{children:["Don't have an account yet? ",Object(i.jsx)("a",{href:"/auth/register-1",children:"Sign Up"})]})]}),Object(i.jsx)(s.a,{justify:"center",children:Object(i.jsx)(r.a,{xs:24,sm:24,md:20,lg:20,children:Object(i.jsx)(c.a,{...e})})})]})})})})})})}}}]);
//# sourceMappingURL=10.1316a0e4.chunk.js.map