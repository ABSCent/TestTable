angular.module('TestTable').factory('PersonsFactory',function($rootScope,$localStorage){
    function GetPersons(){
        return $localStorage.persons;
    }
    function SavePersons(){
        $localStorage.persons = $rootScope.persons;
    }
    function TotalPersons(){
        return $rootScope.persons.length;
    }
    function TotalBySkill(){
        var counts = [];
        counts.rich =0;
        counts.genius = 0;
        counts.superpower = 0;
        angular.forEach($rootScope.persons,function(person){
            if(person.superpower){
                counts.superpower++;
            }
            if(person.rich){
                counts.rich++;
            }
            if(person.genius){
                counts.genius++
            }
        });
        return counts;
    }
    function isEmpty(){
        return TotalPersons() == 0;
    }
    return{
        getAll:GetPersons,
        save:SavePersons,
        total:TotalPersons,
        totalBySkill:TotalBySkill,
        isEmpty:isEmpty
    }
});