myApp.controller('specialityController', ['$scope', '$http', 'commonServices','CONSTANTS', function ($scope, $http, commonServices,CONSTANTS) {


    /*Add Speciality Image*/
    $scope.specialityImage='';
    $scope.specialityCroppedImage='';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.specialityImage=evt.target.result;

        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#specialityFileInput')).on('change',handleFileSelect);

    /*Add Sub Speciality Image*/
    $scope.subSpecialityImage='';
    $scope.subSpecialityCroppedImage='';

    var handleFileSelectSub=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.subSpecialityImage=evt.target.result;

        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#subSpecialityFileInput')).on('change',handleFileSelectSub);

}]);
