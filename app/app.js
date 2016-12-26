'use strict';

var app = angular.module('ChitownMarksman', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/portfolio', {
        controller: 'PortfolioController',
        templateUrl: 'views/portfolio.html'
    })
    .when('/gallery/:id', {
        controller: 'GalleryController',
        templateUrl: 'views/gallery.html'
    })
    .when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    })
    .when('/contact', {
        controller: 'GalleryController',
        templateUrl: 'views/contact.html'
    })
    /*.when('/suggestion/:id', {
        controller: 'SuggestionController',
        templateUrl: 'views/suggestion.html'
    })*/
    .otherwise({
        redirectTo: '/'
    });
}]);