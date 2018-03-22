var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){
  $routeProvider.when('/', {//tarefas
    templateUrl: 'partials/tarefas.html',
    controller: 'tarefasController'
  });
  $routeProvider.when('/tarefa/:id', {//tarefas
    templateUrl: 'partials/tarefa.html',
    controller: 'tarefaController'
  });
  $routeProvider.when('/tarefa', {//tarefas
    templateUrl: 'partials/tarefa.html',
    controller: 'tarefaController'
  });
});

// app.controller('tarefas',
//   function($scope, $http){
//     $http({
//       method: 'GET',
//       url: 'https://todowebservice.herokuapp.com/api/todos'
//     }).then(
//       function(resp){
//         $scope.tarefas = resp.data;
//         console.log(resp);
//       },
//       function(resp){
//         console.error(resp);
//       }
//     );
//   });
