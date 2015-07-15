/// <reference path="../Scripts/angular-1.1.4.js" />

var app = angular.module('myApp', ['ngRoute','ui.bootstrap','ngDragDrop']);
//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/project',
            {
                controller: 'statusController',
                templateUrl: '/partials/project.html'
            })
        .otherwise({ redirectTo: '/project'});

    
});




