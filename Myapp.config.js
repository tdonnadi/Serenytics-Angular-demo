'use strict';

angular.
  module('SerenyticsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider. 
        when('/', {
          templateUrl: 'MyAngularModule.htm',
          controller: 'HelloController'
        }).
         when('/top10won', {
          templateUrl: 'top10won.htm',
          controller: 'HelloController'
        }).
         when('/top10commit', {
          templateUrl: 'top10commit.htm',
          controller: 'HelloController'
        }).
         when('/top10pipe', {
          templateUrl: 'top10pipe.htm',
          controller: 'HelloController'
        }).
        otherwise('/',{
        });
    }
  ]);
