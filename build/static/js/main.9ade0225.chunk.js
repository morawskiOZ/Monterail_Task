(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e){e.exports={a:[{label:"title",name:"title",placeholder:"Make it short and clear",type:"text",required:!0},{label:"description",name:"description",placeholder:"Write about your event, be creative",required:!0,description:"Max length 140 character",counter:!0,maxLength:140},{label:"category",name:"category_id",placeholder:"Select category (skills, interests, location)",options:[{id:0,name:"Cycling"},{id:1,name:"Hiking"},{id:2,name:"Cooking"},{id:3,name:"Rock climbing"},{id:4,name:"Yoga"},{id:5,name:"Fencing"},{id:6,name:"Swimming"},{id:7,name:"Badminton"},{id:8,name:"Running"},{id:9,name:"Dance"},{id:10,name:"Other"}]},{label:"payment",name:"paid_event",type:"radio",multiElement:!0,elements:[{type:"radio",name:"paid_event",information:"Free event",value:!1},{type:"radio",name:"paid_event",information:"Paid event",value:!0}],multiFields:[{type:"number",name:"event_fee",placeholder:"Fee",information:"$",condition:"paid_event"}]},{type:"number",name:"reward",placeholder:"Number",information:"reward points for attendance",label:"reward",multiElement:!0}],b:[{name:"coordinator.id",placeholder:"Email",label:"responsible",required:!0,defaultValue:3,options:[{id:0,name:"Daniel",lastname:"Mitchell"},{id:1,name:"Albert",lastname:"Alexander"},{id:2,name:"Philip",lastname:"Hughes"},{id:3,name:"Walter",lastname:"Nelson"},{id:4,name:"Ashley",lastname:"Hernandez"},{id:5,name:"Donna",lastname:"Washington"},{id:6,name:"Andrew",lastname:"White"},{id:7,name:"Sharon",lastname:"Allen"},{id:8,name:"Russell",lastname:"Parker"},{id:9,name:"Janet",lastname:"Stewart"}]},{type:"email",name:"coordinator.email",label:"Email",placeholder:"Email"}],c:[{type:"text",name:"duration",label:"duration",placeholder:"Number",information:"hour",multiElement:!0}]}},,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),l=a(7),o=a.n(l),c=(a(19),a(4)),u=a(2),s=function(e,t){var a=e.split(":"),r=Object(u.a)(a,2),i=r[0],l=r[1];return t===n.AM?12===parseFloat(i)?"00:".concat(l):e:12===parseFloat(i)?e:"".concat(parseFloat(i)+12,":").concat(l)},m=a(8),p=a(9),d=a(11),E=a(10),h=a(12),v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e)))._input=void 0,a.lastVal=void 0,a.input=void 0,a.state={time:a.props.initTime||""},a.lastVal="",a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;!this.props.disabled&&this.props.mountFocus&&setTimeout(function(){e._input.focus()},0)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.mountFocus&&setTimeout(function(){e._input.focus()},0)}},{key:"componentWillReceiveProps",value:function(e){e.initTime&&this.onChangeHandler(e.initTime)}},{key:"isValid",value:function(e){var t=e.split(":"),a=Object(u.a)(t,2),n=a[0],r=a[1];if(!/^\d{0,2}?:?\d{0,2}$/.test(e))return!1;var i,l=Number(n),o=Number(r);if(i=l,!(Number.isInteger(i)&&i>=0&&i<13)||!function(e){return Number.isInteger(e)&&l>=0&&l<13||Number.isNaN(e)}(o))return!1;if(o<10&&Number(r[0])>5)return!1;var c=-1!==e.indexOf(":")?e.split(":"):[e];return!(c[0]&&c[0].length&&(parseInt(c[0],10)<0||parseInt(c[0],10)>13))&&!(c[1]&&c[1].length&&(parseInt(c[1],10)<0||parseInt(c[1],10)>59))}},{key:"onChangeHandler",value:function(e){if(e!==this.state.time&&this.isValid(e)){if(2===e.length&&3!==this.lastVal.length&&-1===e.indexOf(":")&&(e+=":"),2===e.length&&3===this.lastVal.length&&(e=e.slice(0,1)),e.length>5)return!1;this.lastVal=e,this.setState({time:e}),5===e.length&&this.props.onTimeChange(e)}}},{key:"getType",value:function(){return this.props.type?this.props.type:"tel"}},{key:"onFocusHandler",value:function(e){e.target.select()}},{key:"render",value:function(){var e=this;return i.a.createElement("input",Object.assign({},this.props.input,{name:this.props.name?this.props.name:void 0,className:this.props.className,type:this.getType(),disabled:this.props.disabled,placeholder:this.props.placeholder,value:this.state.time,onChange:function(t){return e.onChangeHandler(t.target.value)},onFocus:this.onFocusHandler,ref:function(t){return e._input=t}}))}}]),t}(r.Component);!function(e){e.AM="AM",e.PM="PM"}(n||(n={}));var f,b,I=function(e){var t=e.input,a=e.meta,l=(a.active,a.error),o=a.touched,c=e.label,m=Object(r.useState)(""),p=Object(u.a)(m,2),d=p[0],E=p[1],h=Object(r.useState)(""),f=Object(u.a)(h,2),b=f[0],I=f[1],N=Object(r.useState)(n.AM),F=Object(u.a)(N,2),g=F[0],O=F[1],y=function(e){var a=e.target.value;O(a),d&&b&&t.onChange("".concat(d,"T").concat(s(b,a)))};return i.a.createElement("div",{className:"FormInput"},i.a.createElement("label",{className:"FormInput--firstColumn FormInput-label"},c," ",i.a.createElement("span",{className:"FormInput--required"},"\xa0*")),i.a.createElement("div",{className:"FormInput--secondColumn"},i.a.createElement("div",{className:"FormInput-multiElementRow FormInput-multiElementRow--bigger ".concat(l&&o?"FormInput-input--error":"")},i.a.createElement("input",Object.assign({},t,{type:"date",onChange:function(e){var a=e.target.value;if(E(a),b){var n="".concat(a,"T").concat(s(b,g));t.onChange(n)}},value:d,className:"FormInput-input ".concat(d?"":"FormInput-input--placeholder")})),i.a.createElement("span",null,"at"),i.a.createElement(v,{onTimeChange:function(e){if(I(e),d){var a="".concat(d,"T").concat(s(e,g));t.onChange(a)}},placeholder:"--:--",input:t,className:"FormInput-input FormInput-input--verySmall"}),i.a.createElement("input",Object.assign({},t,{type:"radio",name:"format",value:n.AM,checked:g===n.AM,onChange:y,required:!0,className:"FormInput-input FormInput-input--radio"})),i.a.createElement("span",{className:"FormInput-description"}," AM "),i.a.createElement("input",Object.assign({},t,{type:"radio",name:"format",value:n.PM,checked:g===n.PM,onChange:y,className:"FormInput-input FormInput-input--radio"})),i.a.createElement("span",{className:"FormInput-description"}," PM"))),i.a.createElement("div",{className:"FormInput--thirdColumn"},l&&o&&i.a.createElement("div",{className:"FormInput-error FormInput-error--arrow"},l)))},N=function(e){return e?void 0:"Field Required"},F=function(e){return e?void 0:"All time and date fields required"},g=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce(function(t,a){return t||a(e)},void 0)}},O=function(e){var t=function(e){return new Date(e+":00Z")}(e);return new Date<t?void 0:"You cannot pick the date in the past"},y=function(e){return/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(e)?void 0:"E-mail is not in a valid format"};!function(e){e.TITLE="title",e.EVENT_FEE="event_fee",e.PAID_EVENT="paid_event",e.DESCRIPTION="description",e.CATEGORY_ID="category_id",e.COORDINATOR_EMAIL="coordinator.email",e.COORDINATOR_ID="coordinator.id",e.DURATION="duration",e.DATE="date",e.REWARD="reward"}(f||(f={})),function(e){e.TEXT="text",e.RADIO="radio",e.NUMBER="number",e.EMAIL="email",e.DATE="date"}(b||(b={}));var T=function(e,t){var a,n=[];switch(e){case f.TITLE:n.push(N);break;case f.DESCRIPTION:n.push(N),n.push((a=140,function(e){return e.length<a?void 0:"Description cannot be longer than ".concat(a," characters")}));break;case f.DATE:n.push(F),n.push(O);break;case f.COORDINATOR_ID:n.push(N);break;case f.EVENT_FEE:t.paid_event&&n.push(N);break;case f.COORDINATOR_EMAIL:t.coordinator&&t.coordinator.email&&n.push(y)}return n},A=function(e,t){switch(e){case f.DURATION:return t/3600;default:return t}},R=a(3),D=a(5),k=(a(20),function(e){var t=e.children,a=e.title,n=e.className;return i.a.createElement("div",{className:"FormBlock ".concat(n)},i.a.createElement("h4",{className:"FormBlock-title"},a,i.a.createElement("div",{className:"FormBlock-line"})),t)}),C=a(1),_=function(e,t,a){var n=["FormInput-input"];switch(a&&a.error&&a.touched&&n.push("FormInput-input--error"),e){case f.DESCRIPTION:n.push("FormInput-input--textarea");break;case f.CATEGORY_ID:case f.COORDINATOR_ID:var r=function(e,t){return e.reduce(function(e,t){if(e)return e[t]},t)}(function(e){switch(e){case f.COORDINATOR_ID:return["coordinator","id"];case f.COORDINATOR_EMAIL:return["coordinator","email"];default:return[e]}}(e),t);n.push("FormInput-input--select"),t&&!r&&n.push("FormInput-input--placeholder");break;case f.PAID_EVENT:n.push("FormInput-input--radio");break;case f.DURATION:case f.REWARD:case f.EVENT_FEE:n.push("FormInput-input--small")}return n.join(" ")},w=function(e,t,a,n){var r=e.name,l=e.label,o=e.type,c=e.placeholder,s=e.options,m=e.elements,p=e.condition,d=e.information,E=_(r,a,n);switch(r){case f.DESCRIPTION:return i.a.createElement("textarea",Object.assign({},t,{placeholder:c,className:E}));case f.CATEGORY_ID:return i.a.createElement("select",Object.assign({},t,{placeholder:c,className:E,value:a[r]||""}),c&&i.a.createElement("option",{value:"",hidden:!0},c),s.map(function(e){return i.a.createElement("option",{value:e.id,key:e.id,id:"".concat(e.id)},e.name)}));case f.COORDINATOR_ID:var h=function(e,t){return[e.find(function(e){return e.id===t}),e.filter(function(e){return e.id!==t})]}(s,3),v=Object(u.a)(h,2),b=v[0],I=v[1];return i.a.createElement("select",Object.assign({},t,{className:E}),i.a.createElement("option",{value:"",disabled:!0},"Me"),i.a.createElement("option",{value:b.id,key:b.id,id:"".concat(b.id)},b.name," ",b.lastname),i.a.createElement("option",{value:"",disabled:!0},"Others"),I.map(function(e){return i.a.createElement("option",{value:e.id,key:e.id,id:"".concat(e.id)},e.name," ",e.lastname)}));case f.PAID_EVENT:return m.map(function(e,n){return i.a.createElement(i.a.Fragment,{key:n},i.a.createElement("input",Object.assign({},t,{type:e.type,name:e.name,value:e.value,checked:e.value===a[r],className:E})),e.information&&i.a.createElement("span",{className:"FormInput-description"},e.information))});case f.DURATION:case f.REWARD:return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",Object.assign({},t,{type:o,name:r,label:l,value:t.value?A(r,t.value):t.value,placeholder:c,className:E})),d&&i.a.createElement("span",{className:"FormInput-description FormInput-description--bigGap"},d));case f.EVENT_FEE:return a[p]?i.a.createElement("input",Object.assign({},t,{type:o,placeholder:c,className:E})):void 0;default:return i.a.createElement("input",Object.assign({},t,{type:o,placeholder:c,className:E}))}},j=function(e,t){switch(t){case f.EVENT_FEE:case f.CATEGORY_ID:case f.REWARD:return parseFloat(e);case f.PAID_EVENT:return"true"===e;case f.DURATION:return 60*parseFloat(e)*60;default:return e}},M=(a(21),function(e){var t=Object(C.a)({},e),a=t.name,n=t.label,l=t.type,o=t.values,u=t.description,s=t.counter,m=t.maxLength,p=t.condition,d=t.required,E=t.multiElement,h=t.multiFields,v=t.form,f=t.defaultValue;return p&&!o[p]?null:i.a.createElement(R.a,{name:a,validate:g.apply(void 0,Object(c.a)(T(a,o))),parse:j,type:l,defaultValue:f,key:"Field"+a},function(e){var a=e.input,l=e.meta,p=w(t,a,o,l),f=h?function(e,t,a){return e.map(function(e){var n=e.name,l=e.type,o=e.condition;return Object(r.useEffect)(function(){return function(){o&&!t[o]&&t[n]&&a.change(n,null)}}),o&&!t[o]?null:i.a.createElement(R.a,{name:n,validate:g.apply(void 0,Object(c.a)(T(n,t))),parse:j,type:l,key:"Field"+n},function(a){var n=a.input,r=a.meta,l=w(e,n,t);return i.a.createElement("div",{className:""},l,r.error&&r.touched&&i.a.createElement("div",{className:"FormInput--thirdColumn"},i.a.createElement("span",null,r.error)))})})}(h,o,v):[];return i.a.createElement("div",{className:"FormInput"},n&&i.a.createElement("label",{className:"FormInput--firstColumn FormInput-label"},n,d&&i.a.createElement("span",{className:"FormInput--required"},"\xa0*")),i.a.createElement("div",{className:"FormInput--secondColumn"},i.a.createElement("div",{className:E?"FormInput-multiElementRow":""},p,E&&h&&f),u&&p&&i.a.createElement("div",{className:"FormInput-descriptionRow"},i.a.createElement("span",null," ",u," "),s&&m&&i.a.createElement("span",null,a.value.length,"/ ",m))),l.error&&l.touched&&i.a.createElement("div",{className:"FormInput--thirdColumn"},i.a.createElement("div",{className:"FormInput-error FormInput-error--arrow"},l.error)))})}),V=(a(22),function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];return a?i.a.createElement(k,{title:"Success",className:"App-content--middle FormBlock--success"},i.a.createElement("span",{className:"FormBlock-description"},"Event has been created. ")):i.a.createElement("div",{className:"MainForm App-content--middle"},i.a.createElement(R.b,{mutators:{resetFee:function(e,t,a){a.changeValue(t,f.EVENT_FEE,function(){return""})}},onSubmit:function(e){var t=function(e){var t=e;for(var a in t)null===t[a]&&delete t[a];return t}(e);console.log(t),n(!0)},render:function(e){var t=e.handleSubmit,a=e.form,n=e.submitting,r=e.pristine,l=e.values;return i.a.createElement("form",{onSubmit:t,className:"MainForm-form"},i.a.createElement(k,{title:"About"},D.a.map(function(e){return i.a.createElement(M,{key:e.name,name:e.name,label:e.label,type:e.type,placeholder:e.placeholder,description:e.description,counter:e.counter,maxLength:e.maxLength,options:e.options,elements:e.elements,values:l,required:e.required,multiElement:e.multiElement,information:e.information,multiFields:e.multiFields,form:a})})),i.a.createElement(k,{title:"Coordinator"},D.b.map(function(e){return i.a.createElement(M,{key:e.name,name:e.name,type:e.type,label:e.label,placeholder:e.placeholder,options:e.options,values:l,defaultValue:e.defaultValue,required:e.required})})),i.a.createElement(k,{title:"When"},i.a.createElement(R.a,{key:"date",name:f.DATE,label:"Starts on ",component:I,validate:g.apply(void 0,Object(c.a)(T(f.DATE,l)))}),D.c.map(function(e){return i.a.createElement(M,{key:e.name,name:e.name,type:e.type,label:e.label,placeholder:e.placeholder,values:l,multiElement:e.multiElement,information:e.information})})),i.a.createElement("div",{className:"MainForm-buttonContainer"},i.a.createElement("button",{type:"submit",disabled:n,className:"MainForm-button MainForm-button--submit"},"Publish Event"),i.a.createElement("button",{type:"reset",onClick:a.reset,disabled:n||r,className:"MainForm-button MainForm-button--reset"},"Reset")))}}))}),S=(a(23),function(){return i.a.createElement("header",{className:"Header App-content--entireRow"},i.a.createElement("div",{className:"Header-Stripe"}),i.a.createElement("div",{className:"Header-Title"},i.a.createElement("span",{className:"Header-Title--text"}," New event")))}),P=function(){return i.a.createElement("div",{className:"App App-content"},i.a.createElement(S,null),i.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.9ade0225.chunk.js.map