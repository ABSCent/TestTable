angular.module('TestTable').controller('MainController', function ($scope, PersonsFactory) {
    $scope.person = {};
    $scope.persons = PersonsFactory.getAll();
    $scope.$on('expand',function(event,data){
        PersonsFactory.expand(data,$scope);
    });
    $scope.$on('add',function(event,data){
        PersonsFactory.add(data);
        $scope.person.name = null;
    });
    $scope.removePerson = function(person){
      PersonsFactory.remove(person);
    };
    $scope.$watch('persons.length', function () {
        $scope.isEmpty = PersonsFactory.isEmpty();

    });
    $scope.$watch('persons', function () {
        var counts = PersonsFactory.totalBySkill();
        $scope.richLink = counts.rich;
        $scope.geniusLink = counts.genius;
        $scope.superpowerLink = counts.superpower;
    }, true);

});