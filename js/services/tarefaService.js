app.factory('Tarefa',
  function($resource){
    return $resource('https://todowebservice.herokuapp.com/api/todos/:id');
  });
