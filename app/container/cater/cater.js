/**
 * Created by JackDan9 on 2018/2/21.
 */
'use strict';

angular.module('myApp.cater', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cater', {
    templateUrl: 'container/cater/cater.html',
    controller: 'CaterCtrl'
  });
}])

.controller('CaterCtrl', [function() {

}]);