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

  $('#deleteBtn').click(function () {
    var len = $(":checkbox:checked").length;
    if (len != 1) {
      alert("Please select any one check box")
      return;
    }

    var all = $('input:checkbox');
    var checked = all.filter(':checked');

    var checkedId = checked.map(function () {
      return this.id;
    })

    $.ajax({
      url: `/api/tasks/${checkedId[0]}`,
      type: "DELETE",
      success: function(result){
        location.reload();
      },
      error: function(e){
          alert(e);
      }
  })
  })
});