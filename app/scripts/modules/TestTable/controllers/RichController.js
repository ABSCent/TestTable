angular.module('TestTable').controller('RichController',function($scope,$rootScope,$location){
    $scope.selectedSkill = 'person.rich';
    $scope.$on('add',function(){
        if(!$scope.rich){
            $location.path('/home');
        }
    });
    $rootScope.rich = true;
    $rootScope.genius = false;
    $rootScope.superpower = false;
});