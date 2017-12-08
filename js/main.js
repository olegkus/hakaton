//remove class nav-bar-fixed when screen more then 997px
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


        $(document).ready(function() { 
            var windowWidth = $(window).width();
            if(windowWidth > 997)$("#nav").addClass("navbar-fixed-top");
            else $("#nav").removeClass("navbar-fixed-top ");
            
            $(window).resize(function(){
                var windowWidth = $(window).width();
                if(windowWidth > 997)$("#nav").addClass("navbar-fixed-top");
                else $("#nav").removeClass("navbar-fixed-top");
            });
        });
    

//Vote Button
//     $(document).ready(function(){
//     $(".btn-default:first").click(function(){
//         $(this).button('toggle');
//     });   
// });