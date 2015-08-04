var geocont = angular.module('geocodeController.cont', ['uiGmapgoogle-maps']);

var cont = geocont.controller("GeocodeController", function ($scope, uiGmapGoogleMapApi) {
    $scope.markers = []
    $scope.loc = { latitude: 50.888169, longitude: 0.26173930000004475 }
    
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ "address": '9 chichester road hellingly bn 27 4bf' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            $scope.loc = { latitude: results[0].geometry.location.k, longitude: results[0].geometry.location.D };
            $scope.addMarker = { latitude: results[0].geometry.location.k, longitude: results[0].geometry.location.D };
        }
    });

    uiGmapGoogleMapApi.then(function (maps) {});

    $scope.Centre = function () {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ "address": $scope.address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                $scope.loc = { latitude: results[0].geometry.location.k, longitude: results[0].geometry.location.D };
            }
        });
    }

    //$scope.addMarker = function () {
    //    $scope.markers.push($scope.loc);
    //    console.log('Maker add: ' + $scope.markers);
    //};  
});

cont.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})