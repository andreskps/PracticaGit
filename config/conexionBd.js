class conexionDb{
    constructor(){
        this.mongoose = require('mongoose');
        this.mongoose.connect('mongodb://localhost:27017/escuela', {useNewUrlParser: true, useUnifiedTopology: true});
        this.db = this.mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function() {
            console.log("Conectado a la base de datos");
        });
    }
}