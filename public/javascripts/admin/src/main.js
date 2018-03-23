var rain = angular.module('rain', ['ngSanitize', 'ngAnimate', 'ngRoute', 'angularjs-datetime-picker']);



//Services
rain.factory('vandm', function($http){
  return {
    get : function(){
      return $http.get('/api-file/v-and-m');
    },
    // delete : function(id){
    //   return $http.delete('/api/student/' + id);
    // }
  };
});

// Vision and Mission
rain.controller('vmCtrl', function ($scope, $http, $timeout, vandm) {
    $scope.success = false; 
    
    vandm.get().then(function(response){
      $scope.vAndm = response.data;
    })
    
    $scope.updateVM = function(){
      $http.put('/api-file/v-and-m', $scope.infoData).then(function(response){                                              
        $scope.vAndm = response.data;
                  $timeout(function(){
                    $scope.success = true;
                  }, 1000);                
        })
    }
});



rain.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
   $locationProvider.hashPrefix('');
   // CBCS
  $routeProvider.when('/', {
    templateUrl : '/content-partials/cbcs/home.html'        
  })
  .when('/rule-generator', {
    templateUrl : '/content-partials/cbcs/course-code-rule-generator.html'        
  })
  .when('/m-course-list', {
    templateUrl : '/content-partials/cbcs/master-course-list.html'        
  })
  .when('/bos', {
    templateUrl : '/content-partials/cbcs/bos.html'        
  })
  .when('/control-panel', {
    templateUrl : '/content-partials/cbcs/control-panel.html'        
  })
  .when('/course-publishing', {
    templateUrl : '/content-partials/cbcs/course-publishing.html'        
  })
  .when('/view-published-course', {
    templateUrl : '/content-partials/cbcs/view-published-course.html'        
  })  
  .when('/student-billing-approval', {
    templateUrl : '/content-partials/cbcs/student-billing-approval.html'        
  })
  .when('/status-report', {
    templateUrl : '/content-partials/cbcs/status-report.html'        
  })
  .when('/attendance-edit-report', {
    templateUrl : '/content-partials/cbcs/attendance-edit-report.html'        
  })
  // Report
  .when('/registration-details-report', {
    templateUrl : '/content-partials/reports/registration-details-report.html'
  })  
  .otherwise('/');

}]);