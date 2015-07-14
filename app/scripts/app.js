'use strict';

/**
 * @ngdoc overview
 * @name enactusyoApp
 * @description
 * # enactusyoApp
 *
 * Main module of the application.
 */
angular
  .module('enactusyoApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/achievments', {
        templateUrl: 'views/achievments.html',
        controller: 'AboutCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'AboutCtrl'
      })
      .when('/parisutham', {
        templateUrl: 'views/parisutham.html',
        controller: 'AboutCtrl'
      })
      .when('/dhanyam', {
        templateUrl: 'views/dhanyam.html',
        controller: 'AboutCtrl'
      })
      .when('/ayurekha', {
        templateUrl: 'views/ayurekha.html',
        controller: 'AboutCtrl'
      })
      .when('/swatch', {
        templateUrl: 'views/swatch.html',
        controller: 'AboutCtrl'
      })
      .when('/krishi', {
        templateUrl: 'views/krishi.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl'
      })





      .otherwise({
        redirectTo: '/'
      });
  });
  

