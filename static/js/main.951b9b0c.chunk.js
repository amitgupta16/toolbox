(this.webpackJsonptoolbox=this.webpackJsonptoolbox||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(9),l=n.n(a),j=(n(14),n(6)),i=n(2),d=n(3),r=n(5),b=n(4),h=n(0),x=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).onHandleClick=function(e){var t=e.target.name,n=e.target.value;c.setState(Object(j.a)({},t,n))},c.state={dia:null,pr:null,inDia:null},c}return Object(d.a)(n,[{key:"render",value:function(){var e,t,n=this.state.dia,c=this.state.pr,s=this.state.inDia;return null!=n&&null!=c&null!=s?(e=(c*Math.PI*Math.pow(n/20,2)).toFixed(2),t=(c*Math.PI*(Math.pow(n/20,2)-Math.pow(s/20,2))).toFixed(2)):(e="",t=""),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Cylinder Force Calculation."}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:"Enter Cylinder Dia (mm): "})}),Object(h.jsxs)("td",{children:[" ",Object(h.jsx)("input",{type:"number",name:"dia",style:{width:"50px"},onChange:this.onHandleClick})]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("label",{children:"Enter Shaft Dia (mm): "})," "]}),Object(h.jsxs)("td",{children:[Object(h.jsx)("input",{type:"number",name:"inDia",style:{width:"50px"},onChange:this.onHandleClick})," "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("label",{children:"Enter Pressure (bar): "})," "]}),Object(h.jsxs)("td",{children:[Object(h.jsx)("input",{type:"number",name:"pr",style:{width:"50px"},onChange:this.onHandleClick})," "]})]})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Cylinder Push (kgf): "}),Object(h.jsx)("label",{children:e}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Cylinder Pull (kgf): "}),Object(h.jsx)("label",{children:t})]})}}]),n}(s.a.Component),O=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).onHandleClick=function(e){var t=e.target.name,n=c.makeArray(t);c.setState(Object(j.a)({},t,n))},c.clearAll=function(e){console.log("Button Clicked");var t=[];t=document.getElementsByClassName("data");for(var n=0;n<t.length;n++)t[n].value="";c.setState({1:["","",""],2:["","",""],3:["","",""],4:["","",""],5:["","",""],6:["","",""],7:["","",""],8:["","",""],9:["","",""]})},c.state={1:["","",""],2:["","",""],3:["","",""],4:["","",""],5:["","",""],6:["","",""],7:["","",""],8:["","",""],9:["","",""]},c}return Object(d.a)(n,[{key:"makeArray",value:function(e){for(var t=[],n=document.getElementsByName(e),c=0;c<Object.keys(n).length;c++){var s=n[c].value;t.push(s)}return t}},{key:"calculateStepLength",value:function(e,t){return e.includes("")||t.includes("")?0:Math.pow(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)+Math.pow(t[2]-e[2],2),.5)}},{key:"render",value:function(){for(var e=0,t=1;t<Object.keys(this.state).length;t++){var n=this.state[t],c=this.state[t+1];e+=this.calculateStepLength(n,c)}return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Pipe Length Calculation."}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"x"}),Object(h.jsx)("th",{children:"y"}),Object(h.jsx)("th",{children:"z"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 1"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"1",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"1",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"1",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 2"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"2",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"2",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"2",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 3"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"3",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"3",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"3",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 4"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"4",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"4",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"4",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 5"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"5",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"5",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"5",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 6"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"6",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"6",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"6",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 7"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"7",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"7",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"7",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 8"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"8",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"8",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"8",style:{width:"50px"},onChange:this.onHandleClick})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Position 9"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"9",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"9",style:{width:"50px"},onChange:this.onHandleClick})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",className:"data",name:"9",style:{width:"50px"},onChange:this.onHandleClick})})]})]})]}),Object(h.jsx)("label",{children:"Total Length: "}),Object(h.jsx)("label",{children:e.toFixed(2)})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",onClick:this.clearAll,children:"Clear all fields"})})]})}}]),n}(s.a.Component),p=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).calculateLeak=function(e){var t=document.getElementById("refPress").value,n=document.getElementById("testPress").value,s=document.getElementById("temp").value,a=document.getElementById("hePurity").value/100,l=document.getElementById("leakRate").value;if(""!==t&&""!==n&&""!==s&&""!==a&&""!==l)if(a<.01||a>1)c.setState({err:"    Error: He Purity must be between 1 & 100"});else{var j=parseInt(l)/315e5*22400/102*(1+parseInt(s)/273),i=j*a*12.1/18.76*(Math.pow(parseInt(n)+1,2)-1)/(Math.pow(parseInt(t)+1,2)-1),d=Math.pow(9.2928e-9*j/(3.142*(Math.pow(parseInt(t)+1,2)-1)),.25),r=Math.pow(6.284*(parseInt(s)+273)*832e5/4,.5)*(Math.pow(d,3)/.3)*((parseInt(n)+1)*a)/6;c.setState({err:"",heLam:parseFloat(i).toExponential(3),dia:parseFloat(d).toExponential(3),heMol:parseFloat(r).toExponential(3)})}else c.setState({err:"    Error: Please fill all data first."})},c.state={err:"",heLam:"",dia:"",heMol:""},c}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this.state.heLam,n=this.state.dia,c=this.state.heMol;return""===t&&""===c||(e=(parseFloat(t)+parseFloat(c)).toExponential(3)),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Leak Rate Conversion"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Enter Working Pressure (bar)"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",style:{width:"50px"},id:"refPress"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Enter Test Pressure (bar)"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",style:{width:"50px"},id:"testPress"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Enter Test Temperature (\u2103)"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",style:{width:"50px"},id:"temp"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Enter He Purity (0-100%)"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",style:{width:"50px"},id:"hePurity"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Allowed R134a Leak (gm/yr)"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",style:{width:"50px"},id:"leakRate"})})]})]})}),Object(h.jsx)("button",{type:"button",onClick:this.calculateLeak,children:"Calculate"}),Object(h.jsx)("label",{style:{color:"red"},children:this.state.err}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"He Laminar Flow (mbar l/s):"}),Object(h.jsx)("label",{children:t}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Diameter of Leak (cm):"}),Object(h.jsx)("label",{children:n}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"He Molecular Flow (mbar l/s):"}),Object(h.jsx)("label",{children:c}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:[Object(h.jsx)("strong",{children:"Total He Leak Rate"})," (mbar l/s):"]}),Object(h.jsx)("label",{children:e})]})}}]),n}(s.a.Component),u=n(8),o=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).onClick=function(e){for(var t=parseFloat(document.getElementById("upper").value),n=parseFloat(document.getElementById("lower").value),s=document.getElementsByName("data"),a=[],l=0;l<s.length;l++)a[l]=parseFloat(s[l].value);""===t||""===n||a.includes(NaN)?c.setState({err:"Error: Please fill all data first."}):n>=t?c.setState({err:"Error: Lower Limit should be less than Upper Limit."}):c.setState({err:"",upper:t,lower:n,data:a})},c.state={err:"",upper:"",lower:"",data:["",""]},c}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.upper,t=this.state.lower,n=this.state.data,c=Math.max.apply(Math,Object(u.a)(n)),s=Math.min.apply(Math,Object(u.a)(n)),a=c-s,l=n.reduce((function(e,t){return e+t}),0)/n.length,j=0,i=0,d=0;if(!n.includes("")){for(var r=0,b=0;b<n.length;b++)r+=Math.pow(Math.abs(n[b]-l),2);i=(e-t)/(6*(j=Math.pow(r/(n.length-1),.5))),d=Math.min(e-l,l-t)/(3*j)}return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Process Capability"}),Object(h.jsx)("label",{children:"Upper Limit:"}),Object(h.jsx)("input",{type:"number",id:"upper",style:{width:"80px"}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Lower Limit:"}),Object(h.jsx)("input",{type:"number",id:"lower",style:{width:"80px"}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Enter data for n=30 samples"}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",name:"data",style:{width:"50px"}})})]})]})}),Object(h.jsx)("button",{type:"button",onClick:this.onClick,children:" Calculate"}),Object(h.jsx)("label",{style:{color:"red"},children:this.state.err}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Max:"}),Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:c})}),Object(h.jsx)("td",{children:"  |  "}),Object(h.jsx)("td",{children:"Min:"}),Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:s})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Range:"}),Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:a})}),Object(h.jsx)("td",{children:"  |  "}),Object(h.jsx)("td",{children:"Std Dev:"}),Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:j.toFixed(2)})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Cp:"}),Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:i.toFixed(2)})}),Object(h.jsx)("td",{children:"  |  "}),Object(h.jsx)("td",{children:"Cpk:"}),Object(h.jsx)("td",{children:Object(h.jsx)("label",{children:d.toFixed(2)})})]})]})})]})}}]),n}(s.a.Component);l.a.render(Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Tool-Box"}),Object(h.jsxs)("div",{className:"flex-container",children:[Object(h.jsx)("div",{children:Object(h.jsx)(x,{})}),Object(h.jsx)("div",{children:Object(h.jsx)(p,{})})]}),Object(h.jsxs)("div",{className:"flex-container",children:[Object(h.jsx)("div",{children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{children:Object(h.jsx)(o,{})})]})]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.951b9b0c.chunk.js.map