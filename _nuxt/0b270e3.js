(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,5,6,7,8,9,10,12,14],{277:function(t,e,l){"use strict";l.r(e);var r=l(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"px-16 lg:px-20 xl:px-36 2xl:px-44 3xl:px-56 4xl:px-72"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,l){"use strict";l.r(e);var r=l(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("svg",{staticClass:"w-20",attrs:{viewBox:"0 0 83.804 44.237",xmlns:"http://www.w3.org/2000/svg"}},[l("g",{attrs:{transform:"translate(-429.39 -878.8)",fill:"#f5ff00","data-name":"Group 530"}},[l("path",{attrs:{transform:"translate(0)",d:"m512.51 899.27-19.783-19.783a2.335 2.335 0 0 0-3.3 0l-18.132 18.131-18.132-18.131a2.336 2.336 0 0 0-3.3 0l-19.783 19.783a2.335 2.335 0 0 0 0 3.3l19.783 19.783a2.336 2.336 0 1 0 3.3-3.3l-18.135-18.131 16.48-16.48 18.132 18.132a2.336 2.336 0 0 0 3.3 0l18.132-18.132 16.48 16.48-18.129 18.132a2.335 2.335 0 1 0 3.3 3.3l19.783-19.783a2.336 2.336 0 0 0 4e-3 -3.301z","data-name":"Path 515"}}),t._v(" "),l("path",{attrs:{transform:"translate(-88.772 -88.772)",d:"m581.5 988.04a2.335 2.335 0 0 0-3.3 0l-18.132 18.132-18.132-18.132a2.336 2.336 0 0 0-3.3 3.3l19.783 19.783a2.336 2.336 0 0 0 3.3 0l19.781-19.78a2.335 2.335 0 0 0 0-3.303z","data-name":"Path 516"}})])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,l){"use strict";l.r(e);var r={props:{white:{type:Boolean,default:!1}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("svg",{staticClass:"cursor-pointer fill-current",class:{"text-white":t.white,"text-dark":!t.white},attrs:{viewBox:"0 0 100 80",width:"40",height:"40"}},[l("rect",{attrs:{width:"100",height:"15"}}),t._v(" "),l("rect",{attrs:{y:"30",width:"100",height:"15"}}),t._v(" "),l("rect",{attrs:{y:"60",width:"100",height:"15"}})])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,l){"use strict";l.r(e);var r={props:{smalldark:{type:Boolean,default:!1}},data:function(){return{open:!1,sticky:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){var e=this.$el;window.scrollY>=e.clientHeight?this.sticky=!0:this.sticky=!1},toggle:function(){this.open=!this.open}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"flex md:items-center justify-between flex-col md:flex-row top-0 w-full transition-transform px-8 py-6 lg:px-20 z-50",class:{"bg-dark fixed animate-slide-down":t.sticky,absolute:!t.sticky,"bg-dark":t.open,"bg-dark":t.smalldark,"md:bg-transparent":t.smalldark&&!t.sticky},attrs:{id:"navbar"}},[l("div",{staticClass:"flex justify-between items-center md:mb-0",class:{"mb-8":t.open}},[l("div",{staticClass:"lg:w-36 w-28"},[l("NuxtLink",{attrs:{to:t.localePath("/")}},[l("Logo")],1)],1),t._v(" "),l("div",{staticClass:"md:hidden inline-block",on:{click:t.toggle}},[l("Hamburger",{attrs:{white:t.open||t.sticky||t.smalldark}})],1)]),t._v(" "),l("ul",{staticClass:"md:flex-1 md:flex md:justify-center lg:space-x-16 md:space-x-10 md:items-center space-y-10 md:space-y-0",class:{block:t.open,hidden:!t.open}},[l("li",[l("NuxtLink",{staticClass:"text-white font-semibold md:py-2",attrs:{to:t.localePath("/services"),"active-class":"text-primary border-b-2 border-primary"}},[t._v(t._s(t.$t("NAVBAR.SERVICES")))])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"text-white font-semibold md:py-2",attrs:{to:t.localePath("/aboutme"),"active-class":"text-primary border-b-2 border-primary"}},[t._v(t._s(t.$t("NAVBAR.ABOUT_ME")))])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"text-white font-semibold md:py-2",attrs:{to:t.localePath("/projects"),"active-class":"text-primary border-b-2 border-primary"}},[t._v(t._s(t.$t("NAVBAR.PORTFOLIO")))])],1),t._v(" "),l("li",{staticClass:"md:hidden"},[l("NuxtLink",{staticClass:"text-white font-semibold md:py-2",attrs:{to:t.localePath("/contact"),"active-class":"text-primary border-b-2 border-primary"}},[t._v(t._s(t.$t("NAVBAR.CONTACT")))])],1)]),t._v(" "),l("NuxtLink",{staticClass:"text-white font-semibold border-4 border-white lg:w-36 w-28 text-center py-2 rounded hover:bg-white hover:text-dark transition-colors hidden md:inline-block",attrs:{to:t.localePath("/contact")}},[t._v(t._s(t.$t("NAVBAR.CONTACT")))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:l(278).default,Hamburger:l(279).default})},282:function(t,e,l){"use strict";l.r(e);var r=l(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("Container",{staticClass:"text-white py-16 bg-dark"},[l("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 4xl:grid-cols-5 md:gap-20"},[l("div",{staticClass:"hidden 4xl:block"},[l("Logo")],1),t._v(" "),l("div",{staticClass:"mb-8 xl:mb-0"},[l("h3",{staticClass:"text-2xl font-semibold"},[t._v("Contact")]),t._v(" "),l("ul",{staticClass:"space-y-2 mt-3"},[l("li",[t._v("martijn.vandriest@gmail.com")])])]),t._v(" "),l("div",{staticClass:"mb-8 xl:mb-0"},[l("h3",{staticClass:"text-2xl font-semibold"},[t._v("Pagina's")]),t._v(" "),l("ul",{staticClass:"space-y-2 mt-3"},[l("li",[l("NuxtLink",{attrs:{to:t.localePath("/")}},[t._v("Voorpagina")])],1),t._v(" "),l("li",[l("NuxtLink",{attrs:{to:t.localePath("/services")}},[t._v("Diensten")])],1),t._v(" "),l("li",[l("NuxtLink",{attrs:{to:t.localePath("/aboutme")}},[t._v("Over mij")])],1),t._v(" "),l("li",[l("NuxtLink",{attrs:{to:t.localePath("/projects")}},[t._v("Portfolio")])],1)])]),t._v(" "),l("div",{staticClass:"mb-8 md:mb-0"},[l("h3",{staticClass:"text-2xl font-semibold"},[t._v("Overig")]),t._v(" "),l("ul",{staticClass:"space-y-2 mt-3"},[l("li",[t._v("Curriculum vitae")])])]),t._v(" "),l("div",[l("div",{staticClass:"flex space-x-6"},[l("a",{attrs:{href:"#"}},[l("svg",{staticClass:"h-6",attrs:{viewBox:"0 0 32.705 20.579",xmlns:"http://www.w3.org/2000/svg"}},[l("g",{attrs:{transform:"translate(-10 -117.5)",fill:"#f5ff00","data-name":"behance logo"}},[l("path",{attrs:{transform:"translate(0)",d:"M19.686,117.5a12.659,12.659,0,0,1,2.678.259,5.8,5.8,0,0,1,2.075.851,4.011,4.011,0,0,1,1.342,1.573,5.538,5.538,0,0,1,.474,2.419,4.531,4.531,0,0,1-.7,2.594,5.157,5.157,0,0,1-2.092,1.7,4.96,4.96,0,0,1,2.842,1.917,6.3,6.3,0,0,1,.333,5.993A5.254,5.254,0,0,1,25,136.67a7.243,7.243,0,0,1-2.334,1.066,10.482,10.482,0,0,1-2.7.344H10V117.5Zm-.575,8.327a3.265,3.265,0,0,0,1.99-.575,2.176,2.176,0,0,0,.778-1.872,2.391,2.391,0,0,0-.259-1.184,1.94,1.94,0,0,0-.693-.722,2.89,2.89,0,0,0-.992-.361,6.515,6.515,0,0,0-1.167-.1h-4.24v4.815Zm.259,8.733a6.2,6.2,0,0,0,1.269-.13A3.008,3.008,0,0,0,21.7,134a2.165,2.165,0,0,0,.733-.823,2.851,2.851,0,0,0,.276-1.325,2.669,2.669,0,0,0-.891-2.261,3.815,3.815,0,0,0-2.362-.677H14.527v5.649Z","data-name":"Path 545"}}),t._v(" "),l("path",{attrs:{transform:"translate(-298.37 -82)",d:"M331.3,216.133a4.195,4.195,0,0,0,4.781.271,2.555,2.555,0,0,0,1.094-1.314h3.6a6.832,6.832,0,0,1-2.65,3.834,7.82,7.82,0,0,1-4.324,1.156,8.437,8.437,0,0,1-3.169-.564,6.493,6.493,0,0,1-2.391-1.6,7.174,7.174,0,0,1-1.511-2.481,9.07,9.07,0,0,1-.536-3.169,8.641,8.641,0,0,1,.547-3.112,7.2,7.2,0,0,1,3.964-4.15,7.683,7.683,0,0,1,3.1-.6,7.081,7.081,0,0,1,3.315.733,6.692,6.692,0,0,1,2.323,1.973,8.228,8.228,0,0,1,1.314,2.825,10.42,10.42,0,0,1,.288,3.315H330.3A4.139,4.139,0,0,0,331.3,216.133Zm4.629-7.843a2.883,2.883,0,0,0-2.233-.806,3.582,3.582,0,0,0-1.629.333,3.068,3.068,0,0,0-1.037.823,3.023,3.023,0,0,0-.547,1.037,4.489,4.489,0,0,0-.186.981h6.659A4.78,4.78,0,0,0,335.931,208.29Z","data-name":"Path 546"}}),t._v(" "),l("rect",{attrs:{transform:"translate(31.227 118.54)",width:"8.322",height:"2.306","data-name":"Rectangle 1008"}})])]),t._v(" "),l("span",{staticClass:"sr-only"},[t._v("Behance")])]),t._v(" "),l("a",{attrs:{href:"#"}},[l("svg",{staticClass:"h-6",attrs:{viewBox:"0 0 24.238 24.238",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{transform:"translate(.084 .075)",d:"M24.148,24.163h.006V15.273c0-4.349-.936-7.7-6.02-7.7a5.278,5.278,0,0,0-4.754,2.613h-.071V7.98H8.489V24.162h5.019V16.149c0-2.11.4-4.15,3.013-4.15,2.574,0,2.613,2.408,2.613,4.285v7.878Z",fill:"#f5ff00","data-name":"Path 542"}}),t._v(" "),l("path",{attrs:{transform:"translate(.004 .079)",d:"M.4,7.977H5.421V24.159H.4Z",fill:"#f5ff00","data-name":"Path 543"}}),t._v(" "),l("path",{attrs:{transform:"translate(0)",d:"M2.911,0A2.924,2.924,0,1,0,5.821,2.911,2.911,2.911,0,0,0,2.911,0Z",fill:"#f5ff00","data-name":"Path 544"}})]),t._v(" "),l("span",{staticClass:"sr-only"},[t._v("Linkedin")])]),t._v(" "),l("a",{attrs:{href:"#"}},[l("svg",{staticClass:"h-6",attrs:{viewBox:"0 0 24.565 24.57",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{transform:"translate(-.449)",d:"M24.951,7.224a8.978,8.978,0,0,0-.571-2.981,6.294,6.294,0,0,0-3.6-3.595A9,9,0,0,0,17.8.077C16.489.014,16.072,0,12.736,0S8.983.014,7.672.072A8.981,8.981,0,0,0,4.692.643,6,6,0,0,0,2.512,2.064,6.049,6.049,0,0,0,1.1,4.238,9,9,0,0,0,.525,7.219C.463,8.534.449,8.952.449,12.288s.014,3.753.072,5.064a8.977,8.977,0,0,0,.571,2.981,6.293,6.293,0,0,0,3.595,3.595,9,9,0,0,0,2.981.571c1.31.058,1.728.072,5.064.072s3.753-.014,5.064-.072a8.976,8.976,0,0,0,2.981-.571,6.285,6.285,0,0,0,3.6-3.595,9.008,9.008,0,0,0,.571-2.981c.058-1.31.072-1.728.072-5.064s0-3.753-.062-5.064ZM22.739,17.255a6.735,6.735,0,0,1-.422,2.28,4.076,4.076,0,0,1-2.333,2.333,6.758,6.758,0,0,1-2.28.422c-1.3.058-1.685.072-4.963.072s-3.672-.014-4.963-.072a6.731,6.731,0,0,1-2.28-.422,3.781,3.781,0,0,1-1.411-.917A3.82,3.82,0,0,1,3.17,19.54a6.759,6.759,0,0,1-.422-2.28c-.058-1.3-.072-1.685-.072-4.963s.014-3.672.072-4.963a6.731,6.731,0,0,1,.422-2.28,3.734,3.734,0,0,1,.922-1.411A3.814,3.814,0,0,1,5.5,2.726,6.763,6.763,0,0,1,7.783,2.3c1.3-.058,1.685-.072,4.963-.072s3.672.014,4.963.072a6.734,6.734,0,0,1,2.28.422,3.778,3.778,0,0,1,1.411.917,3.819,3.819,0,0,1,.917,1.411,6.762,6.762,0,0,1,.422,2.28c.058,1.3.072,1.685.072,4.963s-.014,3.662-.072,4.958Zm0,0",fill:"#f5ff00","data-name":"Path 539"}}),t._v(" "),l("path",{attrs:{transform:"translate(-118.97 -118.52)",d:"m131.26 124.5a6.312 6.312 0 1 0 6.312 6.312 6.313 6.313 0 0 0-6.312-6.312zm0 10.406a4.094 4.094 0 1 1 4.094-4.094 4.095 4.095 0 0 1-4.094 4.094z",fill:"#f5ff00","data-name":"Path 540"}}),t._v(" "),l("path",{attrs:{transform:"translate(-345.07 -84.349)",d:"m365.4 90.075a1.474 1.474 0 1 1-1.474-1.474 1.474 1.474 0 0 1 1.474 1.474z",fill:"#f5ff00","data-name":"Path 541"}})]),t._v(" "),l("span",{staticClass:"sr-only"},[t._v("Behance")])])])])]),t._v(" "),l("div",[l("div",{staticClass:"w-full h-[1px] bg-gray-500 mt-16"}),t._v(" "),l("div",{staticClass:"flex justify-between items-center flex-wrap mt-4"},[l("p",[t._v("© 2021 Martijn van Driest")]),t._v(" "),l("NuxtLink",{attrs:{to:t.localePath("/privacy")}},[t._v("Privacy verklaring")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:l(278).default,Container:l(277).default})},283:function(t,e,l){t.exports=l.p+"img/paint-brush.b00bad7.png"},284:function(t,e,l){"use strict";l.r(e);var r={props:{post:{type:Object,required:!0}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"h-80"},[l("img",{staticClass:"w-full h-full object-cover rounded-md",attrs:{src:t.post.image,alt:t.post.title}})]),t._v(" "),l("p",{staticClass:"text-gray-500 font-medium mt-5"},[t._v(t._s(t.post.type))]),t._v(" "),l("h3",{staticClass:"font-semibold text-2xl mt-2 mb-3"},[t._v(t._s(t.post.title))]),t._v(" "),l("NuxtLink",{staticClass:"bg-secondary text-white px-6 py-2 inline-block rounded font-medium",attrs:{to:t.localePath("/projects/"+t.post.slug)}},[t._v("Zie meer")])],1)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,l){"use strict";l.r(e);var r=l(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,l){t.exports=l.p+"img/boxes.cd6419e.png"},287:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAABHNCSVQICAgIfAhkiAAAALpJREFUKFOdkssNwkAMRMdHJCTSAemAtEAFtEA6oBQ6IJ0gOqAEOiAHCDfMmI+0ipa1weeZ59nxCpy5KjoFVpQtp4LjWC4lvyqqATibhpA+BykCzHhRrCnafYO4AA8SApQgMig291dJkWm4sUqfI2yZ/fw3NB6EJW1pbyIIbq+pm3+0BLS/dGBL9skTWv6LLgRgyqzZkriAkjkK6Lll9m7+GTvty03AK9n/X1hhY3MogYluinoiOOUu9QCAZEk4KihmRgAAAABJRU5ErkJggg=="},291:function(t,e,l){"use strict";l.r(e);var r=l(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Container",{staticClass:"py-28"},[r("div",{staticClass:"grid grid-cols-2 gap-32"},[r("div",{staticClass:"grid grid-cols-2 gap-5"},[r("div",{staticClass:"col-span-2"},[r("h2",{staticClass:"font-semibold text-xl mb-4"},[t._v("Wie ben ik?")]),t._v(" "),r("p",{staticClass:"text-gray-600"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]),t._v(" "),r("div",[r("img",{staticClass:"mb-4",attrs:{src:l(283),alt:"Brush"}}),t._v(" "),r("h2",{staticClass:"font-semibold text-xl mb-4"},[t._v("Eigenschap 1")]),t._v(" "),r("p",{staticClass:"text-gray-600"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])]),t._v(" "),r("div",[r("img",{staticClass:"mb-4",attrs:{src:l(283),alt:"Brush"}}),t._v(" "),r("h2",{staticClass:"font-semibold text-xl mb-4"},[t._v("Eigenschap 2")]),t._v(" "),r("p",{staticClass:"text-gray-600"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("img",{attrs:{src:l(286),alt:"Boxes"}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Container:l(277).default})},292:function(t,e,l){"use strict";l.r(e);var r=l(62),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Container",{staticClass:"bg-dark text-white py-36"},[r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 lg:gap-60 gap-12"},[r("div",[r("h2",{staticClass:"font-semibold text-4xl"},[t._v("Hoe kan ik u helpen?")]),t._v(" "),r("p",{staticClass:"text-gray-300 my-4"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),r("NuxtLink",{staticClass:"text-primary font-semibold text-lg inline-flex items-center border-b-2 border-transparent hover:border-primary group transition-all duration-300 ease-in-out",attrs:{to:t.localePath("/projects")}},[t._v("Diensten"),r("img",{staticClass:"ml-2 group-hover:-rotate-45 transition-transform ease-in-out duration-500",attrs:{src:l(287)}})])],1),t._v(" "),r("div",{staticClass:"flex space-x-20"},[r("div",[r("p",{staticClass:"text-primary font-semibold"},[t._v("Design")]),t._v(" "),r("ul",{staticClass:"space-y-2 mt-2"},[r("li",[r("NuxtLink",{staticClass:"font-semibold",attrs:{to:t.localePath("/projects")}},[t._v("Web design")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"font-semibold",attrs:{to:t.localePath("/projects")}},[t._v("Packaging design")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"font-semibold",attrs:{to:t.localePath("/projects")}},[t._v("Branding")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"font-semibold",attrs:{to:t.localePath("/projects")}},[t._v("Prototyping")])],1)])]),t._v(" "),r("div",[r("p",{staticClass:"text-primary font-semibold"},[t._v("Video")]),t._v(" "),r("ul",{staticClass:"space-y-2 mt-2"},[r("li",[r("NuxtLink",{staticClass:"font-semibold",attrs:{to:t.localePath("/projects")}},[t._v("Video editing")])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Container:l(277).default})},306:function(t,e,l){"use strict";l.r(e);var r=l(7),n=(l(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,r=t.app,n=t.error,e.next=3,l(r.i18n.locale).only(["catagory","title","type","slug","image"]).sortBy("createdAt","asc").limit(4).fetch().catch((function(){return n({statusCode:404,message:"Page not found!"})}));case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{fixedNavbar:!1}}}),o=l(62),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",{staticClass:"max-h-screen h-[42rem] min-h-[35rem] bg-gradient-to-r from-dark via-[#bd6a0b] to-[#FFBC00] pb-6 flex flex-col relative"},[l("Navbar"),t._v(" "),l("div",{staticClass:"flex items-center justify-center h-full text-3xl md:text-4xl lg:text-5xl text-center px-8 lg:px-20"},[l("h1",{staticClass:"text-white leading-tight"},[t._v("\n          "+t._s(t.$t("HEADER_NAME"))+"\n            "),l("br",{staticClass:"hidden md:block"}),t._v("\n          "+t._s(t.$t("HEADER_PLEASURE_TO_MEET"))+" \n            "),l("br",{staticClass:"hidden md:block"}),t._v("\n          "+t._s(t.$t("IM_A"))+"\n            "),l("span",{staticClass:"text-primary"},[t._v(t._s(t.$t("GRAPHIC_DESIGNER")))]),t._v("\n          "+t._s(t.$t("BASED_IN"))+" \n        ")])])],1),t._v(" "),l("WhoAmI"),t._v(" "),l("HowIHelp"),t._v(" "),l("Container",{staticClass:"py-24"},[l("div",{staticClass:"flex items-center mb-8"},[l("h2",{staticClass:"text-3xl font-semibold mr-6"},[t._v("Projecten")]),t._v(" "),l("NuxtLink",{staticClass:"px-8 h-12 rounded flex border-[3px] items-center group",attrs:{to:t.localePath("/projects")}},[t._v("Zie alle "),l("svg",{staticClass:"h-3 ml-2 group-hover:-rotate-45 transition-transform ease-in-out",attrs:{viewBox:"0 0 19.538 13.886",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{transform:"translate(.25 -4.424)",d:"M12.82,4.875a.675.675,0,0,0-.959.95l4.865,4.865H.672A.668.668,0,0,0,0,11.362a.676.676,0,0,0,.672.681H16.725L11.86,16.9a.689.689,0,0,0,0,.959.672.672,0,0,0,.959,0l6.017-6.017a.661.661,0,0,0,0-.95Z",fill:"gray",stroke:"gray","stroke-width":".5"}})])])],1),t._v(" "),l("ProjectsGrid",t._l(t.posts,(function(t){return l("ProjectCard",{key:t.slug,attrs:{post:t}})})),1)],1),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:l(280).default,WhoAmI:l(291).default,HowIHelp:l(292).default,ProjectCard:l(284).default,ProjectsGrid:l(285).default,Container:l(277).default,Footer:l(282).default})}}]);