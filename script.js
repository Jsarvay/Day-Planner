$(document).ready(function(){
    //collect current hour as variable
    var hour = moment().hour();
    console.log(hour);
    //Set current time and day at top of page
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
});
