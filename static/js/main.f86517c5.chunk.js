(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),l=(n(14),n(6)),c=n(1),h=n(2),s=n(4),u=n(3),d=n(5),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",phone:""},n.handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onCreate(n.state),n.setState({name:"",phone:""})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"\uc774\ub984",value:this.state.name,onChange:this.handleChange,name:"name"}),o.a.createElement("input",{placeholder:"\uc804\ud654\ubc88\ud638",value:this.state.phone,onChange:this.handleChange,name:"phone"}),o.a.createElement("button",{type:"submit"},"\ub4f1\ub85d"))}}]),t}(a.Component),m=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={editing:!1,name:"",phone:""},n.handleRemove=function(){var e=n.props,t=e.info;(0,e.onRemove)(t.id)},n.handleToggleEdit=function(){var e=n.state.editing;n.setState({editing:!e})},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(l.a)({},a,o))},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.info,o=n.onUpdate;!t.editing&&this.state.editing&&this.setState({name:a.name,phone:a.phone}),t.editing&&!this.state.editing&&o(a.id,{name:this.state.name,phone:this.state.phone})}},{key:"shouldComponentUpdate",value:function(e,t){return!(!this.state.editing&&!t.editing&&e.info===this.props.info)}},{key:"render",value:function(){console.log("render PhoneInfo "+this.props.info.id);var e={border:"1px solid black",padding:"8px",margin:"8px"};if(this.state.editing)return o.a.createElement("div",{style:e},o.a.createElement("div",null,o.a.createElement("input",{placeholder:"\uc774\ub984",value:this.state.name,onChange:this.handleChange,name:"name"})),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"\uc804\ud654\ubc88\ud638",value:this.state.phone,onChange:this.handleChange,name:"phone"})),o.a.createElement("button",{onClick:this.handleToggleEdit},"mod"),o.a.createElement("button",{onClick:this.handleRemove},"del"));var t=this.props.info,n=t.name,a=t.phone;return o.a.createElement("div",{style:e},o.a.createElement("div",null,o.a.createElement("b",null,n)),o.a.createElement("div",null,a),o.a.createElement("button",{onClick:this.handleToggleEdit},"mod"),o.a.createElement("button",{onClick:this.handleRemove},"del"))}}]),t}(a.Component);m.defaultProps={info:{name:"\uc774\ub984",phone:"010-0000-0000",id:0}};var f=m,v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.data!==this.props.data}},{key:"render",value:function(){console.log("render PhoneInfoList");var e=this.props,t=e.data,n=e.onRemove,a=e.onUpdate,r=t.map((function(e){return o.a.createElement(f,{key:e.id,info:e,onRemove:n,onUpdate:a})}));return o.a.createElement("div",null,r)}}]),t}(a.Component);v.defaultProps={data:[],onRemove:function(){return console.warn("onRemove not defined")},onUpdate:function(){return console.warn("onUpdate not defined")}};var g=v;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).id=2,n.state={information:[{id:0,name:"\uae40\ubbfc\uc900",phone:"010-0000-0000"},{id:1,name:"\ud64d\uae38\ub3d9",phone:"010-0000-0001"}],keyword:""},n.handleChange=function(e){n.setState({keyword:e.target.value})},n.handleCreate=function(e){var t=n.state.information;n.setState({information:t.concat(O({id:n.id++},e))}),console.log(e)},n.handleRemove=function(e){var t=n.state.information;n.setState({information:t.filter((function(t){return t.id!==e}))})},n.handleUpdate=function(e,t){var a=n.state.information;n.setState({information:a.map((function(n){return e===n.id?O({},n,{},t):n}))})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.information,n=e.keyword,a=t.filter((function(e){return-1!==e.name.indexOf(n)}));return o.a.createElement("div",null,o.a.createElement(p,{onCreate:this.handleCreate}),o.a.createElement("p",null,o.a.createElement("input",{placeholder:"\uac80\uc0c9\ud560 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:this.handleChange,value:n})),o.a.createElement(g,{data:a,onRemove:this.handleRemove,onUpdate:this.handleUpdate}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f86517c5.chunk.js.map