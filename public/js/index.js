let socket = io( 'http://localhost:8080' );

$( '.notification' ).on( 'submit', function(event){
    event.preventDefault();
    let alert=`<p> Socket ID ${socket.id} just triggered a notification! </p>`;
    socket.emit( 'notification', alert);
});

socket.on( 'alertAll', function( data ){
    $( '.notificationsBox' ).append( data );
});



