
$(document).ready(function(){
    function printThis(el){
       if($(this).text()){
           console.log($(this).text());

       }else{
           console.log($(this).val());
       }

    }

    var el = document.getElementById('text');

    $('[data-trigger="dropdown"]').on('mouseenter',function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);
        $('.profilemenu').on('mouseleave',function(){
            submenu.fadeOut(300);
        });
        
    });

    $('input').focusin(printThis);

    $('input').css({
        background : 'red',
        padding : '10px',
        borderColor: 'black',
    })

});