$(document).ready(function () {


});

$("#logOutButton").on("click", function () {
    var value = confirm("Are you sure you want to logout?");
    if (value == true)
        window.location.href = "/logout";

});
$("#addStudentOption").on("click", function () {
    window.location.href = "/app/addStudent";

});
$("#allStudentOption").on("click", function () {
    window.location.href = "/app/students";

});
$("#removeStudentOption").on("click", function () {
    window.location.href = "/app/removeStu";

});
$("#UniAddHomePage").on("click", function () {
    window.location.href = "/app/addUniversity";
});

$("#addUnivOption").on("click", function () {
    window.location.href = "/app/addUniversity";
});

$("#allUnivOption").on("click", function () {
    window.location.href = "/app/allUniversities";
});
$("#homePageOption").on("click", function () {
    window.location.href = "/app/home";
});