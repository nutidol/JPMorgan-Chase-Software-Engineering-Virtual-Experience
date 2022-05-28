(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),o=a.n(i),c=a(1),s=a(2),p=a(4),u=a(3),l=a(5),d=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"getData",value:function(t){var a=new XMLHttpRequest;a.open("GET",e.API_URL,!1),a.onload=function(){200===a.status?t(JSON.parse(a.responseText)):alert("Request failed")},a.send()}}]),e}();d.API_URL="http://localhost:8080/query?id=1";var b=d,m=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"generateRow",value:function(e){var t=(e[0].top_ask.price+e[0].top_bid.price)/2,a=(e[1].top_ask.price+e[1].top_bid.price)/2,r=t/a;return{price_abc:t,price_def:a,ratio:r,upper_bound:1.05,lower_bound:.95,trigger_alert:r>1.05||r<.95?r:void 0,timestamp:e[0].timestamp>e[1].timestamp?e[0].timestamp:e[1].timestamp}}}]),e}(),v=(a(13),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).table=void 0,a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("perspective-viewer")}},{key:"componentDidMount",value:function(){var e=document.getElementsByTagName("perspective-viewer")[0];window.perspective&&window.perspective.worker()&&(this.table=window.perspective.worker().table({price_abc:"float",price_def:"float",ratio:"float",timestamp:"date",upper_bound:"float",lower_bound:"float",trigger_alert:"float"})),this.table&&(e.load(this.table),e.setAttribute("view","y_line"),e.setAttribute("row-pivots",'["timestamp"]'),e.setAttribute("columns",'["ratio", "upper_bound", "upper_bound", "trigger_alert"]'),e.setAttribute("aggregates",JSON.stringify({price_abc:"avg",price_def:"avg",ratio:"avg",upper_bound:"avg",lower_bound:"avg",trigger_alert:"avg",timestamp:"distinct count"})))}},{key:"componentDidUpdate",value:function(){this.table&&this.table.update([m.generateRow(this.props.data)])}}]),t}(r.Component)),f=(a(15),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={data:[],showGraph:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderGraph",value:function(){if(this.state.showGraph)return n.a.createElement(v,{data:this.state.data})}},{key:"getDataFromServer",value:function(){var e=this,t=0,a=setInterval(function(){b.getData(function(t){e.setState({data:t,showGraph:!0})}),++t>1e3&&clearInterval(a)},100)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},"Bank Merge & Co Task 3"),n.a.createElement("div",{className:"App-content"},n.a.createElement("button",{className:"btn btn-primary Stream-button",onClick:function(){e.getDataFromServer()}},"Start Streaming Data"),n.a.createElement("div",{className:"Graph"},this.renderGraph())))}}]),t}(r.Component));a(17),a(19);o.a.render(n.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(21)}},[[8,2,1]]]);
//# sourceMappingURL=main.122808c9.chunk.js.map