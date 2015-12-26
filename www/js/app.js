var app= angular.module('ionicApp', ['ionic']);
  
 app.controller('AppCtrl', function($scope) {
      $scope.showDelete=false;
      $scope.re="[a-zA-Z0-9]";
      $scope.RE="[a-zA-Z]";
      $scope.disable=true;

     $scope.empnameError=false;
      $scope.empcodeError=false;
      $scope.emp={empCode:'', empName:''};
      $scope.empList=[ ];
    
     
     $scope.$watch('empForm.$valid',function(newVal){  
         console.log(newVal);
        $scope.disable=false;
         console.log($scope.disable);
         console.log('valid');
     });
     
     // Add Employee Function 
     $scope.addEmp=function(){
         
       /* if(!empForm.empcode.$error.pattern &&
        !empForm.empcode.$error.required &&
        !empForm.empname.$error.pattern &&
        !empForm.empname.$error.required)*/
        {
             console.log($scope.emp.empName);
                $scope.empList.push($scope.emp);
                $scope.emp={empCode:'', empName:''};
          
         }

 };
      $scope.updateEmp=function(emp,idx,validForm){
          if(validForm){
         emp=$scope.emp;
             $scope.empList[idx]=emp;
                $scope.emp={empCode:'', empName:''};
          }
    };
 });
              
              