(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),u=(n(15),n(2)),o=n(3),s=n(5),l=n(4),m=n(6),h=n(1),p={c:"Celsius",f:"Fahrenheit"},v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).onChange=n.onChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e){this.props.onTemp(e.target.value)}},{key:"render",value:function(){var e=this.props.temp,t=this.props.unit;return r.a.createElement("div",{className:"Temp"},r.a.createElement("h3",null,"Temperature in ",p[t],":"),r.a.createElement("input",{value:e,onChange:this.onChange}),r.a.createElement("span",null," \xb0",t))}}]),t}(a.Component);function b(e){return 9*e/5+32}function f(e){return 5*(e-32)/9}function C(e,t){var n=parseFloat(e);if(Number.isNaN(n))return"";var a=t(n);return(Math.round(1e3*a)/1e3).toString()}var d=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).onChangeC=n.onChangeC.bind(Object(h.a)(n)),n.onChangeF=n.onChangeF.bind(Object(h.a)(n)),n.state={temp:"",unit:"c"},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangeC",value:function(e){this.setState({temp:e,unit:"c"})}},{key:"onChangeF",value:function(e){this.setState({temp:e,unit:"f"})}},{key:"render",value:function(){var e=this.state.unit,t=this.state.temp,n="f"===e?C(t,f):t,a="c"===e?C(t,b):t;return r.a.createElement("div",null,r.a.createElement(v,{unit:"c",temp:n,onTemp:this.onChangeC}),r.a.createElement(v,{unit:"f",temp:a,onTemp:this.onChangeF}))}}]),t}(a.Component),j=(n(16),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"TConverter"},"Temperature Converter"),r.a.createElement("div",{className:"Converter"},r.a.createElement("div",{className:"image"}),r.a.createElement(d,null)))}}]),t}(a.Component));i.a.render(r.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.18582350.chunk.js.map