$(document).ready(function(){

    $("#backBtn").click(function(){
        location.href = "/user";
    })

    $("#userForm").submit(function(e){
        e.preventDefault();
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();

        if(username == ""){
               alert("Please enter valid Inputs");
               return;
        }

        if(email == ""){
            alert("Please enter valid Inputs");
            return;
        }

        if(password == ""){
            alert("Please enter valid Inputs");
            return;
        }

        var userObj = {
            name: username,
            email: email,
            password
        }
        //ajax is used to send data from frontend to backend
        $.ajax({
            url: "/api/user",
            type: "POST",
            data: userObj,
            success: function(result){
                location.href = '/user';
                // $("#username").val("");
                // $("#email").val("");
                // $("#password").val("");
                $("#reset").click();
            },
            error: function(e){
                alert(e);
            }
        })
    }) 
})