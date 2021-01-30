(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{VLs4:function(e,t,r){var s,a,o;!function(c){if("object"==typeof e.exports){var n=c(0,t);void 0!==n&&(e.exports=n)}else a=[r,t],void 0===(o="function"==typeof(s=c)?s.apply(t,a):s)||(e.exports=o)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=void 0;t.default=["de",[["AM","PM"],r,r],r,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xe4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."],r,r],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",r,"{1} 'um' {0}",r],[",",".",";","%","+","-","E","\xb7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"EUR","\u20ac","Euro",{ATS:["\xf6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],CUC:[r,"Cub$"],DEM:["DM"],FKP:[r,"Fl\xa3"],GNF:[r,"F.G."],KMF:[r,"FC"],RON:[r,"L"],RWF:[r,"F.Rw"],SYP:[],THB:["\u0e3f"],TWD:["NT$"],XXX:[],ZMW:[r,"K"]},"ltr",function(e){var t=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===r?1:5}]})},vfUp:function(e,t,r){"use strict";r.r(t),r.d(t,"CustomersModule",function(){return we});var s={};r.r(s),r.d(s,"setCurrentCustomer",function(){return d}),r.d(s,"clearCurrentCustomer",function(){return p}),r.d(s,"initializeCurrentCustomer",function(){return C}),r.d(s,"loadCustomers",function(){return h}),r.d(s,"updateCustomer",function(){return g}),r.d(s,"createCustomer",function(){return f}),r.d(s,"deleteCustomer",function(){return S});var a={};r.r(a),r.d(a,"loadCustomersSuccess",function(){return O}),r.d(a,"loadCustomersFailure",function(){return y}),r.d(a,"updateCustomerSuccess",function(){return j}),r.d(a,"updateCustomerFailure",function(){return v}),r.d(a,"createCustomerSuccess",function(){return M}),r.d(a,"createCustomerFailure",function(){return T}),r.d(a,"deleteCustomerSuccess",function(){return w}),r.d(a,"deleteCustomerFailure",function(){return x});var o=r("fXoL"),c=r("tyNb"),n=r("PCNd"),i=r("ofXK"),u=r("VLs4"),l=r.n(u),m=r("l7P3"),b=r("9jGm");const d=Object(m.n)("[Customer Page] Set Current Customer",Object(m.s)()),p=Object(m.n)("[Customer Page] Clear Current Customer"),C=Object(m.n)("[Customer Page] Initialize Current Customer"),h=Object(m.n)("[Customer Page] Load"),g=Object(m.n)("[Customer Page] Update Customer",Object(m.s)()),f=Object(m.n)("[Customer Page] Create Customer",Object(m.s)()),S=Object(m.n)("[Customer Page] Delete Customer",Object(m.s)()),O=Object(m.n)("[Customer API] Load Success",Object(m.s)()),y=Object(m.n)("[Customer API] Load Fail",Object(m.s)()),j=Object(m.n)("[Customer API] Update Customer Success",Object(m.s)()),v=Object(m.n)("[Customer API] Update Customer Fail",Object(m.s)()),M=Object(m.n)("[Customer API] Create Customer Success",Object(m.s)()),T=Object(m.n)("[Customer API] Create Customer Fail",Object(m.s)()),w=Object(m.n)("[Customer API] Delete Customer Success",Object(m.s)()),x=Object(m.n)("[Customer API] Delete Customer Fail",Object(m.s)()),F=Object(m.p)({currentCustomerId:null,customers:[],error:""},Object(m.r)(s.setCurrentCustomer,(e,t)=>Object.assign(Object.assign({},e),{currentCustomerId:t.currentCustomerId})),Object(m.r)(s.clearCurrentCustomer,e=>Object.assign(Object.assign({},e),{currentCustomerId:null})),Object(m.r)(s.initializeCurrentCustomer,e=>Object.assign(Object.assign({},e),{currentCustomerId:0})),Object(m.r)(a.loadCustomersSuccess,(e,t)=>Object.assign(Object.assign({},e),{customers:t.customers,error:""})),Object(m.r)(a.loadCustomersFailure,(e,t)=>Object.assign(Object.assign({},e),{customers:[],error:t.error})),Object(m.r)(a.updateCustomerSuccess,(e,t)=>{const r=e.customers.map(e=>t.customer.id===e.id?t.customer:e);return Object.assign(Object.assign({},e),{customers:r,currentCustomerId:t.customer.id,error:""})}),Object(m.r)(a.updateCustomerFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(m.r)(a.createCustomerSuccess,(e,t)=>Object.assign(Object.assign({},e),{customers:[...e.customers,t.customer],currentCustomerId:t.customer.id,error:""})),Object(m.r)(a.createCustomerFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(m.r)(a.deleteCustomerSuccess,(e,t)=>Object.assign(Object.assign({},e),{customers:e.customers.filter(e=>e.id!==t.customerId),currentCustomerId:null,error:""})),Object(m.r)(a.deleteCustomerFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})));var I=r("5+tZ"),P=r("lJxs"),G=r("JIr8"),N=r("bOdf"),D=r("vkgz"),E=r("LRne"),k=r("tk/3"),z=r("z6cu");let A=(()=>{class e{constructor(e){this.http=e,this.customersUrl="api/customers",this.initialCustomer={id:0,name:"",country:null,status:"new",company:null,lifetimeValue:0}}getCustomers(){return this.http.get(this.customersUrl).pipe(Object(G.a)(this.handleError))}createCustomer(e){const t=new k.d({"Content-Type":"application/json"}),r=Object.assign(Object.assign({},e),{id:null});return this.http.post(this.customersUrl,r,{headers:t}).pipe(Object(G.a)(this.handleError))}deleteCustomer(e){const t=new k.d({"Content-Type":"application/json"});return this.http.delete(`${this.customersUrl}/${e}`,{headers:t}).pipe(Object(G.a)(this.handleError))}updateCustomer(e){const t=new k.d({"Content-Type":"application/json"});return this.http.put(`${this.customersUrl}/${e.id}`,e,{headers:t}).pipe(Object(P.a)(()=>e),Object(G.a)(this.handleError))}handleError(e){let t;return t=e.error instanceof ErrorEvent?"An error occurred: "+e.error.message:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object(z.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Xb(k.b))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=r("7zfz");let J=(()=>{class e{constructor(e,t,r){this.actions$=e,this.customerService=t,this.messageService=r,this.loadCustomers$=Object(b.c)(()=>this.actions$.pipe(Object(b.d)(s.loadCustomers),Object(I.a)(()=>this.customerService.getCustomers().pipe(Object(P.a)(e=>a.loadCustomersSuccess({customers:e})),Object(G.a)(e=>Object(E.a)(a.loadCustomersFailure({error:e}))))))),this.updateCustomer$=Object(b.c)(()=>this.actions$.pipe(Object(b.d)(s.updateCustomer),Object(N.a)(e=>this.customerService.updateCustomer(e.customer).pipe(Object(D.a)(e=>{this.messageService.add({severity:"success",summary:"Success",detail:e.name+" updated successfully"})}),Object(P.a)(e=>a.updateCustomerSuccess({customer:e})),Object(G.a)(e=>Object(E.a)(a.updateCustomerFailure({error:e}))))))),this.createCustomer$=Object(b.c)(()=>this.actions$.pipe(Object(b.d)(s.createCustomer),Object(N.a)(e=>this.customerService.createCustomer(e.customer).pipe(Object(D.a)(e=>this.messageService.add({severity:"success",summary:"Success",detail:e.name+" created successfully"})),Object(P.a)(e=>a.createCustomerSuccess({customer:e})),Object(G.a)(e=>Object(E.a)(a.createCustomerFailure({error:e}))))))),this.deleteCustomer$=Object(b.c)(()=>this.actions$.pipe(Object(b.d)(s.deleteCustomer),Object(I.a)(e=>this.customerService.deleteCustomer(e.customerId).pipe(Object(D.a)(e=>this.messageService.add({severity:"success",summary:"Success",detail:"Deleted successfully"})),Object(P.a)(()=>a.deleteCustomerSuccess({customerId:e.customerId})),Object(G.a)(e=>Object(E.a)(a.deleteCustomerFailure({error:e})))))))}}return e.\u0275fac=function(t){return new(t||e)(o.Xb(b.a),o.Xb(A),o.Xb($.g))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac}),e})();var _=r("ThbA");const q=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}],V=[{name:"Greece",code:"GR"},{name:"Brazil",code:"BR"},{name:"Switzerland",code:"CH"},{name:"Argentina",code:"AR"},{name:"Germany",code:"DE"},{name:"Norway",code:"NO"},{name:"Czech Republic",code:"CZ"},{name:"United Kingdom",code:"GB"},{name:"Cyprus",code:"CY"},{name:"Finland",code:"FI"}];var H=r("3Pt+"),U=r("QEVK"),L=r("J7/z"),R=r("7kUa"),B=r("arFO"),K=r("Ks7X"),X=r("jIHw");function W(e,t){if(1&e&&(o.Tb(0,"small",20),o.Gc(1),o.Sb()),2&e){const e=o.dc();o.Cb(1),o.Ic("",e.displayMessage.name," ")}}function Z(e,t){if(1&e&&(o.Tb(0,"small",21),o.Gc(1),o.Sb()),2&e){const e=o.dc();o.Cb(1),o.Ic("",e.displayMessage.company," ")}}function Q(e,t){if(1&e&&(o.Tb(0,"div",22),o.Ob(1,"img",23),o.Tb(2,"span"),o.Gc(3),o.Sb(),o.Sb()),2&e){const e=t.$implicit;o.Cb(1),o.mc("src","https://catamphetamine.gitlab.io/country-flag-icons/1x1/",e.code,".svg",o.zc),o.Cb(2),o.Hc(e.name)}}function Y(e,t){if(1&e&&(o.Tb(0,"small",24),o.Gc(1),o.Sb()),2&e){const e=o.dc();o.Cb(1),o.Ic("",e.displayMessage.country," ")}}function ee(e,t){if(1&e&&(o.Tb(0,"small",25),o.Gc(1),o.Sb()),2&e){const e=o.dc();o.Cb(1),o.Ic("",e.displayMessage.status," ")}}const te=function(e){return{"p-invalid":e}};let re=(()=>{class e{constructor(e,t,r){this.fb=e,this.ref=t,this.config=r,this.statuses=q,this.countries=V,this.displayMessage={},this.validationMessages={name:{required:"Customer name is required.",minlength:"Customer name must be at least three characters.",maxlength:"Customer name cannot exceed 50 characters."},country:{required:"Customer's country is required."},company:{required:"Customer's company is required."},status:{required:"Customer's status is required."}},this.genericValidator=new U.a(this.validationMessages)}ngOnInit(){this.customerForm=this.fb.group({name:["",[H.o.required,H.o.minLength(3),H.o.maxLength(50)]],country:["",H.o.required],company:["",H.o.required],status:["",H.o.required],lifetimeValue:""}),this.customerForm.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.customerForm)),this.selectedCustomer=this.config.data.customer,this.customerForm.patchValue(this.selectedCustomer)}blur(){this.displayMessage=this.genericValidator.processMessages(this.customerForm)}submitCustomer(){if(this.customerForm.valid&&this.customerForm.dirty){const e=Object.assign(Object.assign({},this.selectedCustomer),this.customerForm.value);this.ref.close(e)}}cancel(){this.ref.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(H.b),o.Nb(L.d),o.Nb(L.b))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-customer-edit-dialog"]],decls:29,vars:15,consts:[["novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"p-fluid"],[1,"p-field"],["for","CustomerName"],["id","CustomerName","type","text","placeholder","Name (required)","formControlName","name","pInputText","","aria-describedby","CustomerName-help","autofocus","",3,"ngClass","blur"],["id","CustomerName-help","class","p-invalid",4,"ngIf"],["for","CustomerCompany"],["id","CustomerCompany","type","text","placeholder","Company (required)","formControlName","company","pInputText","","aria-describedby","CustomerCompany-help",3,"ngClass","blur"],["id","CustomerCompany-help","class","p-invalid",4,"ngIf"],["for","CustomerCountry"],["id","CustomerCountry","optionLabel","name","filterBy","name","formControlName","country","placeholder","Select a Country (required)","aria-describedby","CustomerCountry-help",3,"options","filter","blur"],["pTemplate","item"],["id","CustomerCountry-help","class","p-invalid",4,"ngIf"],["for","CustomerStatus"],["id","CustomerStatus","formControlName","status","placeholder","Select a Status (required)","aria-describedby","CustomerStatus-help",3,"options","blur"],["id","CustomerStatus-help","class","p-invalid",4,"ngIf"],["for","lifetimeValue"],["id","lifetimeValue","mode","currency","currency","EUR","placeholder","Lifetime Value","formControlName","lifetimeValue","locale","de-DE"],["pButton","","type","button","pRipple","","label","Save","icon","pi pi-check",3,"disabled","click"],["pButton","","type","button","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["id","CustomerName-help",1,"p-invalid"],["id","CustomerCompany-help",1,"p-invalid"],[1,"p-d-flex","p-ai-center"],[2,"width","20px","margin-right","3px","border-radius","20%",3,"src"],["id","CustomerCountry-help",1,"p-invalid"],["id","CustomerStatus-help",1,"p-invalid"]],template:function(e,t){1&e&&(o.Tb(0,"form",0),o.ac("ngSubmit",function(){return t.submitCustomer()}),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"label",3),o.Gc(4,"Customer Name"),o.Sb(),o.Tb(5,"input",4),o.ac("blur",function(){return t.blur()}),o.Sb(),o.Ec(6,W,2,1,"small",5),o.Sb(),o.Tb(7,"div",2),o.Tb(8,"label",6),o.Gc(9,"Customer's Company"),o.Sb(),o.Tb(10,"input",7),o.ac("blur",function(){return t.blur()}),o.Sb(),o.Ec(11,Z,2,1,"small",8),o.Sb(),o.Tb(12,"div",2),o.Tb(13,"label",9),o.Gc(14,"Customer's Company"),o.Sb(),o.Tb(15,"p-dropdown",10),o.ac("blur",function(){return t.blur()}),o.Ec(16,Q,4,2,"ng-template",11),o.Sb(),o.Ec(17,Y,2,1,"small",12),o.Sb(),o.Tb(18,"div",2),o.Tb(19,"label",13),o.Gc(20,"Customer's Status"),o.Sb(),o.Tb(21,"p-dropdown",14),o.ac("blur",function(){return t.blur()}),o.Sb(),o.Ec(22,ee,2,1,"small",15),o.Sb(),o.Tb(23,"div",2),o.Tb(24,"label",16),o.Gc(25,"Lifetime Value"),o.Sb(),o.Ob(26,"p-inputNumber",17),o.Sb(),o.Sb(),o.Tb(27,"button",18),o.ac("click",function(){return t.submitCustomer()}),o.Sb(),o.Tb(28,"button",19),o.ac("click",function(){return t.cancel()}),o.Sb(),o.Sb()),2&e&&(o.lc("formGroup",t.customerForm),o.Cb(5),o.lc("ngClass",o.oc(11,te,t.displayMessage.name)),o.Cb(1),o.lc("ngIf",t.displayMessage.name),o.Cb(4),o.lc("ngClass",o.oc(13,te,t.displayMessage.company)),o.Cb(1),o.lc("ngIf",t.displayMessage.company),o.Cb(4),o.lc("options",t.countries)("filter",!0),o.Cb(2),o.lc("ngIf",t.displayMessage.country),o.Cb(4),o.lc("options",t.statuses),o.Cb(1),o.lc("ngIf",t.displayMessage.status),o.Cb(5),o.lc("disabled",!t.customerForm.valid||!t.customerForm.dirty))},directives:[H.p,H.j,H.e,H.a,H.i,H.c,R.a,i.j,i.l,B.a,$.i,K.a,X.a],styles:[""],changeDetection:0}),e})();const se=Object(m.o)("customers"),ae=Object(m.q)(se,e=>e.currentCustomerId),oe=(Object(m.q)(se,ae,(e,t)=>0===t?{id:0,name:"",country:null,status:"new",company:null,lifetimeValue:0}:t?e.customers.find(e=>e.id===t):null),Object(m.q)(se,e=>[...e.customers])),ce=Object(m.q)(se,e=>e.error);var ne=r("pLZG"),ie=r("rEr+"),ue=r("dts7"),le=r("lVkt");let me=(()=>{class e{transform(e,t=!1){let r="";return r=e||"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",t&&-1===r.indexOf("https")&&(r=r.replace("http","https")),r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Mb({name:"defaultImage",type:e,pure:!0}),e})();const be=["dt"];function de(e,t){if(1&e&&(o.Tb(0,"div"),o.Gc(1),o.Sb()),2&e){const e=o.dc(2);o.Cb(1),o.Hc(e.errorMessage)}}function pe(e,t){1&e&&(o.Tb(0,"p-messages",7),o.Ec(1,de,2,1,"ng-template",8),o.Sb())}function Ce(e,t){if(1&e){const e=o.Ub();o.Tb(0,"div",9),o.Gc(1," List of Customers "),o.Tb(2,"button",10),o.ac("click",function(){return o.xc(e),o.dc().newCustomer()}),o.Sb(),o.Tb(3,"span",11),o.Ob(4,"i",12),o.Tb(5,"input",13),o.ac("input",function(t){return o.xc(e),o.dc(),o.wc(2).filterGlobal(t.target.value,"contains")}),o.Sb(),o.Sb(),o.Sb()}}function he(e,t){if(1&e&&(o.Tb(0,"div",32),o.Ob(1,"img",33),o.Tb(2,"span"),o.Gc(3),o.Sb(),o.Sb()),2&e){const e=t.$implicit,r=o.dc(2);o.Cb(1),o.lc("src",r.getCountryFlagUrl(e.code),o.zc),o.Cb(2),o.Hc(e.name)}}function ge(e,t){if(1&e){const e=o.Ub();o.Tb(0,"tr"),o.Ob(1,"th",14),o.Tb(2,"th",15),o.Gc(3," Name "),o.Ob(4,"p-sortIcon",16),o.Sb(),o.Tb(5,"th",17),o.Gc(6," Country "),o.Ob(7,"p-sortIcon",18),o.Sb(),o.Tb(8,"th",19),o.Gc(9," Company "),o.Ob(10,"p-sortIcon",20),o.Sb(),o.Tb(11,"th",21),o.Gc(12," Status "),o.Ob(13,"p-sortIcon",22),o.Sb(),o.Tb(14,"th",23),o.Gc(15," Lifetime Value "),o.Ob(16,"p-sortIcon",24),o.Sb(),o.Ob(17,"th",25),o.Sb(),o.Tb(18,"tr"),o.Ob(19,"th"),o.Tb(20,"th"),o.Tb(21,"input",26),o.ac("input",function(t){return o.xc(e),o.dc(),o.wc(2).filter(t.target.value,"name","startsWith")}),o.Sb(),o.Sb(),o.Tb(22,"th"),o.Tb(23,"p-multiSelect",27),o.ac("onChange",function(t){return o.xc(e),o.dc().onCountryChange(t)}),o.Ec(24,he,4,2,"ng-template",28),o.Sb(),o.Sb(),o.Tb(25,"th"),o.Tb(26,"input",29),o.ac("input",function(t){return o.xc(e),o.dc(),o.wc(2).filter(t.target.value,"company","contains")}),o.Sb(),o.Sb(),o.Tb(27,"th"),o.Tb(28,"p-dropdown",30),o.ac("onChange",function(t){return o.xc(e),o.dc(),o.wc(2).filter(t.value,"status","equals")}),o.Sb(),o.Sb(),o.Tb(29,"th"),o.Tb(30,"input",31),o.ac("input",function(t){return o.xc(e),o.dc(),o.wc(2).filter(t.target.value,"lifetimeValue","startsWith")}),o.Sb(),o.Sb(),o.Ob(31,"th"),o.Sb()}if(2&e){const e=o.dc();o.Cb(23),o.lc("options",e.countries),o.Cb(5),o.lc("options",e.statuses)("showClear",!0)}}const fe=function(e){return[e,"EUR","symbol",void 0,"de-DE"]};function Se(e,t){if(1&e){const e=o.Ub();o.Tb(0,"tr",34),o.Ob(1,"td"),o.Tb(2,"td"),o.Tb(3,"span",35),o.Gc(4,"Name"),o.Sb(),o.Tb(5,"div",32),o.Ob(6,"img",36),o.ec(7,"defaultImage"),o.Tb(8,"span",37),o.Gc(9),o.Sb(),o.Sb(),o.Sb(),o.Tb(10,"td"),o.Tb(11,"span",35),o.Gc(12,"Country"),o.Sb(),o.Tb(13,"div",32),o.Ob(14,"img",38),o.Tb(15,"span",39),o.Gc(16),o.Sb(),o.Sb(),o.Sb(),o.Tb(17,"td"),o.Tb(18,"span",35),o.Gc(19,"Company"),o.Sb(),o.Tb(20,"span",39),o.Gc(21),o.Sb(),o.Sb(),o.Tb(22,"td"),o.Tb(23,"span",35),o.Gc(24,"Status"),o.Sb(),o.Tb(25,"span"),o.Gc(26),o.Sb(),o.Sb(),o.Tb(27,"td"),o.Tb(28,"span",35),o.Gc(29,"Lifetime Value"),o.Sb(),o.Tb(30,"span",39),o.Gc(31),o.ec(32,"currency"),o.Sb(),o.Sb(),o.Tb(33,"td"),o.Tb(34,"button",40),o.ac("click",function(){o.xc(e);const r=t.$implicit;return o.dc().editCustomer(r)}),o.Sb(),o.Tb(35,"button",41),o.ac("click",function(){o.xc(e);const r=t.$implicit;return o.dc().deleteCustomer(r)}),o.Sb(),o.Sb(),o.Sb()}if(2&e){const e=t.$implicit,r=o.dc();o.Cb(6),o.lc("alt",e.name)("src",o.gc(7,11,e.image,!0),o.zc),o.Cb(3),o.Hc(e.name),o.Cb(5),o.lc("alt",e.country.name)("src",r.getCountryFlagUrl(e.country.code),o.zc),o.Cb(2),o.Hc(e.country.name),o.Cb(5),o.Hc(e.company),o.Cb(4),o.Eb("customer-badge status-"+e.status),o.Cb(1),o.Hc(e.status),o.Cb(5),o.Hc(o.ic(32,14,o.oc(20,fe,e.lifetimeValue)))}}function Oe(e,t){1&e&&(o.Tb(0,"tr"),o.Tb(1,"td",42),o.Gc(2,"No customers found."),o.Sb(),o.Sb())}const ye=function(e){return[5,e]},je=function(){return["name","country.name","company","status"]};let ve=(()=>{class e{constructor(){this.pageTitle="Customers",this.countries=V,this.statuses=q,this.delete=new o.n,this.edit=new o.n,this.new=new o.n}onCountryChange(e){this.table.filter(e.value,"country.name","in")}getCountryFlagUrl(e){return`https://catamphetamine.gitlab.io/country-flag-icons/1x1/${e}.svg`}editCustomer(e){this.edit.emit(e)}deleteCustomer(e){this.delete.emit(e)}newCustomer(){this.new.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-customer-table"]],viewQuery:function(e,t){if(1&e&&o.Jc(be,!0),2&e){let e;o.vc(e=o.bc())&&(t.table=e.first)}},inputs:{errorMessage:"errorMessage",customers:"customers"},outputs:{delete:"delete",edit:"edit",new:"new"},decls:7,vars:12,consts:[["severity","error",4,"ngIf"],["dataKey","id","styleClass","p-datatable-customers",3,"value","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["severity","error"],["pTemplate",""],[1,"table-header"],["type","button","pButton","","label","New Customer","icon","pi pi-user-plus",1,"add-btn",3,"click"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Global Search",3,"input"],[2,"width","3rem"],["pSortableColumn","name"],["field","name"],["pSortableColumn","country.name"],["field","country.name"],["pSortableColumn","company"],["field","company"],["pSortableColumn","status"],["field","status"],["pSortableColumn","lifetimeValue"],["field","lifetimeValue"],[2,"width","8rem"],["pInputText","","type","text","placeholder","Search by Name",1,"p-column-filter",3,"input"],["placeholder","Select Country","styleClass","p-column-filter","optionValue","name","optionLabel","name","filterBy","name",3,"options","onChange"],["pTemplate","item"],["pInputText","","type","text","placeholder","Search by Company",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Select a Status",3,"options","showClear","onChange"],["pInputText","","type","text","placeholder","Search by Value \u20ac",1,"p-column-filter",3,"input"],[1,"p-d-flex","p-ai-center"],[2,"width","20px","margin-right","3px","border-radius","20%",3,"src"],[1,"p-selectable-row"],[1,"p-column-title"],[1,"avatar",3,"alt","src"],[1,"p-ml-2"],[1,"flag",3,"alt","src"],[1,"image-text"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"],["colspan","8"]],template:function(e,t){1&e&&(o.Ec(0,pe,2,0,"p-messages",0),o.Tb(1,"p-table",1,2),o.Ec(3,Ce,6,0,"ng-template",3),o.Ec(4,ge,32,3,"ng-template",4),o.Ec(5,Se,36,22,"ng-template",5),o.Ec(6,Oe,3,0,"ng-template",6),o.Sb()),2&e&&(o.lc("ngIf",t.errorMessage),o.Cb(1),o.lc("value",t.customers)("rowHover",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",o.oc(9,ye,t.customers.length))("paginator",!0)("filterDelay",0)("globalFilterFields",o.nc(11,je)))},directives:[i.l,ie.c,$.i,ue.a,X.a,R.a,ie.b,ie.a,le.a,B.a],pipes:[me,i.d],styles:["[_nghost-%COMP%]     .p-paginator .p-paginator-current{margin-left:auto}[_nghost-%COMP%]     .table-header{display:flex;justify-content:space-between;flex-wrap:wrap}[_nghost-%COMP%]     .p-multiselect{min-width:12rem}[_nghost-%COMP%]     .avatar{vertical-align:middle;width:32px;height:32px;border-radius:50%}[_nghost-%COMP%]     .flag{vertical-align:middle;width:30px;height:25px;border-radius:20%;margin-right:5px}[_nghost-%COMP%]     .customer-badge{border-radius:2px;padding:.25em .5rem;text-transform:uppercase;font-weight:700;font-size:12px;letter-spacing:.3px}[_nghost-%COMP%]     .customer-badge.status-unqualified{background-color:#ffcdd2;color:#c63737}[_nghost-%COMP%]     .customer-badge.status-proposal{background-color:#ffd8b2;color:#805b36}[_nghost-%COMP%]     .customer-badge.status-qualified{background-color:#c8e6c9;color:#256029}[_nghost-%COMP%]     .customer-badge.status-new{background-color:#b3e5fc;color:#23547b}[_nghost-%COMP%]     .customer-badge.status-renewal{background-color:#eccfff;color:#694382}[_nghost-%COMP%]     .customer-badge.status-negotiation{background-color:#feedaf;color:#8a5340}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header{padding:1rem;text-align:left;font-size:1.5rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator{padding:1rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th{text-align:left}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{cursor:auto}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder){text-transform:uppercase}[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width:500px){.add-btn[_ngcontent-%COMP%]{margin-bottom:5px}}@media screen and (max-width:960px){[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr{border-bottom:1px solid var(--layer-2)}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{text-align:left;display:block;border:0!important;width:100%!important;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4rem 1rem -.4rem -.4rem;font-weight:700}}"]}),e})(),Me=(()=>{class e{constructor(e,t,r,s){this.store=e,this.dialogService=t,this.confirmationService=r,this.customerService=s}ngOnInit(){this.customers$=this.store.select(oe),this.errorMessage$=this.store.select(ce),this.store.dispatch(s.loadCustomers())}deleteCustomer(e){this.confirmationService.confirm({message:"Are you sure you want to delete the selected customer?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.store.dispatch(s.deleteCustomer({customerId:e.id}))}})}editCustomer(e){this.openEditDialog("Edit Customer: "+e.name,e)}newCustomer(){this.openEditDialog("New Customer",this.customerService.initialCustomer)}openEditDialog(e,t){this.ref=this.dialogService.open(re,{data:{customer:t},header:e,width:"400px",contentStyle:{overflow:"visible"},baseZIndex:1e4}),this.ref.onClose.pipe(Object(ne.a)(e=>e)).subscribe(e=>{this.store.dispatch(0===(null==e?void 0:e.id)?s.createCustomer({customer:e}):s.updateCustomer({customer:e}))})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(m.h),o.Nb(L.a),o.Nb($.a),o.Nb(A))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-customer-shell"]],features:[o.Bb([L.a])],decls:3,vars:6,consts:[[3,"customers","errorMessage","delete","edit","new"]],template:function(e,t){1&e&&(o.Tb(0,"app-customer-table",0),o.ac("delete",function(e){return t.deleteCustomer(e)})("edit",function(e){return t.editCustomer(e)})("new",function(){return t.newCustomer()}),o.ec(1,"async"),o.ec(2,"async"),o.Sb()),2&e&&o.lc("customers",o.fc(1,2,t.customers$))("errorMessage",o.fc(2,4,t.errorMessage$))},directives:[ve],pipes:[i.b],styles:[""],changeDetection:0}),e})();Object(i.v)(l.a);const Te=[{path:"",component:Me}];let we=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},providers:[{provide:o.v,useValue:"de-DE"}],imports:[[n.a,m.j.forFeature("customers",F),b.b.forFeature([J]),_.a,c.e.forChild(Te)]]}),e})()}}]);