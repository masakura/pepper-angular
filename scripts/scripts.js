"use strict";angular.module("pepperAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/cookbook/:id",{templateUrl:"views/cookbook.html",controller:"CookbookCtrl",controllerAs:"cookbook"}).otherwise({redirectTo:"/"})}]).run(["$route",function(a){}]),angular.module("pepperAngularApp").controller("MainCtrl",["qiSession","cookService",function(a,b){this.cooks=b.get(),this.click=function(){a.service("ALMemory").done(function(a){console.log("ALMemory取得成功"),a.raiseEvent("PepperQiMessaging/fromtablet","押すなっていったじゃん!")})}}]),angular.module("pepperAngularApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pepperAngularApp").factory("qiSession",function(){return window.QiSession?new QiSession:!1}),angular.module("pepperAngularApp").directive("pepperHeader",function(){return{templateUrl:"views/pepperheader.html",restrict:"E",scope:{}}}),angular.module("pepperAngularApp").factory("cookService",function(){var a=[{id:"cook0001",name:"だんぼ",image:"images/image-01.jpg"},{id:"cook0002",name:"串揚げ",image:"images/image-02.jpg"}];return{get:function(){return a}}}),angular.module("pepperAngularApp").controller("PepperHeaderCtrl",["$window",function(a){this.reload=function(){a.location.reload()}}]),angular.module("pepperAngularApp").controller("CookbookCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pepperAngularApp").filter("network",["$window",function(a){return function(b){var c=a.location.pathname.indexOf("lastUploadedChoregrapheBehavior")>=0?"http://masakura.github.io/pepper-angular/"+b:b;return c}}]),angular.module("pepperAngularApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/cookbook.html","<p>This is the cookbook view.</p>"),a.put("views/layout.html",'<pepper-header></pepper-header> <div class="container"> <div ng-view=""></div> </div>'),a.put("views/main.html",'<div class="container"> <div class="row"> <div class="col-xs-6 col-md-3" ng-repeat="cook in main.cooks"> <a ng-href="#/cookbook/{{cook.id}}" class="thumbnail"> <img ng-src="{{cook.image | network}}" alt="{{cook.name}}"> </a> </div> </div> </div>'),a.put("views/pepperheader.html",'<div class="header" ng-controller="PepperHeaderCtrl as header"> <div class="navbar navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/"> <span class="glyphicon glyphicon-home" aria-hidden="true"></span> </a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <form class="navbar-form navbar-left" role="search"> <div class="input-group"> <input type="text" class="form-control" placeholder="Search"> <span class="input-group-btn"> <button type="submit" class="btn btn-default"> <span class="glyphicon glyphicon-search"></span> </button> </span> </div> </form> <ul class="nav navbar-nav navbar-right"> <li> <button type="button" class="btn btn-default" ng-click="header.reload()"> <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> </button> </li> </ul> </div> </div> </div> </div>')}]);