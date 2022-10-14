$(document).ready(function(){

   $("#backBtn").click(function(){
    location.href = "/tasks"
   })

   $("#taskForm").submit(function(e){
    e.preventDefault();
    alert(" user form submited");
})
});