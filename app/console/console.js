angular.module('uiRouterSample.console', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////////
        // Home Screen //
        /////////////////

        .state('console', {
          url: '/console',
          views: {

            '': {
              templateUrl: 'app/console/console.html',
              controller: ['$scope', '$state', '$rootScope', '$http',
                function (  $scope,   $state, $rootScope, $http) {
                  
                  $rootScope.enableConfiguration = "disabled";
                  
                  alert("console-6");
                  
                  $http.get("app/console/console.html")
                  .success(function(data) {
                    //$scope.consolegrid.data = data;
                    alert("http complete: " + data);
                  });
                  
                  alert("console-7");
                  
                  
                }]
            },

            'navigation-bar@': {
              templateUrl: 'app/navbar/console-navbar.html'
            }
          }
        })
        ;
    }
  ]
);
