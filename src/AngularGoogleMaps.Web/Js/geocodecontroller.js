var geocont = angular.module('geocodecontroller', ['uiGmapgoogle-maps']);

var cont = geocont.controller("geocodecontroller", function ($scope, uiGmapGoogleMapApi) {
    $scope.markers = []
    $scope.location = { "k": 50.888169, "D": 0.26173930000004475 };
    $scope.lat = 50.888169
    $scope.lon = 0.26173930000004475
    $scope.loc = { latitude: 10.888169, longitude: 0.26173930000004475 }


    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = {
            streetViewControl: true,
            zoom: 15
        };

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ "address": '9 chichester road hellingly bn 27 4bf' }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                $scope.loc = { latitude: results[0].geometry.location.k, longitude: results[0].geometry.location.D };
            }
        });
    });

    $scope.Centre = function () {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ "address": $scope.address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                $scope.loc = { latitude: results[0].geometry.location.k, longitude: results[0].geometry.location.D };
            }
        });
    }

    $scope.message = "hello";
});

cont.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})