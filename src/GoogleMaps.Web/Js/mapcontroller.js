var mapcont = angular.module('mapController.cont', ['uiGmapgoogle-maps']);

var cont = mapcont.controller("MapController", function ($scope, uiGmapGoogleMapApi) {
    
    $scope.markers = [
        { id: 0, coords: { latitude: 50.800, longitude: 0.260 }, options: { clickable: false } },
        { id: 1, coords: { latitude: 50.801, longitude: 0.261 }, options: { draggable: true, icon: '/Content/img/marker.png' }},
        { id: 2, coords: { latitude: 50.801, longitude: 0.259 }, options: { icon: { url: '/Content/img/marker2.png', size: { width: 100, height: 100 }, origin: { x: 0, y: 10 } }, title: 'marker title example' } }
    ];


    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = {
            center: { latitude: 50.8005, longitude: 0.2605 },
            streetViewControl: true,
            zoom: 17
        };
    });
});
