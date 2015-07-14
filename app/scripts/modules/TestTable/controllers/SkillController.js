angular.module('TestTable').controller('SkillController',function($scope,$location,skill,PersonsFactory){
    $scope.person = {};
    $scope.selectedSkill = skill;
    $scope.persons = PersonsFactory.getAll();
    $scope.$on('expand',function(event,data){
        PersonsFactory.expand(data,$scope);
    });
    $scope.$on('add',function(event,data){
        if($scope.person[skill]==false){
            $location.path('/home');
        }
        PersonsFactory.add(data);
    });
    PersonsFactory.setCheckbox(skill);
    var checks = PersonsFactory.getCheckbox();
    $scope.person.genius = checks.genius;
    $scope.person.rich = checks.rich;
    $scope.person.superpower = checks.superpower;
});