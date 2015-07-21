var mapcont = angular.module('mapcont', ['uiGmapgoogle-maps']);

var cont = mapcont.controller("mapcont", function ($scope, uiGmapGoogleMapApi) {
    $scope.markers = []


    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = {
            center: { latitude: 0, longitude: -73 },
            streetViewControl: true,
            zoom: 8
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