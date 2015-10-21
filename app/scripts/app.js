'use strict';

/**
 * @ngdoc overview
 * @name pepperAngularApp
 * @description
 * # pepperAngularApp
 *
 * Main module of the application.
 */
angular
  .module('pepperAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cookbook/:id', {
        templateUrl: 'views/cookbook.html',
        controller: 'CookbookCtrl',
        controllerAs: 'cookbook'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($route) { // jshint ignore:line
    // これを書いておかないと ng-view inside ng-include が動かない
  });
