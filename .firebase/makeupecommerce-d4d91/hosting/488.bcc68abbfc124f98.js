"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[488],{7488:(g,s,c)=>{c.r(s),c.d(s,{ProductPage:()=>P});var u=c(177),i=c(4341),a=c(654),t=c(4438),d=c(1626);function l(o,r){if(1&o&&(t.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t.EFF(3),t.k0s()(),t.j41(4,"ion-card-content"),t.nrm(5,"img",2),t.k0s()()),2&o){const e=t.XpG();t.R7$(3),t.JRh(e.singleProduct.name),t.R7$(2),t.FS9("alt",e.singleProduct.name),t.FS9("src",e.singleProduct.api_featured_image,t.B4B)}}let P=(()=>{var o;class r{constructor(n){this.http=n}ngOnInit(){this.http.get("http://makeup-api.herokuapp.com/api/v1/products/1048.json").subscribe(n=>{this.singleProduct=n,console.log(n)})}}return(o=r).\u0275fac=function(n){return new(n||o)(t.rXU(d.Qq))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-product"]],standalone:!0,features:[t.aNF],decls:6,vars:2,consts:[[3,"translucent"],[4,"ngIf"],[3,"alt","src"]],template:function(n,_){1&n&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Products"),t.k0s()()(),t.j41(4,"ion-content"),t.DNE(5,l,6,3,"ion-card",1),t.k0s()),2&n&&(t.Y8G("translucent",!0),t.R7$(5),t.Y8G("ngIf",_.singleProduct))},dependencies:[a.W9,a.eU,a.BC,a.ai,u.MD,u.bT,i.YN,a.b_,a.ME,a.tN,a.I9]}),r})()}}]);