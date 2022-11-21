$(document).ready(function(){

   $("#backBtn").click(function(){
    location.href = "/tasks"
   })

   $("#taskForm").submit(function(e){
    e.preventDefault();
    var task = $("#task").val();
    var status = $("#status").val();
    var ownerId = $("#ownerId").val();
    console.log(ownerId);

    if(task == ""){
           alert("Please enter valid Inputs");
           return;
    }

    if(status == ""){
        alert("Please enter valid Inputs");
        return;
    }

    if(ownerId == ""){
        alert("Please enter valid Inputs");
        return;
    }

    var taskObj = {
        task: task,
        status: status,
        owner_id: ownerId
    }
    //ajax is used to send data from frontend to backend
    $.ajax({
        url: "/api/tasks",
        type: "POST",
        data: taskObj,
        success: function(result){
            location.href = '/tasks';
            $("#reset").click();
        },
        error: function(e){
            alert(e);
        }
    })
}) 
})
