angular.module('TestTable').factory('PersonsFactory',function($rootScope,$localStorage){
    var checkList = {
        rich:false,
        genius:false,
        superpower:false
        },
        persons = GetPersons();
    function InitStorage(){
        if(!$localStorage.persons){
            $localStorage.persons = [];
        }
    }
    function GetPersons(){
        InitStorage();
        return $localStorage.persons;
    }
    function SavePersons(persons){
        InitStorage();
        $localStorage.persons = persons;
    }
    function AddPerson(person){
        persons.push({
            name: person.name,
            superpower: person.superpower,
            rich: person.rich,
            genius: person.genius
        });
        SavePersons(persons);
    }
    function RemovePerson(person){
        persons.splice(persons.indexOf(person), 1);
        PersonsFactory.save();
    }
    function TotalPersons(){
        InitStorage();
        return $localStorage.persons.length;
    }
    function TotalBySkill(){
        InitStorage();
        var counts = {
            rich:0,
            genius:0,
            superpower:0
        };
        angular.forEach($localStorage.persons,function(person){
            for(var property in person)
            {
                if(person.hasOwnProperty(property) && counts.hasOwnProperty(property)){
                    if(person[property]){
                        counts[property]++;
                    }
                }
            }
        });
        return counts;
    }
    function isEmpty(){
        return TotalPersons() == 0;
    }
    function setChecks(skill){
        for(var property in checkList){
            if(checkList.hasOwnProperty(property)){
              if(property==skill){
                  checkList[property]=true;
              }
              else{
                  checkList[property]=false;
              }
            }
        }
    }
    function getChecks(){
        return checkList;
    }
    function expand(item,scope){
        angular.forEach(scope.persons, function (i) {
            if (i === item) {
                i.showfull = !i.showfull;
            } else {
                i.showfull = false;
            }
        });
    }
    return{
        getAll:GetPersons,
        save:SavePersons,
        total:TotalPersons,
        totalBySkill:TotalBySkill,
        isEmpty:isEmpty,
        setCheckbox:setChecks,
        getCheckbox:getChecks,
        expand:expand,
        add:AddPerson,
        remove:RemovePerson
    }
});