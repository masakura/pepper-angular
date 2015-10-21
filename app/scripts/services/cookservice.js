'use strict';

/**
 * @ngdoc service
 * @name pepperAngularApp.cookService
 * @description
 * # cookService
 * Factory in the pepperAngularApp.
 */
angular.module('pepperAngularApp')
  .factory('cookService', function () {
    var cookbooks = [
      {
        id: 'cook0001',
        name: 'だんぼ',
        image: 'images/image-01.jpg'
      }, {
        id: 'cook0002',
        name: '串揚げ',
        image: 'images/image-02.jpg'
      },
    ];

    return {
      all: function () {
        return cookbooks;
      },
      get: function (id) {
        var filtered = cookbooks.filter(function (cookbook) {
          return cookbook.id === id;
        });
        return filtered.length > 0 ? filtered[0] : undefined;
      }
    };
  });
