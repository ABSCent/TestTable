angular.module('TestTable').controller('MainController',function($rootScope,$scope,PersonsFactory){
    $scope.itself = $scope;
    $rootScope.$watch('persons.length',function(){
        $scope.isEmpty = PersonsFactory.isEmpty();

    });
    $rootScope.$watch('persons',function(){
        var counts = PersonsFactory.totalBySkill();
        $scope.richLink = counts.rich;
        $scope.geniusLink = counts.genius;
        $scope.superpowerLink = counts.superpower;
    },true);
});