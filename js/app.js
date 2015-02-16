angular.module('indraApp', ['ngRoute'])
    .controller('ListController', ['$scope', '$http', function($scope, $http) {
        $scope.employees = {};
        
        $http.get('http://54.186.232.121/indra/api/employees/employee').
            success(function(data, status, headers, config) {
                $scope.employees = data.data;
            }).
            error(function(data, status, headers, config) {
            });
    }
    ])
    .controller('DetailController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
        var id = $routeParams.id
        
        $http.get('http://54.186.232.121/indra/api/employees/employee/id/' + id).
            success(function(data, status, headers, config) {
                $scope.employee = data.data;
            }).
            error(function(data, status, headers, config) {
            });
    }
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'ListController',
                templateUrl:'list.html'
            })
            .when('/detail/:id', {
                controller:'DetailController',
                templateUrl:'detail.html'
            });
    });

