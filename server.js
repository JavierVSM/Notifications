const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(8080);

const io = require( 'socket.io' )( server );

io.on( 'connection', function( socket ){  
    let newConnection = `<p>Socket ID ${socket.id} join us!</p>`;
    io.sockets.emit( 'alertAll', newConnection ); 

    socket.on( 'notification', function( data ){
        io.sockets.emit( 'alertAll', data ); 
    });   

    socket.on('disconnect', function() {
        let lostConnection = `<p>Socket ID ${socket.id} left us!</p>`;
        io.sockets.emit( 'alertAll', lostConnection );
     });
});