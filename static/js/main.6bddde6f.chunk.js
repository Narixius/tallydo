(this.webpackJsonptallydo=this.webpackJsonptallydo||[]).push([[0],{215:function(e,t,a){e.exports=a(441)},223:function(e,t,a){},224:function(e,t,a){},237:function(e,t){},274:function(e,t,a){},438:function(e,t,a){},439:function(e,t,a){},440:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),l=a(24),i=a(41),s=a(51),d=a(84),u=a(85),m="ADD_TODO";function f(e){return{type:"UPDATE_TODO",payload:e}}var g=function(){function e(t,a,n,o){Object(d.a)(this,e),this.title=t,this.description=a,this.dueDate=n,this.tags=o,this.id=void 0,this.isCompleted=void 0,this.id=++e.baseId,this.isCompleted=!1}return Object(u.a)(e,[{key:"getTitle",value:function(){return this.title}},{key:"getId",value:function(){return this.id}},{key:"isChecked",value:function(){return this.isCompleted}},{key:"setChecked",value:function(e){this.isCompleted=e}},{key:"getDueDate",value:function(){return this.dueDate}},{key:"getTags",value:function(){return this.tags}}]),e}();g.baseId=0;var p=a(12);var b=function(){function e(t,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(d.a)(this,e),this.title=t,this.color=a,this.defaultTodo=n,this.id=void 0,this.id=++e.baseId}return Object(u.a)(e,[{key:"getId",value:function(){return this.id}}]),e}();b.baseId=0;var h=localStorage.getItem("tags"),v=[];h&&h.length>0&&(h=JSON.parse(h),Object(p.isArray)(h)&&h.forEach((function(e){v.push(new b(e.title,e.color,e.defaultTodo))}))),0===v.length&&(v=[new b("work","#67F4EC"),new b("Fun","#67F46D"),new b("Study","#F46767"),new b("Rest","#E9F467")]);var E,y=v;var w=Object(i.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return[].concat(Object(s.a)(e),[t.payload]);case"UPDATE_TODO":return e.filter((function(e){return e.getId()===t.payload.getId()&&(e=t.payload),e}));case"REMOVE_TODO":return e.filter((function(e){return e.getId()!==t.payload.getId()&&e}));default:return e}},tags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TAG":return E=[].concat(Object(s.a)(e),[t.payload]),window.localStorage.setItem("tags",JSON.stringify(E)),E;case"REMOVE_TAG":return E=e.filter((function(e){return e.getId()!==t.payload.getId()&&e})),window.localStorage.setItem("tags",JSON.stringify(E)),E;default:return e}}}),x=(a(223),a(13)),O=a(14);a(224);var N=function(){return o.a.createElement("h1",{className:"font-bold text-2xl tracking-normal text-white"},"Tallyd",o.a.createElement(O.d,{size:20,className:"inline-block"}))},k=a(17),T=a.n(k),D=(a(225),a(273),a(274),a(206)),j=a(86),C=a.n(j);function S(e){var t="dateTag rounded-md mb-2 text-sm text-white font-bold px-3 py-1 mr-3 opacity-25 cursor-pointer";return e?t+" active":t}T.a.extend(C.a);var I=function(e){var t=e.onDateChange,a=o.a.useState("today"),n=Object(x.a)(a,2),r=n[0],c=n[1],l=o.a.useState(!1),i=Object(x.a)(l,2),s=i[0],d=i[1],u=o.a.useState(),m=Object(x.a)(u,2),f=m[0],g=m[1],p=function(e,a){c(a),g(void 0),t(e)};return o.a.createElement("div",null,o.a.createElement("span",{className:"text-white block p-2 pl-0 font-bold text-sm"},"Due Date"),o.a.createElement("div",{className:"flex md:flex-wrap overflow-x-auto overflow-y-hidden hiddenScrollbar"},o.a.createElement("div",{className:S("today"===r)+" bg-red-500",onClick:function(){return p(new Date,"today")}},o.a.createElement("span",null,"Today")),o.a.createElement("div",{className:S("tomorrow"===r)+" bg-indigo-500",onClick:function(){return p(T()().add(1,"day").toDate(),"tomorrow")}},o.a.createElement("span",null,"Tomorrow")),o.a.createElement("div",{className:S("customDate"===r)+" bg-yellow-600 flex",onClick:function(){c("customDate"),d(!0)}},o.a.createElement(O.b,{size:19}),f&&o.a.createElement("span",{className:"ml-1 customDate"},T()(f).format("DD-MM-YYYY")))),s&&o.a.createElement("div",{className:"relative mt-1 calendar"},o.a.createElement("div",{className:"calendar -mt-32 absolute z-50 w-full flex justify-center items-center"},o.a.createElement(D.SingleDatePicker,{id:"signleDatePicker",numberOfMonths:1,focused:!0,date:null,onDateChange:function(e){c("customDate"),g(e.toDate()),t(e.toDate()),d(!1)},isDayHighlighted:function(e){return T()(e.toDate()).isToday()},onFocusChange:function(){},withPortal:!0}))))},M=a(213),A=(a(438),{AddTag:function(e){return{type:"ADD_TAG",payload:e}},RemoveTag:function(e){return{type:"REMOVE_TAG",payload:e}}});var _=Object(l.b)((function(e){return{tags:e.tags}}),A)((function(e){var t=e.onTagAdd,a=e.onTagRemove,n=e.tags,r=e.AddTag,c=e.RemoveTag,l=o.a.useState([]),i=Object(x.a)(l,2),d=i[0],u=i[1],m=o.a.useState(!1),f=Object(x.a)(m,2),g=f[0],p=f[1],h=o.a.useState("#8ED1FC"),v=Object(x.a)(h,2),E=v[0],y=v[1],w=o.a.useState(""),N=Object(x.a)(w,2),k=N[0],T=N[1];function D(e){var t="tag rounded-md mb-2 flex self-start text-sm items-center text-black-blue font-bold px-3 py-1 mr-3 opacity-25 cursor-pointer";return d.includes(e)?t+" active":t}function j(e){if(e.title.length>0){var n=Object(s.a)(d);n.includes(e.title)?(n=n.filter((function(t){return t!==e.title})),a(e)):(n.push(e.title),t(e)),u(n)}}var C=function(){if(k.length>0){var e=new b(k,E,!1);r(e),j(e)}T(""),p(!1)};return o.a.createElement("div",null,o.a.createElement("span",{className:"text-white block p-2 pl-0 font-bold text-sm"},"Tags"),o.a.createElement("div",{className:"flex md:flex-wrap overflow-x-auto overflow-y-hidden hiddenScrollbar"},n.map((function(e,t){return o.a.createElement("div",{key:e.title+t,className:D(e.title),style:{backgroundColor:e.color},onClick:function(){j(e)}},o.a.createElement("span",null,e.title),!e.defaultTodo&&o.a.createElement("div",{className:"removeTodoAction cursor-pointer",onClick:function(){a(e),c(e)}},o.a.createElement(O.h,{size:18})))})),g&&o.a.createElement("div",null,o.a.createElement("div",{className:D("customDate")+" bg-white flex active ",onClick:function(){}},o.a.createElement("div",{className:"colorpicker w-6 h-6 rounded-md",style:{backgroundColor:E}}),o.a.createElement("input",{className:"mx-2 text-sm bg-transparent font-bold color-black-blue focus:outline-none",type:"text",placeholder:"write tag title",onChange:function(e){T(e.currentTarget.value)},onKeyUp:function(e){"Enter"===e.key&&C()}}),o.a.createElement("div",{className:"colorpicker w-6 h-6 rounded-md border border-gray-500 color-gray-500",onClick:C},o.a.createElement(O.e,{className:"stroke-current text-gray-700",size:22}))),o.a.createElement(M.a,{color:E,onChangeComplete:function(e){y(e.hex)}})),o.a.createElement("div",{className:"dateTag rounded-md mb-2 self-start text-sm text-gray-300 font-bold px-2 py-1 mr-2 opacity-50 cursor-pointer bg-gray-400 bg-opacity-25 flex",onClick:function(){p(!0)}},o.a.createElement(O.g,{size:19}))))})),Y={AddTodo:function(e){return{type:m,payload:e}}},R=new Date,V=[],z=["Shoping..?","Watching a movie..?","Hanging out...?","Speak with somebody...?"];var F=Object(l.b)(null,Y)((function(e){var t=e.AddTodo,a=e.onTimelineControllerClicked,n=o.a.createRef(),r=o.a.useState(""),c=Object(x.a)(r,2),l=c[0],i=c[1],s=o.a.useState(Object(p.sample)(z)),d=Object(x.a)(s,2),u=d[0],m=d[1],f=function(){l.trim().length>0&&(t(new g(l,"",R,V)),V=Object(p.clone)(V),i(""),n.current.value="",m(Object(p.sample)(z)))};return o.a.createElement("div",{className:"p-5 md:w-1/2 relative"},o.a.createElement("div",{className:"flex justify-between"},o.a.createElement(N,null),o.a.createElement("div",{className:"md:hidden visible bg-gray-400 bg-opacity-25 p-2 rounded-md cursor-pointer",onClick:a},o.a.createElement(O.i,{className:"text-gray-300 "}))),o.a.createElement("h2",{className:"md:text-3xl text-2xl font-bold text-white lg:mt-10 mt-5"},"What\u2019s you plan to do?"),o.a.createElement("p",{className:"text-gray-500 font-medium text-sm lg:mt-2 mt-1"},"Add you plan, so you never forget the works!"),o.a.createElement("div",{className:"inputfields mt-8"},o.a.createElement("input",{ref:n,type:"text",className:"px-4 py-3 rounded-md font bg-white bg-opacity-25 text-gray-100 w-full focus:outline-none placeholder-gray-400",placeholder:u,onChange:function(e){i(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&f()}})),o.a.createElement("div",{className:"mt-5"},o.a.createElement(I,{onDateChange:function(e){R=e}})),o.a.createElement("div",{className:"mt-5"},o.a.createElement(_,{onTagAdd:function(e){!1===V.includes(e)&&V.push(e)},onTagRemove:function(e){V=V.filter((function(t){return!(t.title===e.title&&t.color===e.color)}))}})),o.a.createElement("div",{className:"flex flex-row-reverse w-full mt-4"},o.a.createElement("button",{onClick:f,className:"add font-bold flex text-gray-800 px-3 py-1 rounded-md bg-white focus:outline-none"},"Add",o.a.createElement(O.a,{className:"ml-1"}))))})),P=(a(439),a(445)),U=a(444),B={RemoveTodo:function(e){return{type:"REMOVE_TODO",payload:e}}};var H=Object(l.b)(null,B)(Object(n.memo)((function(e){var t=e.todo,a=e.onTodoCheck,n=e.showMenu,r=e.setShowMenu,c=e.RemoveTodo,l="todo-item mb-2 text-black-blue p-2 rounded-md flex justify-between select-none  cursor-pointer bg-active-todo",i="circle border-2 rounded-full  bg-whtie",s="ml-2 font-medium";return t.isChecked()?(l+=" bg-opacity-25 done-todo opacity-75",i+=" border-green-400 text-green-400",s+=" text-green-400 line-through"):i+="  border-black-blue",o.a.createElement("div",{onClick:function(){a(t)},className:l},o.a.createElement("div",{className:"flex items-center ",style:{maxWidth:t.getTags().length>0?t.getTitle().length>20?"70%":"50%":"95%"}},o.a.createElement("div",{className:i},t.isChecked()&&o.a.createElement(O.c,{size:14})),o.a.createElement("span",{className:s+" w-full truncate"},t.getTitle())),o.a.createElement("div",{className:"hiddenScrollbar flex justify-between items-center",style:{maxWidth:t.getTitle().length>20?"20%":"55%",overflowX:"scroll"}},t.getTags().map((function(e){return o.a.createElement("span",{key:e.getId(),className:"ml-1 px-2 py-1 rounded-md font-bold text-sm",style:{backgroundColor:e.color}},e.title)})),o.a.createElement("div",{className:"dropdown"},o.a.createElement("div",{onClick:function(e){e.stopPropagation(),r(t.getId())},className:"btn flex justify-center items-center w-6 h-6 hover:bg-gray-200 rounded-md text-gray-700"},o.a.createElement(O.f,{className:"text-current",size:18})),o.a.createElement(P.a,{className:"todo-list"},n&&o.a.createElement(U.a,{key:"1",timeout:100,classNames:"item"},o.a.createElement("ul",{className:"absolute z-60 right-0 py-1 bg-white shadow-md rounded-md"},o.a.createElement("li",{className:"flex justify-center items-center hover:bg-gray-200 rounded-sm py-1 px-2",onClick:function(e){e.stopPropagation(),c(t)}},o.a.createElement(O.h,{size:18})," ",o.a.createElement("span",{className:"font-bold text-sm ml-1"},"Delete"))))))))}),(function(e,t){return!Object(p.isEqual)(e,t)}))),J=a(211),G=a.n(J),X=a(212),L=a.n(X),W=a(116);T.a.extend(G.a),T.a.extend(C.a),T.a.extend(L.a);var q={UpdateTodo:f};var K=Object(l.b)(null,q)((function(e){var t=e.groups,a=e.UpdateTodo,r=o.a.useState(-1),c=Object(x.a)(r,2),l=c[0],i=c[1],s=Object(p.sortBy)(Object.keys(t),(function(e){return T()(e,"DD-MM-YYYY").toDate()})),d=Object(p.zipObject)(s,s.map((function(e){return t[e]})));t=d,Object.keys(t).forEach((function(e){t[e]=Object(p.sortBy)(t[e],(function(e){return e.getTitle()}))})),Object.keys(t).forEach((function(e){t[e]=Object(p.sortBy)(t[e],(function(e){return e.isChecked()}))}));var u=function(e){var t=!0;e.isChecked()&&(t=!1),e.setChecked(t),a(e)},m=Object(n.memo)(Object(n.forwardRef)((function(e,t){return o.a.createElement("div",{ref:t},o.a.createElement(H,e))})),(function(e,t){return!Object(p.isEqual)(e,t)}));return o.a.createElement("div",{className:"todo-groups"},o.a.createElement(W.a,{staggerDurationBy:"30",duration:200,appearAnimation:"accordionVertical",enterAnimation:"accordionVertical",leaveAnimation:"accordionVertical"},Object.keys(t).map((function(e){return o.a.createElement("div",{className:"todoGroup mb-10",key:e},o.a.createElement("span",{className:"mb-2 block font-bold"},function(e){var t=T()(e,"DD-MM-YYYY");return t.isToday()?"Today":t.isTomorrow()?"Tomorrow":t.year()===T()().year()?t.format("ddd, D MMM"):t.format("ddd, D MMM, YYYY")}(e)),o.a.createElement(W.a,{staggerDurationBy:"30",duration:200,appearAnimation:"accordionVertical",enterAnimation:"accordionVertical",leaveAnimation:"accordionVertical"},t[e].map((function(e){return o.a.createElement(m,{onTodoCheck:u,todo:e,key:e.getId(),showMenu:l===e.getId(),setShowMenu:i})}))))}))))})),Q={UpdateTodo:f},Z=!1,$={top:"50px"},ee=!0,te=0;var ae=Object(l.b)((function(e){return{todos:e.todos}}),Q)((function(e){var t=e.todos,a=e.forwardedRef,n=Object(p.groupBy)(t,(function(e){return T()(e.getDueDate()).format("DD-MM-YYYY")})),r=o.a.useState($),c=Object(x.a)(r,2),l=c[0],i=c[1],s=function(){ee=!0,i($)},d=function(){ee=!1,i({top:window.innerHeight-60+"px"})},u=function(){ee?d():s()};return a.current=u,o.a.createElement("div",{className:"md:w-1/2 w-full md:static timeline absolute transition-all duration-200 ease-out",style:l},o.a.createElement("div",{className:" h-full p-5 "},o.a.createElement("div",{className:" rounded-2xl md:pt-10 h-full bg-white"},o.a.createElement("div",{className:"line visible md:hidden mb-4 pt-4 pb-4",onTouchStart:function(e){Z=!0,te=e.touches[0].screenY-parseInt(l.top)},onTouchMove:function(e){Z&&i({top:e.touches[0].screenY-te+"px"})},onTouchEnd:function(){Z&&(Z=!1,ee?parseInt(l.top)>window.innerHeight/4?d():s():parseInt(l.top)<window.innerHeight/2+window.innerHeight/4?s():d(),te=0)},onMouseDown:u},o.a.createElement("div",{className:"w-20 rounded-md bg-gray-500 h-2 m-auto "})),o.a.createElement("div",{className:"p-1 pr-10 pl-10 pb-10"},o.a.createElement("h2",{className:"text-black-blue font-bold text-2xl"},"Timeline"),o.a.createElement("p",{className:"mt-2 text-gray-500 text-sm"},"\u201cIt's time to start living the life you've imagined\u201d",o.a.createElement("span",{className:"text-xs"},"- Henry James")),o.a.createElement("div",{className:"list mt-5"},o.a.createElement(K,{groups:n}))))))})),ne=Object(n.forwardRef)((function(e,t){return o.a.createElement(ae,Object.assign({},e,{forwardedRef:t}))}));var oe=function(){var e=o.a.useRef();return o.a.createElement("div",{className:"App md:flex bg-black-blue h-full md:justify-between"},o.a.createElement(F,{onTimelineControllerClicked:function(){e.current()}}),o.a.createElement(ne,{ref:e}))},re=(a(440),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,446)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))}),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||i.c,le=Object(i.d)(w,{todos:[],tags:y},ce);c.a.render(o.a.createElement(l.a,{store:le},o.a.createElement(oe,null)),document.getElementById("root")),re()}},[[215,1,2]]]);
//# sourceMappingURL=main.6bddde6f.chunk.js.map