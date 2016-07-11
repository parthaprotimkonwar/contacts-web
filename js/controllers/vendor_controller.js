myApp.controller('vendorController', ['$scope', '$http', '$location', 'commonServices','CONSTANTS', function ($scope, $http, $location, commonServices,CONSTANTS) {
    $scope.vendorImage='';
    $scope.vendorCroppedImage='';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.vendorImage=evt.target.result;

        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#vendorFileInput')).on('change',handleFileSelect);

    $scope.addAddress = function() {
        console.log('go go go');
        $location.path('/contacts/vendor/address/edit');

    }
}]);
