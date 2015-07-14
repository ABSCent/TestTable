var TestTable = angular.module('TestTable', ['ngRoute', 'ngStorage']);
TestTable.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/rich', {
            templateUrl: 'views/show-list.html',
            controller: 'SkillController',
            resolve: {
                skill: function () {
                    return 'rich';
                }
            }
        }).
        when('/genius', {
            templateUrl: 'views/show-list.html',
            controller: 'SkillController',
            resolve: {
                skill:function(){
                    return 'genius';
                }
            }
        }).
        when('/superpower', {
            templateUrl: 'views/show-list.html',
            controller: 'SkillController',
            resolve: {
                skill:function(){
                  return 'superpower';
                }
            }
        }).
        when('/home', {
            templateUrl: 'views/show-list.html',
            controller: 'MainController'
        }).
        when('/about',{
            templateUrl:'views/about.html',
            controller:'AboutController'
        }).
        otherwise({
            redirectTo: '/home'
        })
}]);
TestTable.run(function ($rootScope) {
    $rootScope.addPerson = function (person) {
        $rootScope.$broadcast('add',person);
    };
<<<<<<< HEAD
    $rootScope.expand = function(item){
      $rootScope.$broadcast('expand',item);
    };
});
=======
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
>>>>>>> origin/master
