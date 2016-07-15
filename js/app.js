/*
    A Module is a small part of the project.
    Each module combines together to form an entire application.
    A module has a module name and initialized by ng-app in the html document

    var myApp = angular.module('myApp', []);
    Here myApp is the name of the namespace and [] contains the dependecy services which need to be injected in the module.
*/
var myApp = angular.module('myApp', [
    'ngRoute', 'ngImgCrop'
]);


myApp.config(['$routeProvider','$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/contacts/home', {
        templateUrl : 'partials/notes-index.html',
        controller : 'myController'
    }).when('/contacts/city/edit', {
        templateUrl : 'partials/city-operations.html',
        controller : 'cityController'
    }).when('/contacts/speciality/edit', {
        templateUrl : 'partials/speciality-operations.html',
        controller : 'specialityController'
    }).when('/contacts/subspeciality/edit', {
        templateUrl : 'partials/sub-speciality-operations.html',
        controller : 'subSpecialityController'
    }).when('/contacts/vendor/edit', {
        templateUrl : 'partials/vendor-operations.html',
        controller : 'vendorController'
    }).when('/contacts/vendor/address/edit', {
        templateUrl : 'partials/vendor-address-operations.html',
        controller : 'vendorAddressController'
    }).otherwise({
        redirectTo : '/contacts/city/edit'
    });

}]);
