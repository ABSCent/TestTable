angular.module('TestTable').controller('GeniusController',function($scope,$rootScope,$location){
    $scope.selectedSkill = 'person.genius';
    $scope.$on('add',function(){
        if(!$scope.genius){
            $location.path('/home');
        }
    });
    $rootScope.rich = false;
    $rootScope.genius = true;
    $rootScope.superpower = false;
});