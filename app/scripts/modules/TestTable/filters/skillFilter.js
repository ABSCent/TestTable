angular.module('TestTable').filter('skillFilter',function(){
    return function (persons, selectedSkill) {
        if (!angular.isUndefined(persons) && !angular.isUndefined(selectedSkill) && selectedSkill.length > 0) {
            var tempPersons = [];
                angular.forEach(persons, function (person) {
                    if (angular.equals(person[selectedSkill], true)) {
                        tempPersons.push(person);
                    }
                });
            return tempPersons;
        } else {
            return persons;
        }
    };
});