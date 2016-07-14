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

    //Add a Speciality
    /*----------------------------------------------------------------------------------------------------*/
    $scope.addSpeciality = function() {
        var data = {"speciality" : $scope.speciality.name, "status" : "ACTIVE"};
        $scope.addSpecialityPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/onboard/speciality",CONSTANTS.POST_METHOD,data);
        $scope.addSpecialityPromise.success(function (data, status, headers, config) {
            console.log('Got back a response');
            console.log(data);
            $scope.listSpecialities();    //list all the specialities
            $scope.operationStatus = CONSTANTS.SUCCESS;
            $scope.message = 'Data push is successful';
            $scope.speciality = {};
        }).error(function (data, status, headers, config) {
            console.log('AWS DOWN');
            $scope.operationStatus = CONSTANTS.FAILURE;
            $scope.message = 'Unable to push data';
        });
    }

    $scope.listSpecialities = function() {
        $scope.addSpecialityPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/list/specialities",CONSTANTS.GET_METHOD,null);
        $scope.addSpecialityPromise.success(function (data, status, headers, config) {
            console.log('Got back a response');
            console.log(data);
            $scope.specialityList = data.data;
        }).error(function (data, status, headers, config) {
            console.log('AWS DOWN');
        });
    }

    $scope.listSpecialities();

    /*----------------------------------------------------------------------------------------------------*/

    $scope.findSpecialityById = function(id) {
        for(var i=0; i<$scope.specialityList.length; i++) {
            var speciality = $scope.specialityList[i];
            if(speciality.specialityId == id) {
                return speciality.speciality;
            }
        }
        return id;
    }

    //Add a SubSpeciality
    $scope.addSubSpeciality = function() {
        var data = {"specialityId" : $scope.subspeciality.speciality_Id, "subSpeciality" : $scope.subspeciality.name, "status" : "ACTIVE"};
        $scope.addSubSpecialityPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/onboard/subspeciality",CONSTANTS.POST_METHOD,data);
        $scope.addSubSpecialityPromise.success(function (data, status, headers, config) {
            console.log('Got back a response');
            console.log(data);
            $scope.listSubSpecialities();    //list all the specialities
            $scope.operationStatus = CONSTANTS.SUCCESS;
            $scope.message = 'Data push is successful';
            $scope.subspeciality = {};
        }).error(function (data, status, headers, config) {
            console.log('AWS DOWN');
            $scope.operationStatus = CONSTANTS.FAILURE;
            $scope.message = 'Unable to push data';
        });
    }

    $scope.listSubSpecialities = function() {
        $scope.addSubSpecialityPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/list/subspecialities",CONSTANTS.GET_METHOD,null);
        $scope.addSubSpecialityPromise.success(function (data, status, headers, config) {
            console.log('Got back a response');
            console.log(data);
            $scope.subSpecialityList = data.data;
        }).error(function (data, status, headers, config) {
            console.log('AWS DOWN');
        });
    }

    $scope.listSubSpecialities();

    jQuery(function($) {
        $(".alert").alert();
     })

}]);
