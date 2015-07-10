angular.module('TestTable').controller('MainController',function($rootScope,$scope,PersonsFactory){
    $scope.itself = $scope;
    $rootScope.$watch('persons.length',function(){
        $scope.isEmpty = PersonsFactory.isEmpty();

    });
});