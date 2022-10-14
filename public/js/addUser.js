$(document).ready(function(){

    $("#backBtn").click(function(){
        location.href = "/user";
    })

    $("#userForm").submit(function(e){
        e.preventDefault();
        alert(" user form submited");
    })
});