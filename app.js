var app = angular.module('myApp', ['ngRoute','ui.bootstrap','ngDragDrop']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/project',
            {
                controller: 'statusController',
                templateUrl: '/partials/project.html'
            })
        .otherwise({ redirectTo: '/project' });
});




