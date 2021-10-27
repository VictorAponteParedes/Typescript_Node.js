import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'
//! Importaciones de Archivos externos
import RouterIndex  from './routes' 
import bookRouter from './routes/books'
import './database'

//! Initializations
const app = express();

//! Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));

 //! Settings
     app.set('port', process.env.PORT || 5000);
     app.set('views', path.join(__dirname, 'views'));
        app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        helpers: require('./lib/helpers')
    }));
   app.set('views engine' , '.hbs' )

 
 //!Routes
 app.use('/' , RouterIndex)
 app.use('books' ,bookRouter)
 //!Static files
 app.use(express.static(path.join(__dirname , 'public')))
 //! starting the server
app.listen(app.get('port') , ()=>{

  console.log("Server on port:--> ", app.get('port'))

})



