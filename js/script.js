$(document).ready(function() {
    
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carouselButton").click(function() {
        if($("#carouselButton").children("span").hasClass('fa-pause'))
            {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
        else if($("#carouselButton").children("span").hasClass('fa-play'))
            {
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
            }
    });
    
    $("#login").click(function(e) {
        e.preventDefault();
        $("#loginmodal").modal('show');
    });
    $("#close-log ,#cancel-log").click(function(e){
        e.preventDefault();
        $("#loginmodal").modal('hide');
    });
    
    $("#reserveButton").click(function(e){
        e.preventDefault();
        $("#reservemodal").modal('show');
    });
    $("#close-reserve ,#cancel-reserve").click(function(e){
        e.preventDefault();
        $("#reservemodal").modal('hide');
    });

});