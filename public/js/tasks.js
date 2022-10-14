$(document).ready(function(){

  $("#addBtn").click(function(){
    location.href = "/tasks/add";
  })

   $("#editBtn").click(function(){
        var len = $(":checkbox:checked").length;
        if(len != 1){
          alert("Please select any one check box")
          return;
        }
          location.href = "/tasks/edit";
  })

});