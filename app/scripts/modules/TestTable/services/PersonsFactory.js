angular.module('TestTable').factory('PersonsFactory',function($rootScope,$localStorage){
    function InitStorage(){
        if(!$localStorage.persons){
            $localStorage.persons = [];
        }
    }
    function GetPersons(){
        InitStorage();
        return $localStorage.persons;
    }
    function SavePersons(){
        InitStorage();
        $localStorage.persons = $rootScope.persons;
    }
    function TotalPersons(){
        InitStorage();
        return $localStorage.persons.length;
    }
    function TotalBySkill(){
        InitStorage();
        var counts = [];
        counts.rich =0;
        counts.genius = 0;
        counts.superpower = 0;
        angular.forEach($localStorage.persons,function(person){
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