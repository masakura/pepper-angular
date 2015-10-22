"use strict";angular.module("pepperAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/cookbook/:id",{templateUrl:"views/cookbook.html",controller:"CookbookCtrl",controllerAs:"cookbook"}).otherwise({redirectTo:"/"})}]).run(["$route",function(a){}]),angular.module("pepperAngularApp").controller("MainCtrl",["cookService","messageService",function(a,b){this.cooks=a.all()}]),angular.module("pepperAngularApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pepperAngularApp").factory("qiSession",function(){return window.QiSession?new QiSession:!1}),angular.module("pepperAngularApp").directive("pepperHeader",function(){return{templateUrl:"views/pepperheader.html",restrict:"E",scope:{}}}),angular.module("pepperAngularApp").factory("cookService",function(){var a=[{id:"cook0001",name:"だんぼ",image:"images/image-01.jpg",ingredients:[{name:"鮭",quantity:"二切れ"},{name:"塩コショウ",quantity:"少々"},{name:"油",quantity:"使わない"}],directions:[{message:"cook0001",process:"鮭に塩コショウをし10分置く"},{message:"cook0002",process:"ペーパーで水気をふく"},{message:"cook0003",process:"フライパンに水を入れ、\nクッキングシートを敷く"},{message:"cook0004",process:"水が湧いたら、鮭をいれて5分くらい焼く"},{message:"cook0005",process:"裏返して3分焼く"}]},{id:"cook0002",name:"串揚げ",image:"images/image-02.jpg"}];return{all:function(){return a},get:function(b){var c=a.filter(function(a){return a.id===b});return c.length>0?c[0]:void 0}}}),angular.module("pepperAngularApp").controller("PepperHeaderCtrl",["$window",function(a){this.reload=function(){a.location.reload()}}]),angular.module("pepperAngularApp").controller("CookbookCtrl",["$routeParams","cookService","messageService",function(a,b,c){this.cook=b.get(a.id),this.start=function(a){c.send(a.message)}}]),angular.module("pepperAngularApp").filter("network",["pepperService",function(a){return a["native"]?function(a){return a?0===a.indexOf("http")?a:"http://masakura.github.io/pepper-angular/"+a:a}:function(a){return a}}]),angular.module("pepperAngularApp").service("pepperService",["$window",function(a){return{"native":a.location.pathname.indexOf("lastUploadedChoregrapheBehavior")>=0}}]),angular.module("pepperAngularApp").service("pepperMessageService",["qiSession",function(a){return{send:function(b){return a.service("ALMemory").then(function(a){console.log("ALMemory取得成功"),a.raiseEvent("PepperQiMessaging/fromtablet",b)})}}}]),angular.module("pepperAngularApp").service("messageService",["pepperService","pepperMessageService","fakeMessageService",function(a,b,c){return a["native"]?b:c}]),angular.module("pepperAngularApp").service("fakeMessageService",["$log",function(a){return{send:function(b){a.log(b)}}}]),angular.module("pepperAngularApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/cookbook.html",'<img ng-src="{{cookbook.cook.image | network}}" alt="{{cookbook.cook.name}}"> <ul class="list-group"> <li class="list-group-item" ng-repeat="ingredient in  cookbook.cook.ingredients"> {{ingredient.name}}: {{ingredient.quantity}} </li> </ul> <ol class="list-group"> <li class="list-group-item" style="display: list-item" ng-repeat="direction in cookbook.cook.directions" ng-click="cookbook.start(direction)"> {{direction.process}} </li> </ol>'),a.put("views/layout.html",'<pepper-header></pepper-header> <div class="container"> <div ng-view=""></div> </div>'),a.put("views/main.html",'<div class="container"> <div class="row"> <div class="col-xs-6 col-md-3" ng-repeat="cook in main.cooks"> <a ng-href="#/cookbook/{{cook.id}}" class="thumbnail"> <img ng-src="{{cook.image | network}}" alt="{{cook.name}}"> </a> </div> </div> </div>'),a.put("views/pepperheader.html",'<div class="header" ng-controller="PepperHeaderCtrl as header"> <div class="navbar navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/"> <span class="glyphicon glyphicon-home" aria-hidden="true"></span> </a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <form class="navbar-form navbar-left" role="search"> <div class="input-group"> <input type="text" class="form-control" placeholder="Search"> <span class="input-group-btn"> <button type="submit" class="btn btn-default"> <span class="glyphicon glyphicon-search"></span> </button> </span> </div> </form> <ul class="nav navbar-nav navbar-right"> <li> <button type="button" class="btn btn-default" ng-click="header.reload()"> <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> </button> </li> </ul> </div> </div> </div> </div>')}]);