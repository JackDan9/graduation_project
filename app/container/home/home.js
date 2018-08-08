/**
 * Created by JackDan9 on 2018/3/14.
 */
'use strict';

angular.module('myApp.home', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'container/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', [function () {

    }]);