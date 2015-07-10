angular.module('TestTable').directive('sidebar',function(PersonsFactory,$rootScope){
    return{
        restrict:'E',
        scope:{},
        replace:'true',
        templateUrl:'views/sidebar.html',
        link:function(scope,elem,attrs){
            $rootScope.$watch('persons.length',function(){
                scope.total = PersonsFactory.total();
            });
            $rootScope.$watch('persons',function(){
                var counts = PersonsFactory.totalBySkill();
                scope.rich = counts.rich;
                scope.genius = counts.genius;
                scope.superpower = counts.superpower;
            },true);

        }
    }
});