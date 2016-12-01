// $(document).foundation();
$(document).ready(function(){
    $("button").click(function(){
        $(".covervid-video").fadeOut(1000);
        $(".arrow").hide(2000);
        $("#section").fadeIn(2000);
    });
    $("#logo").click(function() {
      location.href="index.html";
    });
});
