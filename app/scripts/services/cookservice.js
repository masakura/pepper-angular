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
            process: '鮭に塩コショウをし10分置く'
          }, {
            process: 'ペーパーで水気をふく'
          }, {
            process: 'フライパンに水を入れ、\nクッキングシートを敷く'
          }, {
            process: '水が湧いたら、鮭をいれて5分くらい焼く'
          }, {
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
