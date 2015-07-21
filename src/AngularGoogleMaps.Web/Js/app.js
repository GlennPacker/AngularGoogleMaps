var mapApp = angular.module('mapapp', ['ngRoute', 'mapcont', 'geocodecontroller']);

mapApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/basicmap', {
          templateUrl: '/Home/BasicMap',
          controller: 'mapcont'
      }).
        when('/geocode', {
            templateUrl: '/Home/GeoCode',
            controller: 'geocodecontroller'
        }).
      otherwise({
          redirectTo: '/basicmap'
      });
}]);

