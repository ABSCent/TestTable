angular.module('TestTable').directive('sidebar',function(PersonsFactory){
    return{
        restrict:'E',
        scope:{},
        replace:'true',
        templateUrl:'views/sidebar.html',
        link:function(scope,elem,attrs){
            scope.persons = PersonsFactory.getAll();
            scope.$watch('persons.length',function(){
                scope.total = PersonsFactory.total();
            });
            scope.$watch('persons',function(){
                var counts = PersonsFactory.totalBySkill();
                scope.rich = counts.rich;
                scope.genius = counts.genius;
                scope.superpower = counts.superpower;
            },true);
        }
    }
});