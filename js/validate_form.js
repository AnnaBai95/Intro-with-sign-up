$(function () {

    $("#fmRegister").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            emailAdd: {
                required: true,
                email: true
            },
            pwd: "required"
        },
        messages: {
            firstName: "First Name cannot be empty",
            lastName: "Last Name cannot be empty",
            emailAdd: "Looks like this is not an email",
            pwd: "Password cannot be empty"

        }
    });

    $("#fmRegister").submit(function () {
        // remove all placeholders
        $("#fmRegister").find("input.error").removeAttr('placeholder');
        // add custom place holder and styling
        $("#fmRegister").find("input[type='email'].error").attr("placeholder", "email@example.com");
        $("#fmRegister").find("input[type='email'].error").addClass("emailError");
    });




});

