'use strict';

var app = angular.module('ChitownMarksman', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/suggestion/:id', {
        controller: 'SuggestionController',
        templateUrl: 'views/suggestion.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);