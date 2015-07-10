angular.module('TestTable').controller('PowerController',function($scope,$rootScope,$location){
    $scope.selectedSkill = 'person.superpower';
    $scope.$on('add',function(){
        if(!$scope.superpower){
            $location.path('/home');
        }
    });
    $rootScope.rich = false;
    $rootScope.genius = false;
    $rootScope.superpower = true;
});