(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=(n(15),n(10)),s=n(7),u=n(3),d=n(4),l=n(6),b=n(5),h=(n(16),n(0));var m=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:"task__section",children:[t&&Object(h.jsx)("h2",{children:t}),n]})},j=n(2),f=n.n(j),p=n(23),O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).nameId=Object(p.a)(),e.numberId=Object(p.a)(),e.state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(p.a)(),name:e.state.name,number:e.state.number};e.props.onSubmit(n),e.reset()},e.reset=function(){e.setState(e.initialState)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{htmlFor:this.nameId,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:this.handleChange,id:this.nameId})]}),Object(h.jsxs)("label",{htmlFor:this.numberId,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,id:this.numberId})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);O.PropsType={onSubmit:f.a.func.isRequired};var C=O,v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"filter",value:this.props.value,onChange:this.props.onChange})]})}}]),n}(a.Component),x=v,g=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContact;return Object(h.jsxs)("li",{children:[n,": ",a,Object(h.jsx)("button",{type:"submit",onClick:function(){return r(t)},children:"Delete"})]})};g.prototype={id:f.a.number.isRequired,name:f.a.string.isRequired,number:f.a.number.isRequired,onDeleteContact:f.a.func.isRequired};var y=g,S=function(e){var t=e.findContact,n=e.onDeleteContact;return Object(h.jsx)("ul",{children:t().map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsx)(y,{id:t,name:a,number:r,onDeleteContact:n},t)}))})};S.prototype={findContact:f.a.func.isRequired,onDeleteContact:f.a.func.isRequired};var k=S,w=(n(20),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.addContact=function(t){e.hasContacts(t.name)?alert("".concat(t.name," is already in contacts")):e.setState((function(e){var n=e.contacts;return{contacts:[t].concat(Object(o.a)(n))}}))},e.hasContacts=function(t){return e.state.contacts.find((function(e){return e.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))},e.findContact=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLocaleLowerCase();return n.length?a.filter((function(e){return e.name.toLowerCase().includes(r)})):a},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"header__main",children:"React HW 002 Phonebook"}),Object(h.jsx)(m,{title:"Phonebook",children:Object(h.jsx)(C,{onSubmit:this.addContact})}),Object(h.jsxs)(m,{title:"Contacts",children:[Object(h.jsx)(x,{value:this.state.filter,onChange:this.handleChange}),Object(h.jsx)(k,{findContact:this.findContact,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component)),q=w;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f35329cc.chunk.js.map