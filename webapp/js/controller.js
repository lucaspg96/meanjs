app.controller("controller",function($scope,$http){
    
    $scope.todo = [
        {
            text:"atividade 1",
            done:false
        },
        {
            text:"atividade 2",
            done:false
        },
        {
            text:"atividade 3",
            done:false
        }
    ]
    
    
//    $(".glyphicon-ok").click(function(){
//        alert("ok!")
//    })
//    
//    $(".glyphicon-remove").click(function(){
//        alert("removed!")
//    })
    
    $scope.done = function(todo){
        todo.done = true; 
    }
    
    $scope.remove = function(todo,index){
        var ok = confirm("Deseja remover essa atividade?") 
        
        if(ok){
            $scope.todo.splice(index,1)
        }
    }
    
    $scope.add = function(){
        $scope.todo.push({
            text:$scope.form.text,
            done:false
        })
        $scope.form.text=""
    }
    
})