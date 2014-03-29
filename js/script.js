function slide_left(){
    $( ".buongiorno:first" ).animate({
        left: -1000
    }, {
        duration: 1200,
        step: function( now, fx ){
            $( ".buongiorno:gt(0)" ).css( "left", now );
            $.post('content.php', { left: '1' }, function (data) {
            console.log(data);
            }).fail(function () {
                // Uh oh, something went wrong
            });
            
        }
    });
}

function slide_right(){
    $( ".buongiorno:first" ).animate({
        left: 0
    }, {
        duration: 1200,
        step: function( now, fx ){
            $( ".buongiorno:gt(0)" ).css( "left", now );
        }
    });
    
    $.post('content.php', { left: '0' }, function (data) {
    console.log(data);
    }).fail(function () {
        // Uh oh, something went wrong
    });
    
}

function slide_down(){
    $( ".contacts:first" ).animate({
        top: -1000
    }, {
        duration: 1200,
        step: function( now, fx ){
            $( ".contacts:gt(0)" ).css( "left", now );
            $.post('content.php', { top: '1' }, function (data) {
            console.log(data);
            }).fail(function () {
                // Uh oh, something went wrong
            });
            
        }
    });
}