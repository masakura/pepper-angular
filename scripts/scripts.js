"use strict";angular.module("pepperAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("pepperAngularApp").controller("MainCtrl",["$window","qiSession",function(a,b){this.click=function(){b.service("ALMemory").done(function(a){console.log("ALMemory取得成功"),a.raiseEvent("PepperQiMessaging/fromtablet","押したね")})},this.reload=function(){a.location.reload()}}]),angular.module("pepperAngularApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pepperAngularApp").factory("qiSession",function(){return window.QiSession?new QiSession:!1}),angular.module("pepperAngularApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="container"> <button type="button" class="btn btn-default btn-lg" ng-click="main.reload()">Reload</button> <button type="button" class="btn btn-primary btn-lg" ng-click="main.click()">おすな!</button> </div>')}]);