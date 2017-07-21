app.controller("controller",function($scope,$http){
    var url = "http://localhost:5000/tasks"
    $scope.todo = [
        // {
        //     text:"atividade 1",
        //     done:false
        // },
        // {
        //     text:"atividade 2",
        //     done:false
        // },
        // {
        //     text:"atividade 3",
        //     done:false
        // }
    ]


//    $(".glyphicon-ok").click(function(){
//        alert("ok!")
//    })
//
//    $(".glyphicon-remove").click(function(){
//        alert("removed!")
//    })

    $scope.done = function(todo){
      $http.put(url,{id:todo._id}).then(function(res){
        todo.done = true;
        console.log(res.data)
      })
    }

    $scope.remove = function(todo,index){
        var ok = confirm("Deseja remover essa atividade?")

        if(ok){
          $http.delete(url,{params:{id:todo._id}}).then(function(res){
            $scope.todo.splice(index,1)
          })
        }
    }

    $scope.add = function(){
      var task = {
          text:$scope.form.text,
          done:false
      }

      $http.post(url,task).then(function(res){
        task = res.data
        $scope.todo.push(task)
        $scope.form.text=""
      })
    }

    $scope.init = function(){
      $http.get(url).then(function(res){
        $scope.todo = res.data.tasks
      })
    }

})
