function slide_left(){
    $( ".buongiorno:first" ).animate({
        left: -1000
    }, {
        duration: 500,
        step: function( now, fx ){
            $( ".buongiorno:gt(0)" ).css( "left", now );           
        }
    });
}

function slide_right(){
    $( ".buongiorno:first" ).animate({
        left: 0
    }, {
        duration: 500,
        step: function( now, fx ){
            $( ".buongiorno:gt(0)" ).css( "left", now );
        }
    });
    
}

function slide_down(){
    $( ".contacts:first" ).animate({
        top: -1000
    }, {
        duration: 1200,
        step: function( now, fx ){
            $( ".contacts:gt(0)" ).css( "left", now );
            
        }
    });
}