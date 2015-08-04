var mapcont = angular.module('mapController.cont', ['uiGmapgoogle-maps']);

var cont = mapcont.controller("MapController", function ($scope, uiGmapGoogleMapApi) {
    $scope.markers = []

    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = {
            center: { latitude: 50.8, longitude: 0.26 },
            streetViewControl: true,
            zoom: 10
        };
    });
});

cont.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})