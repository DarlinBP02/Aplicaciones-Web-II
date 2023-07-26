const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');
const papeleraRoutes = require('./Routes/papelera');
const papelera = require('./models/papelera');


class Server {

    constructor(){
         this.app = express();
         this.port = process.env.PORT;
         this.paths = {
            resultado: '/resultados',
            paciente: '/pacientes',
            examen: '/tipoexamen',
            papelera:'/papelera'
        }
         
         this.dataBase();

 
        this.middlewares();
      

         this.routes();
    }

    middlewares(){
        //CORS  
        this.app.use(cors());

        this.app.use(express.json());


        this.app.use( express.static('public') );
        

    }

    async dataBase(){
     await  dbConnection()
    }

    routes(){
        this.app.use(this.paths.resultado, require('./Routes/resultados'))
        this.app.use(this.paths.paciente, require('./Routes/pacientes') )
        this.app.use(this.paths.examen, require('./Routes/examen') )
        this.app.use('/papelera', papeleraRoutes); 
    }

    listen(){
  
        this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en el puerto ${this.port}`)
        })

    }

}

module.exports=  Server;