app.controller('tarefasController',
  function($scope, $http, Tarefa){

    // $scope.novaTarefa = function(){
    //   $scope.novo = true;
    // };

    $scope.removerTarefa = function(tarefa){
      Tarefa.delete(
        {id: tarefa._id},
        buscaTarefas,
        function(erro){
          console.log(erro);
        });
    };

    var buscaTarefas = function(){
      $scope.loading = true;
      Tarefa.query(function(tarefas){
        $scope.tarefas = tarefas;
        $scope.loading = false;
      }, function(erro){
        alert('erro');
        console.log(erro);
      });
    };
    buscaTarefas();
  });
