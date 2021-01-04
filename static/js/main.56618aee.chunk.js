(this["webpackJsonplife-counter"]=this["webpackJsonplife-counter"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),r=n.n(a),i=n(9),l=n.n(i),c=(n(15),n(3)),s=n(4),h=n(5),u=n(2),d=n(7),p=n(6),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={hp:null},o.handleInputChange=o.handleInputChange.bind(Object(u.a)(o)),o}return Object(h.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,o=t.name;this.setState(Object(c.a)({},o,n))}},{key:"render",value:function(){var e=this,t=this.props.encounter,n=100*t.currentHealth/t.maxHealth;return Object(o.jsxs)("div",{style:{flex:1,marginTop:20},children:[Object(o.jsxs)("p",{style:{color:"#fff",marginTop:2},children:[t.name," "]}),Object(o.jsxs)("p",{style:{color:"#fff",marginTop:2},children:[t.currentHealth," / ",t.maxHealth,Object(o.jsx)("input",{style:{borderWidth:0,borderBottomWidth:1,outline:"none",marginInline:10,paddingInline:5,borderColor:"#fff",backgroundColor:"#002245",color:"#fff"},min:1,name:"hp",type:"number",value:this.state.hp,onChange:this.handleInputChange}),Object(o.jsx)("button",{style:{backgroundColor:"#002245",borderWidth:0,color:"#ff3064",fontWeight:"bold",fontSize:18,outline:"none"},onClick:function(){e.props.updateHealth(e.props.index,parseInt(e.state.hp),"lower")},children:"Damage"}),Object(o.jsx)("button",{style:{backgroundColor:"#002245",borderWidth:0,color:"#1bc97f",fontWeight:"bold",fontSize:18,outline:"none"},onClick:function(){e.props.updateHealth(e.props.index,parseInt(e.state.hp),"up")},children:"Heal"}),Object(o.jsx)("button",{style:{marginLeft:150,backgroundColor:"#002245",borderWidth:0,color:"#16d3d4",fontWeight:"bold",fontSize:18,outline:"none"},onClick:function(){e.props.duplicate(e.props.index)},children:"Duplicate"}),Object(o.jsx)("button",{style:{marginLeft:10,backgroundColor:"#002245",borderWidth:0,color:"#5087ec",fontWeight:"bold",fontSize:18,outline:"none"},onClick:function(){e.props.remove(e.props.index)},children:"Remove"})]}),Object(o.jsxs)("div",{style:{position:"relative",width:300,height:30,backgroundColor:"grey"},children:[Object(o.jsx)("div",{style:{width:"".concat(n,"%"),height:"100%",backgroundColor:this.props.color||"#16d3d4"}}),Object(o.jsxs)("div",{style:{width:"100%",height:"100%",position:"absolute",top:0},children:[Object(o.jsx)("button",{style:{width:"50%",height:"100%",opacity:0},onClick:function(){return e.props.updateHealth(e.props.index,1,"lower")}}),Object(o.jsx)("button",{style:{width:"50%",height:"100%",opacity:0},onClick:function(){return e.props.updateHealth(e.props.index,1,"up")}})]})]})]})}}]),n}(r.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).updateHealth=function(e,t,n){var a=o.state.encounter;switch(n){case"up":parseInt(a[e].currentHealth)+t<=a[e].maxHealth&&(a[e].currentHealth=JSON.stringify(parseInt(a[e].currentHealth)+t)),o.setState({encounter:a},(function(){o.saveDataLocal(a)}));break;case"lower":parseInt(a[e].currentHealth)-t>=0&&(a[e].currentHealth=JSON.stringify(parseInt(a[e].currentHealth)-t)),o.setState({encounter:a},(function(){o.saveDataLocal(a)}))}},o.saveDataLocal=function(e){localStorage.setItem("listEncounter",JSON.stringify(e))},o.selectColorBar=function(e){return e>=o.state.color.length?o.state.color[e%o.state.color.length]:o.state.color[e]},o.clearAll=function(){o.setState({encounter:[]},(function(){o.saveDataLocal([])}))},o.state={name:"",heathPoint:1,encounter:JSON.parse(localStorage.getItem("listEncounter"))||[],color:["#ff3064","#16d3d4","#1bc97f","#fec925","#eb32bc","#5087ec"]},o.handleInputChange=o.handleInputChange.bind(Object(u.a)(o)),o.handleClick=o.handleClick.bind(Object(u.a)(o)),o}return Object(h.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,o=t.name;this.setState(Object(c.a)({},o,n))}},{key:"handleClick",value:function(e){var t=this,n=this.state.encounter;n.push({name:this.state.name,maxHealth:this.state.heathPoint,currentHealth:this.state.heathPoint}),this.setState({name:"",heathPoint:1,encounter:n},(function(){t.saveDataLocal(n)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return document.body.style.backgroundColor="#002245",Object(o.jsxs)("div",{style:{padding:20,display:"flex",flexDirection:"column"},children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{style:{padding:0,display:"flex",flexDirection:"column",backgroundColor:"#002245"},children:[Object(o.jsxs)("label",{style:{color:"#fff"},children:["Name :",Object(o.jsx)("input",{name:"name",type:"text",style:{marginTop:10,borderWidth:0,borderBottomWidth:1,outline:"none",marginInline:10,paddingInline:5,borderColor:"#fff",backgroundColor:"#002245",color:"#fff"},value:this.state.name,onChange:this.handleInputChange})]}),Object(o.jsxs)("label",{style:{color:"#fff"},children:["HealthPoint :",Object(o.jsx)("input",{min:1,name:"heathPoint",type:"number",style:{marginTop:20,width:105,borderWidth:0,borderBottomWidth:1,outline:"none",marginInline:10,paddingInline:5,borderColor:"#fff",backgroundColor:"#002245",color:"#fff"},value:this.state.heathPoint,onChange:this.handleInputChange})]}),Object(o.jsx)("button",{onClick:this.handleClick,style:{marginTop:10,backgroundColor:"#002245",width:100,borderWidth:0,color:"#16d3d4",fontWeight:"bold",fontSize:18,outline:"none"},children:"Create"})]}),Object(o.jsx)("button",{onClick:function(){return e.clearAll()},style:{marginTop:5,backgroundColor:"#002245",borderWidth:0,width:100,color:"#fec925",fontWeight:"bold",fontSize:18,outline:"none"},children:"Clear all"})]}),Object(o.jsx)("div",{children:this.state.encounter.map((function(t,n){return Object(o.jsx)(f,{encounter:t,index:n,color:e.selectColorBar(n),updateHealth:function(t,n,o){return e.updateHealth(t,n,o)},duplicate:function(t){var n=e.state.encounter;n.push(n[t]),e.setState({encounter:n},(function(){e.saveDataLocal(n)}))},remove:function(t){var n=e.state.encounter;n.splice(t,1),e.setState({encounter:n},(function(){e.saveDataLocal(n)}))}},n)}))})]})}}]),n}(r.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};l.a.render(Object(o.jsx)(r.a.StrictMode,{style:{display:"flex",height:"100%"},children:Object(o.jsx)(b,{style:{display:"flex",height:"100%"}})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.56618aee.chunk.js.map