
        var validationApp = angular.module('validationApp', []);

        validationApp.controller('mainController', function($scope){

          $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{7}$/;


          $scope.add_update = function()
          {
            $scope.cDate = new Date();
            $scope.list.push({ date: $scope.cDate, project: $scope.project, name : $scope.name, email : $scope.email, phone : $scope.phone, yesterday : $scope.yesterday, today : $scope.today, impediments : $scope.impediments });  

            document.forms['userForm'].reset();;
          };
          $scope.deleteUpdate = function(val)
          {
            $scope.list.splice($scope.list.indexOf(val),1);

          };


        }
        );