var geocont = angular.module('geocodecontroller', ['uiGmapgoogle-maps']);

var cont = geocont.controller("geocodecontroller", function ($scope, uiGmapGoogleMapApi) {
    $scope.markers = []

    


    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = {
            center: { latitude: 0, longitude: -73 },
            streetViewControl: true,
            zoom: 8
        };

        var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ "address": '9 chichester road hellingly bn 27 4bf' }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                    var location = results[0].geometry.location;
                    $scope.map.panTo(location);
                }
            });
       
    });

    $scope.message = "hello";
});

cont.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})