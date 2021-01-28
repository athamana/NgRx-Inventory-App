(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{WLUK:function(e,t,r){"use strict";r.r(t),r.d(t,"ProductsModule",function(){return Ce});var c={};r.r(c),r.d(c,"toggleProductCode",function(){return a}),r.d(c,"setCurrentProduct",function(){return u}),r.d(c,"clearCurrentProduct",function(){return n}),r.d(c,"initializeCurrentProduct",function(){return l}),r.d(c,"loadProducts",function(){return p}),r.d(c,"updateProduct",function(){return b}),r.d(c,"createProduct",function(){return h}),r.d(c,"deleteProduct",function(){return P});var d={};r.r(d),r.d(d,"loadProductsSuccess",function(){return g}),r.d(d,"loadProductsFailure",function(){return f}),r.d(d,"updateProductSuccess",function(){return m}),r.d(d,"updateProductFailure",function(){return C}),r.d(d,"createProductSuccess",function(){return O}),r.d(d,"createProductFailure",function(){return j}),r.d(d,"deleteProductSuccess",function(){return y}),r.d(d,"deleteProductFailure",function(){return v});var s=r("tyNb"),o=r("PCNd"),i=r("l7P3");const a=Object(i.n)("[Product Page] Toggle Product Code"),u=Object(i.n)("[Product Page] Set Current Product",Object(i.s)()),n=Object(i.n)("[Product Page] Clear Current Product"),l=Object(i.n)("[Product Page] Initialize Current Product"),p=Object(i.n)("[Product Page] Load"),b=Object(i.n)("[Product Page] Update Product",Object(i.s)()),h=Object(i.n)("[Product Page] Create Product",Object(i.s)()),P=Object(i.n)("[Product Page] Delete Product",Object(i.s)()),g=Object(i.n)("[Product API] Load Success",Object(i.s)()),f=Object(i.n)("[Product API] Load Fail",Object(i.s)()),m=Object(i.n)("[Product API] Update Product Success",Object(i.s)()),C=Object(i.n)("[Product API] Update Product Fail",Object(i.s)()),O=Object(i.n)("[Product API] Create Product Success",Object(i.s)()),j=Object(i.n)("[Product API] Create Product Fail",Object(i.s)()),y=Object(i.n)("[Product API] Delete Product Success",Object(i.s)()),v=Object(i.n)("[Product API] Delete Product Fail",Object(i.s)()),S=Object(i.p)({showProductCode:!0,currentProductId:null,products:[],error:""},Object(i.r)(c.toggleProductCode,e=>Object.assign(Object.assign({},e),{showProductCode:!e.showProductCode})),Object(i.r)(c.setCurrentProduct,(e,t)=>Object.assign(Object.assign({},e),{currentProductId:t.currentProductId})),Object(i.r)(c.clearCurrentProduct,e=>Object.assign(Object.assign({},e),{currentProductId:null})),Object(i.r)(c.initializeCurrentProduct,e=>Object.assign(Object.assign({},e),{currentProductId:0})),Object(i.r)(d.loadProductsSuccess,(e,t)=>Object.assign(Object.assign({},e),{products:t.products,error:""})),Object(i.r)(d.loadProductsFailure,(e,t)=>Object.assign(Object.assign({},e),{products:[],error:t.error})),Object(i.r)(d.updateProductSuccess,(e,t)=>{const r=e.products.map(e=>t.product.id===e.id?t.product:e);return Object.assign(Object.assign({},e),{products:r,currentProductId:t.product.id,error:""})}),Object(i.r)(d.updateProductFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(i.r)(d.createProductSuccess,(e,t)=>Object.assign(Object.assign({},e),{products:[...e.products,t.product],currentProductId:t.product.id,error:""})),Object(i.r)(d.createProductFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})),Object(i.r)(d.deleteProductSuccess,(e,t)=>Object.assign(Object.assign({},e),{products:e.products.filter(e=>e.id!==t.productId),currentProductId:null,error:""})),Object(i.r)(d.deleteProductFailure,(e,t)=>Object.assign(Object.assign({},e),{error:t.error})));var I=r("9jGm"),w=r("5+tZ"),T=r("lJxs"),M=r("JIr8"),k=r("bOdf"),N=r("vkgz"),F=r("LRne"),x=r("fXoL"),$=r("tk/3"),E=r("z6cu");let R=(()=>{class e{constructor(e){this.http=e,this.productsUrl="api/products"}getProducts(){return this.http.get(this.productsUrl).pipe(Object(M.a)(this.handleError))}createProduct(e){const t=new $.d({"Content-Type":"application/json"}),r=Object.assign(Object.assign({},e),{id:null});return this.http.post(this.productsUrl,r,{headers:t}).pipe(Object(M.a)(this.handleError))}deleteProduct(e){const t=new $.d({"Content-Type":"application/json"});return this.http.delete(`${this.productsUrl}/${e}`,{headers:t}).pipe(Object(M.a)(this.handleError))}updateProduct(e){const t=new $.d({"Content-Type":"application/json"});return this.http.put(`${this.productsUrl}/${e.id}`,e,{headers:t}).pipe(Object(T.a)(()=>e),Object(M.a)(this.handleError))}handleError(e){let t;return t=e.error instanceof ErrorEvent?"An error occurred: "+e.error.message:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object(E.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(x.Xb($.b))},e.\u0275prov=x.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var z=r("7zfz");let q=(()=>{class e{constructor(e,t,r){this.actions$=e,this.productService=t,this.messageService=r,this.loadProducts$=Object(I.c)(()=>this.actions$.pipe(Object(I.d)(c.loadProducts),Object(w.a)(()=>this.productService.getProducts().pipe(Object(T.a)(e=>d.loadProductsSuccess({products:e})),Object(M.a)(e=>Object(F.a)(d.loadProductsFailure({error:e}))))))),this.updateProduct$=Object(I.c)(()=>this.actions$.pipe(Object(I.d)(c.updateProduct),Object(k.a)(e=>this.productService.updateProduct(e.product).pipe(Object(N.a)(e=>this.messageService.add({severity:"success",summary:"Success",detail:e.productName+" updated successfully"})),Object(T.a)(e=>d.updateProductSuccess({product:e})),Object(M.a)(e=>Object(F.a)(d.updateProductFailure({error:e}))))))),this.createProduct$=Object(I.c)(()=>this.actions$.pipe(Object(I.d)(c.createProduct),Object(k.a)(e=>this.productService.createProduct(e.product).pipe(Object(N.a)(e=>this.messageService.add({severity:"success",summary:"Success",detail:e.productName+" created successfully"})),Object(T.a)(e=>d.createProductSuccess({product:e})),Object(M.a)(e=>Object(F.a)(d.createProductFailure({error:e}))))))),this.deleteProduct$=Object(I.c)(()=>this.actions$.pipe(Object(I.d)(c.deleteProduct),Object(w.a)(e=>this.productService.deleteProduct(e.productId).pipe(Object(N.a)(e=>this.messageService.add({severity:"success",summary:"Success",detail:"Deleted successfully"})),Object(T.a)(()=>d.deleteProductSuccess({productId:e.productId})),Object(M.a)(e=>Object(F.a)(d.deleteProductFailure({error:e})))))))}}return e.\u0275fac=function(t){return new(t||e)(x.Xb(I.a),x.Xb(R),x.Xb(z.f))},e.\u0275prov=x.Jb({token:e,factory:e.\u0275fac}),e})();const A=Object(i.o)("products"),U=Object(i.q)(A,e=>e.showProductCode),L=Object(i.q)(A,e=>e.currentProductId),D=Object(i.q)(A,L,(e,t)=>0===t?{id:0,productName:"",productCode:"New",description:"",starRating:0}:t?e.products.find(e=>e.id===t):null),G=Object(i.q)(A,e=>[...e.products]),J=Object(i.q)(A,e=>e.error);var W=r("ofXK"),B=r("cQJI"),X=r("jIHw"),_=r("dts7");function V(e,t){if(1&e&&(x.Tb(0,"div"),x.Ec(1),x.Sb()),2&e){const e=x.dc(2);x.Cb(1),x.Fc(e.errorMessage)}}function H(e,t){1&e&&(x.Tb(0,"p-messages",6),x.Cc(1,V,2,1,"ng-template",7),x.Sb())}function K(e,t){if(1&e&&(x.Rb(0),x.Ec(1),x.Qb()),2&e){const e=x.dc().$implicit;x.Cb(1),x.Gc(" (",e.productCode,") ")}}function Q(e,t){if(1&e&&(x.Tb(0,"div"),x.Ec(1),x.Cc(2,K,2,1,"ng-container",8),x.Sb()),2&e){const e=t.$implicit,r=x.dc();x.Cb(1),x.Gc(" ",e.productName," "),x.Cb(1),x.kc("ngIf",r.displayCode)}}const Z=function(){return{height:"auto"}},Y=function(e){return[e]},ee=function(){return{"min-width":"300px"}};let te=(()=>{class e{constructor(){this.pageTitle="Products",this.displayCodeChanged=new x.n,this.initializeNewProduct=new x.n,this.productWasSelected=new x.n}checkChanged(){this.displayCodeChanged.emit()}newProduct(){this.initializeNewProduct.emit()}productSelected(e){e?this.productWasSelected.emit(e):this.newProduct()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=x.Hb({type:e,selectors:[["app-product-list"]],inputs:{errorMessage:"errorMessage",products:"products",displayCode:"displayCode",selectedProduct:"selectedProduct"},outputs:{displayCodeChanged:"displayCodeChanged",initializeNewProduct:"initializeNewProduct",productWasSelected:"productWasSelected"},decls:8,vars:11,consts:[["severity","error",4,"ngIf"],["filterBy","productName","filterPlaceholder","Filter by name","metaKeySelection","false","controlsPosition","right",3,"value","listStyle","header","selection","onSelectionChange"],["pTemplate","item"],[1,"bottom-actions","p-d-flex","p-ai-center"],["type","button","pButton","","label","Add","icon","pi pi-plus",2,"margin","0.25em","min-width","90px",3,"click"],["type","checkbox",3,"checked","change"],["severity","error"],["pTemplate",""],[4,"ngIf"]],template:function(e,t){1&e&&(x.Cc(0,H,2,0,"p-messages",0),x.Tb(1,"p-orderList",1),x.ac("onSelectionChange",function(e){return t.productSelected(e.value[0])}),x.Cc(2,Q,3,2,"ng-template",2),x.Sb(),x.Tb(3,"div",3),x.Tb(4,"button",4),x.ac("click",function(){return t.newProduct()}),x.Sb(),x.Tb(5,"label"),x.Tb(6,"input",5),x.ac("change",function(){return t.checkChanged()}),x.Sb(),x.Ec(7," Display Product Code "),x.Sb(),x.Sb()),2&e&&(x.kc("ngIf",t.errorMessage),x.Cb(1),x.kc("value",t.products)("listStyle",x.lc(7,Z))("header",t.pageTitle)("selection",x.mc(8,Y,t.selectedProduct))("listStyle",x.lc(10,ee)),x.Cb(5),x.kc("checked",t.displayCode))},directives:[W.l,B.a,z.h,X.a,_.a],styles:["input[type=checkbox][_ngcontent-%COMP%]{transform:scale(1.5);padding:10px}.bottom-actions[_ngcontent-%COMP%]{padding-top:10px}"],changeDetection:0}),e})();var re=r("3Pt+");class ce{constructor(e){this.validationMessages=e}processMessages(e){const t={};for(const r in e.controls)if(e.controls.hasOwnProperty(r)){const c=e.controls[r];if(c instanceof re.d){const e=this.processMessages(c);Object.assign(t,e)}else this.validationMessages[r]&&(t[r]="",(c.dirty||c.touched)&&c.errors&&Object.keys(c.errors).map(e=>{this.validationMessages[r][e]&&(t[r]+=this.validationMessages[r][e]+" ")}))}return t}}class de{static range(e,t){return r=>r.value&&(isNaN(r.value)||r.value<e||r.value>t)?{range:!0}:null}}var se=r("QIUk"),oe=r("7kUa"),ie=r("Js94"),ae=r("zFJ7");function ue(e,t){if(1&e&&(x.Tb(0,"small",21),x.Ec(1),x.Sb()),2&e){const e=x.dc(2);x.Cb(1),x.Gc("",e.displayMessage.productName," ")}}function ne(e,t){if(1&e&&(x.Tb(0,"small",22),x.Ec(1),x.Sb()),2&e){const e=x.dc(2);x.Cb(1),x.Gc("",e.displayMessage.productCode," ")}}function le(e,t){if(1&e&&(x.Tb(0,"small",23),x.Ec(1),x.Sb()),2&e){const e=x.dc(2);x.Cb(1),x.Gc(" ",e.displayMessage.starRating," ")}}function pe(e,t){if(1&e&&(x.Tb(0,"small",24),x.Ec(1),x.Sb()),2&e){const e=x.dc(2);x.Cb(1),x.Gc("",e.displayMessage.description," ")}}const be=function(e){return{"p-invalid":e}};function he(e,t){if(1&e){const e=x.Ub();x.Tb(0,"p-card",2),x.Tb(1,"form",3),x.ac("ngSubmit",function(){return x.vc(e),x.dc().saveProduct()}),x.Tb(2,"div",4),x.Tb(3,"div",5),x.Tb(4,"label",6),x.Ec(5,"Product Name"),x.Sb(),x.Tb(6,"input",7),x.ac("blur",function(){return x.vc(e),x.dc().blur()}),x.Sb(),x.Cc(7,ue,2,1,"small",8),x.Sb(),x.Tb(8,"div",5),x.Tb(9,"label",9),x.Ec(10,"Product Code"),x.Sb(),x.Tb(11,"input",10),x.ac("blur",function(){return x.vc(e),x.dc().blur()}),x.Sb(),x.Cc(12,ne,2,1,"small",11),x.Sb(),x.Tb(13,"div",5),x.Tb(14,"label",12),x.Ec(15,"Star Rating (1-5)"),x.Sb(),x.Ob(16,"p-rating",13),x.Cc(17,le,2,1,"small",14),x.Sb(),x.Tb(18,"div",5),x.Tb(19,"label",15),x.Ec(20,"Product Description"),x.Sb(),x.Tb(21,"textarea",16),x.ac("blur",function(){return x.vc(e),x.dc().blur()}),x.Sb(),x.Cc(22,pe,2,1,"small",17),x.Sb(),x.Sb(),x.Ob(23,"button",18),x.Tb(24,"button",19),x.ac("click",function(){return x.vc(e),x.dc().cancelEdit()}),x.Sb(),x.Tb(25,"button",20),x.ac("click",function(){return x.vc(e),x.dc().deleteProduct()}),x.Sb(),x.Sb(),x.Sb()}if(2&e){const e=x.dc();x.kc("header",e.pageTitle),x.Cb(1),x.kc("formGroup",e.productForm),x.Cb(5),x.kc("ngClass",x.mc(11,be,e.displayMessage.productName)),x.Cb(1),x.kc("ngIf",e.displayMessage.productName),x.Cb(4),x.kc("ngClass",x.mc(13,be,e.displayMessage.productCode)),x.Cb(1),x.kc("ngIf",e.displayMessage.productCode),x.Cb(5),x.kc("ngIf",e.displayMessage.starRating),x.Cb(4),x.kc("ngClass",x.mc(15,be,e.displayMessage.description))("rows",3),x.Cb(1),x.kc("ngIf",e.displayMessage.description),x.Cb(1),x.kc("disabled",!e.productForm.valid||!e.productForm.dirty)}}let Pe=(()=>{class e{constructor(e){this.fb=e,this.pageTitle="Product Edit",this.create=new x.n,this.update=new x.n,this.delete=new x.n,this.clearCurrent=new x.n,this.displayMessage={},this.validationMessages={productName:{required:"Product name is required.",minlength:"Product name must be at least three characters.",maxlength:"Product name cannot exceed 50 characters."},productCode:{required:"Product code is required."},starRating:{range:"Rate the product between 1 (lowest) and 5 (highest)."}},this.genericValidator=new ce(this.validationMessages)}ngOnInit(){this.productForm=this.fb.group({productName:["",[re.o.required,re.o.minLength(3),re.o.maxLength(50)]],productCode:["",re.o.required],starRating:["",de.range(1,5)],description:""}),this.productForm.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.productForm))}ngOnChanges(e){e.selectedProduct&&this.displayProduct(e.selectedProduct.currentValue)}blur(){this.displayMessage=this.genericValidator.processMessages(this.productForm)}displayProduct(e){e&&this.productForm&&(this.productForm.reset(),this.pageTitle=0===e.id?"Add Product":"Edit Product: "+e.productName,this.productForm.patchValue({productName:e.productName,productCode:e.productCode,starRating:e.starRating,description:e.description}))}cancelEdit(){this.displayProduct(this.selectedProduct)}deleteProduct(){this.selectedProduct&&this.selectedProduct.id?confirm(`Really delete the product: ${this.selectedProduct.productName}?`)&&this.delete.emit(this.selectedProduct):this.clearCurrent.emit()}saveProduct(){if(this.productForm.valid&&this.productForm.dirty){const e=Object.assign(Object.assign({},this.selectedProduct),this.productForm.value);0===e.id?this.create.emit(e):this.update.emit(e)}}}return e.\u0275fac=function(t){return new(t||e)(x.Nb(re.b))},e.\u0275cmp=x.Hb({type:e,selectors:[["app-product-edit"]],inputs:{errorMessage:"errorMessage",selectedProduct:"selectedProduct"},outputs:{create:"create",update:"update",delete:"delete",clearCurrent:"clearCurrent"},features:[x.Ab],decls:2,vars:1,consts:[[1,"edit-container"],[3,"header",4,"ngIf"],[3,"header"],["novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"p-fluid"],[1,"p-field"],["for","productNameId"],["id","productNameId","type","text","placeholder","Name (required)","formControlName","productName","pInputText","","aria-describedby","productName-help",3,"ngClass","blur"],["id","productName-help","class","p-invalid",4,"ngIf"],["for","productCodeId"],["id","productCodeId","type","text","placeholder","Code (required)","formControlName","productCode","pInputText","","aria-describedby","productCode-help",3,"ngClass","blur"],["id","productCode-help","class","p-invalid",4,"ngIf"],["for","starRatingId"],["formControlName","starRating","id","starRatingId"],["class","p-invalid",4,"ngIf"],["for","descriptionId"],["id","descriptionId","placeholder","Description","formControlName","description","pInputTextarea","","autoResize","autoResize","aria-describedby","description-help",3,"ngClass","rows","blur"],["id","description-help","class","p-invalid",4,"ngIf"],["pButton","","pRipple","","type","submit","label","Save",3,"disabled"],["pButton","","pRipple","","type","button","label","Cancel",1,"p-button-secondary","p-ml-2",3,"click"],["pButton","","pRipple","","type","button","label","Delete",1,"p-button-danger","p-ml-2","p-mt-2",3,"click"],["id","productName-help",1,"p-invalid"],["id","productCode-help",1,"p-invalid"],[1,"p-invalid"],["id","description-help",1,"p-invalid"]],template:function(e,t){1&e&&(x.Tb(0,"div",0),x.Cc(1,he,26,17,"p-card",1),x.Sb()),2&e&&(x.Cb(1),x.kc("ngIf",t.selectedProduct))},directives:[W.l,se.a,re.p,re.j,re.e,re.a,re.i,re.c,oe.a,W.j,ie.a,ae.a,X.a],styles:[".edit-container[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}input[_ngcontent-%COMP%]{min-width:250px}@media only screen and (max-width:645px){.edit-container[_ngcontent-%COMP%]{margin-top:10px;margin-left:0}}"]}),e})(),ge=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.products$=this.store.select(G),this.errorMessage$=this.store.select(J),this.store.dispatch(c.loadProducts()),this.selectedProduct$=this.store.select(D),this.displayCode$=this.store.select(U)}checkChanged(){this.store.dispatch(c.toggleProductCode())}newProduct(){this.store.dispatch(c.initializeCurrentProduct())}productSelected(e){this.store.dispatch(c.setCurrentProduct({currentProductId:e.id}))}deleteProduct(e){this.store.dispatch(c.deleteProduct({productId:e.id}))}clearProduct(){this.store.dispatch(c.clearCurrentProduct())}saveProduct(e){this.store.dispatch(c.createProduct({product:e}))}updateProduct(e){this.store.dispatch(c.updateProduct({product:e}))}}return e.\u0275fac=function(t){return new(t||e)(x.Nb(i.h))},e.\u0275cmp=x.Hb({type:e,selectors:[["app-product-shell"]],decls:9,vars:18,consts:[[1,"p-d-flex","p-flex-wrap","shell"],[2,"flex","1",3,"displayCode","products","selectedProduct","errorMessage","displayCodeChanged","initializeNewProduct","productWasSelected"],[2,"flex","2",3,"selectedProduct","errorMessage","clearCurrent","update","delete","create"]],template:function(e,t){1&e&&(x.Tb(0,"div",0),x.Tb(1,"app-product-list",1),x.ac("displayCodeChanged",function(){return t.checkChanged()})("initializeNewProduct",function(){return t.newProduct()})("productWasSelected",function(e){return t.productSelected(e)}),x.ec(2,"async"),x.ec(3,"async"),x.ec(4,"async"),x.ec(5,"async"),x.Sb(),x.Tb(6,"app-product-edit",2),x.ac("clearCurrent",function(){return t.clearProduct()})("update",function(e){return t.updateProduct(e)})("delete",function(e){return t.deleteProduct(e)})("create",function(e){return t.saveProduct(e)}),x.ec(7,"async"),x.ec(8,"async"),x.Sb(),x.Sb()),2&e&&(x.Cb(1),x.kc("displayCode",x.fc(2,6,t.displayCode$))("products",x.fc(3,8,t.products$))("selectedProduct",x.fc(4,10,t.selectedProduct$))("errorMessage",x.fc(5,12,t.errorMessage$)),x.Cb(5),x.kc("selectedProduct",x.fc(7,14,t.selectedProduct$))("errorMessage",x.fc(8,16,t.errorMessage$)))},directives:[te,Pe],pipes:[W.b],styles:[".shell[_ngcontent-%COMP%]{height:calc(100vh - 58px - 58px - 2rem);width:100%}"]}),e})();var fe=r("ThbA");const me=[{path:"",component:ge}];let Ce=(()=>{class e{}return e.\u0275mod=x.Lb({type:e}),e.\u0275inj=x.Kb({factory:function(t){return new(t||e)},imports:[[o.a,s.e.forChild(me),i.j.forFeature("products",S),I.b.forFeature([q]),fe.a]]}),e})()}}]);