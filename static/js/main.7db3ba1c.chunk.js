(this["webpackJsonpsn-ts"]=this["webpackJsonpsn-ts"]||[]).push([[0],{12:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3tpU9",dialogsItems:"Dialogs_dialogsItems__ienY8",messages:"Dialogs_messages__3m0ZH",message:"Dialogs_message__3pa39",item:"Dialogs_item__2lstC",ActiveItem:"Dialogs_ActiveItem__tWhqB"}},16:function(e,t,s){},24:function(e,t,s){e.exports={photo:"Users_photo__qY-Gi",selectedPage:"Users_selectedPage__mzLTp"}},35:function(e,t,s){e.exports={header:"Header_header__1riTh"}},36:function(e,t,s){},37:function(e,t,s){e.exports={info:"ProfileInfo_info__1Kbs0"}},38:function(e,t,s){e.exports={item:"Post_item__3RXIq"}},48:function(e,t,s){},49:function(e,t,s){},6:function(e,t,s){e.exports={nav:"NavBar_nav__1i1C_",item:"NavBar_item__1iqZI",ActiveItem:"NavBar_ActiveItem__2m0l5"}},74:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(17),r=s.n(c),i=(s(48),s(49),s(35)),o=s.n(i),u=s(0),j=function(){return Object(u.jsx)("div",{className:o.a.header,children:Object(u.jsx)("img",{src:"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"})})},l=s(11),d=s(6),b=s.n(d),O=function(){return Object(u.jsxs)("div",{className:b.a.nav,children:[Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/profile",activeClassName:b.a.ActiveItem,className:b.a.item,children:"Profile"})}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/dialogs",activeClassName:b.a.ActiveItem,className:b.a.item,children:"Messages"})}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/news",activeClassName:b.a.ActiveItem,className:b.a.item,children:"News"})}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/users",activeClassName:b.a.ActiveItem,className:b.a.item,children:"Users"})}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/music",activeClassName:b.a.ActiveItem,className:b.a.item,children:"Music"})}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"settings",activeClassName:b.a.ActiveItem,className:b.a.item,children:"Settings"})})]})},g=s(36),h=s.n(g),m=s(37),p=s.n(m),x=function(){return Object(u.jsx)("div",{className:p.a.info,children:"ava+description"})},f=s(75),v=s(41),P=s(4),T={posts:[{message:"\u042f \u0440\u0443\u0441\u0441\u043a\u0438\u0439",id:Object(f.a)(),likesCount:12},{message:"I am not Russian",id:Object(f.a)(),likesCount:1},{message:"I am learn React",id:Object(f.a)(),likesCount:23}],newPostText:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s={message:e.newPostText,id:Object(f.a)(),likesCount:0},n=Object(P.a)({},e);return n.posts=Object(v.a)(e.posts),n.posts.push(s),n.newPostText="",n;case"UPDATE-NEW-POST-TEXT":var a=Object(P.a)({},e);return a.newPostText=t.NewText,a;default:return e}},N={dialogsData:[{id:Object(f.a)(),name:"Sasha"},{id:Object(f.a)(),name:"Viktor"},{id:Object(f.a)(),name:"Lesha"},{id:Object(f.a)(),name:"Elena"},{id:Object(f.a)(),name:"Dima"},{id:Object(f.a)(),name:"Ivan"}],messagesData:[{message:"Hi",id:Object(f.a)()},{message:"How are you?",id:Object(f.a)()},{message:"Lets drink beer today",id:Object(f.a)()}],newMessageText:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-TEXT":return e.newMessageText=t.body,Object(P.a)({},e);case"SEND-MESSAGE":var s=e.newMessageText;return e.messagesData.push({message:s,id:Object(f.a)()}),e.newMessageText="",Object(P.a)({},e);default:return e}},S={},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e},_=(Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),Object(f.a)(),function(e){return{type:"UPDATE-NEW-POST-TEXT",NewText:e}}),E=s(16),D=s.n(E),A=s(38),k=s.n(A),y=function(e){return Object(u.jsxs)("div",{className:k.a.item,children:[Object(u.jsx)("img",{src:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg"}),e.message,Object(u.jsx)("br",{}),e.likesCount," likes"]})},I=function(e){var t=e.posts.map((function(e){return Object(u.jsx)(y,{message:e.message,likesCount:e.likesCount})})),s=a.a.createRef();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:D.a.title,children:"My Posts"}),Object(u.jsx)("div",{className:D.a.area,children:Object(u.jsx)("textarea",{onChange:function(t){e.updateNewPostText(t.currentTarget.value)},value:e.newPostText,ref:s})}),Object(u.jsx)("div",{className:D.a.addButton,children:Object(u.jsx)("button",{onClick:function(){e.addPost()},children:"Add Post"})}),Object(u.jsx)("div",{className:D.a.posts,children:t})]})},M=s(13),L=Object(M.b)((function(e){return{posts:e.ProfilePage.posts,newPostText:e.ProfilePage.newPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},updateNewPostText:function(t){e(_(t||""))}}}))(I),F=function(e){return Object(u.jsxs)("div",{className:h.a.content,children:[Object(u.jsx)(x,{}),Object(u.jsx)(L,{})]})},R=s(2),z=function(){return Object(u.jsx)("span",{children:"News"})},W=function(){return Object(u.jsx)("span",{children:"Settings"})},B=function(){return Object(u.jsx)("span",{children:"Music"})},G=s(12),q=s.n(G),X=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.b,{className:q.a.item,activeClassName:q.a.ActiveItem,to:"/dialogs/"+e.id,children:[e.name," "]})})},H=function(e){return Object(u.jsx)("div",{className:q.a.message,children:e.message})},J=function(e){var t=e.dialogsData.map((function(e){return Object(u.jsx)(X,{name:e.name,id:e.id},e.id)})),s=e.messagesData.map((function(e){return Object(u.jsx)(H,{message:e.message},e.id)})),n=e.newMessageText;return Object(u.jsxs)("div",{className:q.a.dialogs,children:[Object(u.jsx)("div",{className:q.a.dialogsItems,children:t}),Object(u.jsxs)("div",{className:q.a.messages,children:[Object(u.jsx)("div",{children:s}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{value:n,onChange:function(t){e.onNewMessageChange(t.currentTarget.value)},placeholder:"Enter your message"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.onSendMessageClick()},children:"Send"})})]})]})]})},Y=Object(M.b)((function(e){return{dialogsData:e.DialogsPage.dialogsData,messagesData:e.DialogsPage.messagesData,newMessageText:e.DialogsPage.newMessageText}}),(function(e){return{onNewMessageChange:function(t){e({type:"UPDATE-NEW-MESSAGE-TEXT",body:t})},onSendMessageClick:function(){e({type:"SEND-MESSAGE"})}}}))(J),Z=s(39),K=s(40),V=s(43),Q=s(42),$={users:[],PageSize:100,totalUsersCount:0,currentPage:1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":var s=Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.UserId?Object(P.a)(Object(P.a)({},e),{},{isFollowed:!0}):e}))});return s;case"UNFOLLOW":var n=Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.UserId?Object(P.a)(Object(P.a)({},e),{},{isFollowed:!1}):e}))});return n;case"SET-USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.Page});case"SET-TOTAL-USERS-COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.usersCount});default:return e}},te=s(23),se=s.n(te),ne=s.p+"static/media/user-png-image-9.ab7efdc7.png",ae=s(24),ce=s.n(ae),re=function(e){for(var t=Math.ceil(e.totalUsersCount/e.PageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(u.jsxs)("div",{children:[e.users.map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:null!=t.photos.small?t.photos.small:ne,className:ce.a.photo})})}),Object(u.jsx)("span",{children:Object(u.jsx)("div",{children:t.isFollowed?Object(u.jsx)("button",{onClick:function(){return e.unFollow(t.id)},children:"Unfollow"}):Object(u.jsx)("button",{onClick:function(){return e.follow(t.id)},children:"Follow"})})}),Object(u.jsxs)("span",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{children:t.status})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{children:"u.location.city"}),Object(u.jsx)("div",{children:"u.location.country"})]})]})]},t.id)})),Object(u.jsx)("div",{children:s.map((function(t){return Object(u.jsx)("span",{onClick:function(s){e.onPageChanged(t)},className:e.currentPage===t?ce.a.selectedPage:"",children:t})}))})]})},ie=function(e){Object(V.a)(s,e);var t=Object(Q.a)(s);function s(){var e;Object(Z.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),se.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.PageSize)).then((function(t){e.props.setUsers(t.data.items)}))},e}return Object(K.a)(s,[{key:"componentDidMount",value:function(){var e=this;se.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.PageSize)).then((function(t){e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(u.jsx)(re,{users:this.props.users,setUsers:this.props.setUsers,currentPage:this.props.currentPage,follow:this.props.follow,PageSize:this.props.PageSize,setTotalUsersCount:this.props.setTotalUsersCount,setCurrentPage:this.props.setCurrentPage,totalUsersCount:this.props.totalUsersCount,unFollow:this.props.unFollow,onPageChanged:this.onPageChanged})}}]),s}(a.a.Component),oe=Object(M.b)((function(e){return{users:e.UsersPage.users,PageSize:e.UsersPage.PageSize,totalUsersCount:e.UsersPage.totalUsersCount,currentPage:e.UsersPage.currentPage}}),(function(e){return{follow:function(t){return e(function(e){return{type:"FOLLOW",UserId:e}}(t))},unFollow:function(t){return e(function(e){return{type:"UNFOLLOW",UserId:e}}(t))},setUsers:function(t){return e(function(e){return{type:"SET-USERS",users:e}}(t))},setCurrentPage:function(t){return e(function(e){return{type:"SET-CURRENT-PAGE",Page:e}}(t))},setTotalUsersCount:function(t){return e(function(e){return{type:"SET-TOTAL-USERS-COUNT",usersCount:e}}(t))}}}))(ie);var ue=function(e){var t=e.store.getState();return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(R.a,{path:"/profile",render:function(){return Object(u.jsx)(F,{dispatch:e.dispatch,store:e.store,ProfilePage:t.ProfilePage})}}),Object(u.jsx)(R.a,{path:"/dialogs",render:function(){return Object(u.jsx)(Y,{})}}),Object(u.jsx)(R.a,{path:"/news",render:function(){return Object(u.jsx)(z,{})}}),Object(u.jsx)(R.a,{path:"/users",render:function(){return Object(u.jsx)(oe,{})}}),Object(u.jsx)(R.a,{path:"/music",render:function(){return Object(u.jsx)(B,{})}}),Object(u.jsx)(R.a,{path:"/settings",render:function(){return Object(u.jsx)(W,{})}})]})]})})},je=s(25),le=Object(je.a)({ProfilePage:C,DialogsPage:w,UsersPage:ee,SideBar:U}),de=Object(je.b)(le);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(M.a,{store:de,children:Object(u.jsx)(ue,{dispatch:de.dispatch.bind(de),store:de})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.7db3ba1c.chunk.js.map