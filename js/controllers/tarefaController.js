app.controller('tarefaController',
  function($scope, $routeParams, Tarefa, $http, $filter){
    $scope.loading = true;

    if($routeParams.id){
      Tarefa.get(
        {id: $routeParams.id},
        function(tarefa){
          $scope.tarefa = tarefa;
          $scope.tarefa.createdAt = new Date($scope.tarefa.createdAt);
          $scope.loading = false;
        },
        function(erro){
          console.log(erro);
        });
    }else{
      $scope.tarefa = new Tarefa();
      $scope.loading = false;
    }

    $scope.salva = function(){
      $scope.loading = true;
      $scope.tarefa.$save()
      .then(function(){
        $scope.tarefa = new Tarefa();
        $scope.loading = false;
        $scope.mensagem = {msg: 'Salvo com sucesso!'}
      })
      .catch(function(erro){
        console.log(erro);
        $scope.loading = false;
        $scope.mensagem = {msg: 'Um erro ocorreu'}
      });
    };
  });
