"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[963],{4963:(Y,d,s)=>{s.r(d),s.d(d,{ShopModule:()=>H});var c=s(8583),v=s(4466),p=s(15);class h{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var t=s(3018),m=s(1841);class C{constructor(){this.data=[]}}var g=s(8002),u=s(5917),S=s(2340);let _=(()=>{class o{constructor(e){this.http=e,this.baseUrl=S.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new C,this.shopParams=new h,this.productCache=new Map}getProduct(e){let n;return this.productCache.forEach(i=>{n=i.find(a=>a.id===e)}),n?(0,u.of)(n):this.http.get(this.baseUrl+"products/"+e)}getProducts(e){if(!1===e&&(this.productCache=new Map),this.productCache.size>0&&!0===e&&this.productCache.has(Object.values(this.shopParams).join("-")))return(0,u.of)(this.pagination);let n=new m.LE;return 0!=this.shopParams.brandId&&(n=n.append("brandId",this.shopParams.brandId.toString())),0!=this.shopParams.typeId&&(n=n.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(n=n.append("search",this.shopParams.search)),n=n.append("sort",this.shopParams.sort),n=n.append("pageIndex",this.shopParams.pageNumber.toString()),n=n.append("pageIndex",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:n}).pipe((0,g.U)(i=>(this.productCache.set(Object.values(this.shopParams).join("-"),i.body.data),this.pagination=i.body,this.pagination)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getBrands(){return this.brands.length>0?(0,u.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,g.U)(e=>(this.brands=e,e)))}getTypes(){return this.types.length>0?(0,u.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,g.U)(e=>(this.types=e,e)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function Z(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1,"Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Results"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize,""),t.xp6(3),t.Oqu(e.totalCount)}}function P(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," resultat for this filter"),t.qZA())}let b=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"header"),t.YNc(1,Z,8,3,"span",0),t.YNc(2,P,5,0,"span",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.totalCount&&n.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===n.totalCount))},directives:[c.O5],styles:[""]}),o})();var l=s(665),f=s(805);let T=(()=>{class o{constructor(e){this.basketService=e}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return n.addItemToBasket()}),t.qZA(),t.TgZ(5,"button",5),t._uU(6,"View"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"a",7),t.TgZ(9,"h6",8),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.s9C("src",n.product.pictureUrl,t.LSH),t.s9C("alt",n.product.name),t.xp6(3),t.MGl("routerLink","/shop/",n.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",n.product.id,""),t.xp6(2),t.Oqu(n.product.name),t.xp6(2),t.Oqu(t.lcZ(13,6,n.product.price)))},directives:[p.rH,p.yS],pipes:[c.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transform:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]}),o})();var x=s(2214);let y=(()=>{class o{constructor(){this.pageChanged=new t.vpe}ngOnInit(){}onPagerChange(e){this.pageChanged.emit(e.page)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(e,n){1&e&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(a){return n.onPagerChange(a)}),t.qZA()),2&e&&t.Q6J("boundaryLinks",!0)("totalItems",n.totalCount)("ngModel",n.pageNumber)("itemsPerPage",n.pageSize)},directives:[x.Qt,l.JJ,l.On],styles:[""]}),o})();const A=["search"];function q(o,r){if(1&o&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&o){const e=r.$implicit,n=t.oxw(2);t.Q6J("selected",n.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"li",19),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onBrandSelected(a.id)}),t._uU(1),t.qZA()}if(2&o){const e=r.$implicit,n=t.oxw(2);t.ekj("active",e.id===n.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"li",20),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onTypeSelected(a.id)}),t._uU(1),t.qZA()}if(2&o){const e=r.$implicit,n=t.oxw(2);t.ekj("active",e.id===n.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function I(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5",10),t._uU(2,"Sort"),t.qZA(),t.TgZ(3,"select",11),t.NdJ("change",function(i){return t.CHM(e),t.oxw().onSortSelected(i.target.value)}),t.YNc(4,q,2,3,"option",12),t.qZA(),t.TgZ(5,"h5",13),t._uU(6,"Brands"),t.qZA(),t.TgZ(7,"ul",14),t.YNc(8,N,2,4,"li",15),t.qZA(),t.TgZ(9,"h5",13),t._uU(10,"Types"),t.qZA(),t.TgZ(11,"ul",16),t.YNc(12,O,2,4,"li",17),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function k(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t.TgZ(1,"input",22,23),t.NdJ("keyup.enter",function(){return t.CHM(e),t.oxw().onSearch()}),t.qZA(),t.TgZ(3,"button",24),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSearch()}),t._uU(4,"Search"),t.qZA(),t.TgZ(5,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().onReset()}),t._uU(6,"Reset"),t.qZA(),t.qZA()}}function M(o,r){if(1&o&&(t.TgZ(0,"div",26),t._UZ(1,"app-product-item",27),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("product",e)}}function w(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",28),t.TgZ(1,"app-pager",29),t.NdJ("pageChanged",function(i){return t.CHM(e),t.oxw().onPageChanged(i)}),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)("totalCount",e.totalCount)}}let U=(()=>{class o{constructor(e){this.shopService=e,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(e=!1){this.shopService.getProducts(e).subscribe(n=>{this.products=n.data,this.totalCount=n.count},n=>{console.log(n)})}getBrands(){this.shopService.getBrands().subscribe(e=>{this.brands=[{id:0,name:"All"},...e]},e=>{console.log(e)})}getTypes(){this.shopService.getTypes().subscribe(e=>{this.types=[{id:0,name:"All"},...e]},e=>{console.log(e)})}onBrandSelected(e){const n=this.shopService.getShopParams();n.brandId=e,n.pageNumber=1,this.shopService.setShopParams(n),this.getProducts()}onTypeSelected(e){const n=this.shopService.getShopParams();n.typeId=e,n.pageNumber=1,this.shopService.setShopParams(n),this.getProducts()}onSortSelected(e){const n=this.shopService.getShopParams();n.sort=e,n.pageNumber=1,this.shopService.setShopParams(n),this.getProducts()}onPageChanged(e){const n=this.shopService.getShopParams();n.pageNumber!==e&&(n.pageNumber=e,this.shopService.setShopParams(n),this.getProducts(!0))}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm.nativeElement.value,this.shopService.setShopParams(e),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new h,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop"]],viewQuery:function(e,n){if(1&e&&t.Gf(A,5),2&e){let i;t.iGM(i=t.CRH())&&(n.searchTerm=i.first)}},decls:11,vars:7,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],["class","form-inline",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3","mt-4","mb-3"],[1,"custom-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"text-warning","ml-3"],[1,"list-group","my-3"],["class","list-group-item","id","menu",3,"active","value","click",4,"ngFor","ngForOf"],["id","menu",1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"selected","value"],["id","menu",1,"list-group-item",3,"value","click"],[1,"list-group-item",3,"value","click"],[1,"form-inline"],["placeholder","Search","type","text",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","pageNumber","totalCount","pageChanged"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"section",2),t.YNc(3,I,13,3,"ng-container",3),t.qZA(),t.TgZ(4,"section",4),t.TgZ(5,"div",5),t._UZ(6,"app-paging-header",6),t.YNc(7,k,7,0,"div",7),t.qZA(),t.TgZ(8,"div",1),t.YNc(9,M,2,1,"div",8),t.qZA(),t.YNc(10,w,2,3,"div",9),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",n.types&&n.brands),t.xp6(3),t.Q6J("totalCount",n.totalCount)("pageSize",n.shopParams.pageSize)("pageNumber",n.shopParams.pageNumber),t.xp6(1),t.Q6J("ngIf",n.products),t.xp6(2),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",n.totalCount>0))},directives:[c.O5,b,c.sg,l.YN,l.Kr,T,y],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item[_ngcontent-%COMP%]:active{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95620b4;border-radius:10px}"]}),o})();var J=s(7285);function z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"i",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().decrementQuantity()}),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA(),t.TgZ(13,"i",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().incrementQuantity()}),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().addItemToBasket()}),t._uU(15,"Add to Cart"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"div",12),t.TgZ(18,"h4"),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,6,e.product.price)),t.xp6(5),t.Oqu(e.quantity),t.xp6(9),t.Oqu(e.product.description)}}const F=[{path:"",component:U},{path:":id",component:(()=>{class o{constructor(e,n,i,a){this.shopService=e,this.activedRoute=n,this.bcService=i,this.basketService=a,this.quantity=1,this.bcService.set("@productDetails","")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){var e=+this.activedRoute.snapshot.paramMap.get("id");this.shopService.getProduct(e).subscribe(n=>{this.product=n,this.bcService.set("@productDetails",n.name)},n=>{console.log(n)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(p.gz),t.Y36(J.pm),t.Y36(f.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,z,22,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.product))},directives:[c.O5],pipes:[c.H9],styles:[""]}),o})(),data:{breadcrumb:{alias:"productDetails"}}}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(F)],p.Bz]}),o})(),H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,v.m,Q]]}),o})()}}]);