var mapApp = angular.module('Mapapp.Main', ['ngRoute', 'mapController.cont', 'geocodeController.cont']);

mapApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/basicmap', {
          templateUrl: '/Angular/BasicMap',
          controller: 'MapController'
      }).
        when('/geocode', {
            templateUrl: '/Angular/GeoCode',
            controller: 'GeocodeController'
        }).
      otherwise({
          redirectTo: '/basicmap'
      });
}]);

