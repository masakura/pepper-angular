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
        image: 'images/image-01.jpg',
        ingredients: [
          {
            name: '鮭',
            quantity: '二切れ'
          }, {
            name: '塩コショウ',
            quantity: '少々'
          }, {
            name: '油',
            quantity: '使わない'
          }
        ],
        directions: [
          {
            message: 'cook0001',
            process: '鮭に塩コショウをし10分置く'
          }, {
            message: 'cook0002',
            process: 'ペーパーで水気をふく'
          }, {
            message: 'cook0003',
            process: 'フライパンに水を入れ、\nクッキングシートを敷く'
          }, {
            message: 'cook0004',
            process: '水が湧いたら、鮭をいれて5分くらい焼く'
          }, {
            message: 'cook0005',
            process: '裏返して3分焼く'
          }
        ]
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
