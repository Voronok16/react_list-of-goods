(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),l=n(1),c=n(4),i=n(5),u=n(7),d=n(6),h=n(8);var g=function(e){var t=e.showGoods,n=e.reversGoods,o=e.resetScreen,r=e.sortAlphabet,s=e.sortLength,l=e.handleChangeSelect,c=e.isStarted,i=e.selectedValue,u=e.goods,d=e.goodsOriginal;return a.a.createElement("div",null,a.a.createElement("h1",null,"Goods "),c&&a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:n},"Reverse"),a.a.createElement("button",{type:"button",onClick:r},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:s},"Sort by length"),a.a.createElement("select",{value:i,onChange:l},d.map(function(e,t){return a.a.createElement("option",{value:t},t+1)})),a.a.createElement("button",{type:"button",onClick:o},"Reset"),a.a.createElement("ol",null,u.map(function(e){return a.a.createElement("li",null,e)}))),!c&&a.a.createElement("button",{type:"button",onClick:t},"START"))},b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={goodsOriginal:b,goods:[],isStarted:!1,selectedValue:0},n.showGoods=function(){n.setState({goods:[].concat(b),isStarted:!0})},n.resetScreen=function(){n.setState({goods:[].concat(b),selectedValue:0})},n.reversGoods=function(){n.setState(function(e){return{goods:Object(l.a)(e.goods).reverse()}})},n.sortAlphabet=function(){n.setState(function(e){return{goods:Object(l.a)(e.goods).sort()}})},n.sortLength=function(){n.setState(function(e){return{goods:e.goods.sort(function(e,t){return e.length-t.length})}})},n.handleChangeSelect=function(e){n.setState({selectedValue:e.target.value,goods:[].concat(b).filter(function(t){return t.length>=Number(e.target.value)+1})})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(g,{sortAlphabet:this.sortAlphabet,sortLength:this.sortLength,resetScreen:this.resetScreen,reversGoods:this.reversGoods,showGoods:this.showGoods,handleChangeSelect:this.handleChangeSelect,isStarted:this.state.isStarted,selectedValue:this.state.selectedValue,goods:this.state.goods,goodsOriginal:this.state.goodsOriginal})}}]),t}(a.a.Component);s.a.render(a.a.createElement(p,{test:123}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.7de70970.chunk.js.map