var TestTable = angular.module('TestTable',['ngRoute','ngStorage']);
TestTable.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/rich',{
            templateUrl:'views/show-list.html',
            controller:'RichController'
        }).
        when('/genius',{
            templateUrl:'views/show-list.html',
            controller:'GeniusController'
        }).
        when('/superpower',{
            templateUrl:'views/show-list.html',
            controller:'PowerController'
        }).
        when('/home',{
            templateUrl:'views/show-list.html',
            controller:'MainController'
        }).
        otherwise({
            redirectTo:'/home'
        })
}]);
TestTable.run(function($rootScope,PersonsFactory){
    $rootScope.persons = [];
    $rootScope.addPerson = function($scope){
        $rootScope.persons.push({
            name:$scope.name,
            superpower:$scope.superpower,
            rich:$scope.rich,
            genius:$scope.genius
        });
        PersonsFactory.save();
        $rootScope.$broadcast('add');
        $rootScope.clearForm($scope);
    };
    $rootScope.clearForm = function($scope){
        $scope.name = null;
    };
    $rootScope.removePerson = function(item){
        $rootScope.persons.splice($rootScope.persons.indexOf(item),1);
        PersonsFactory.save();
    };
    $rootScope.expand = function(item) {
        angular.forEach($rootScope.persons, function(i) {
            if (i === item) {
                i.showfull = !i.showfull;
            } else {
                i.showfull = false;
            }
        });
    };
    $rootScope.persons = PersonsFactory.getAll();
});
