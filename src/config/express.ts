import express from 'express'
import bodyParser from "body-parser";
const cors = require('cors')

const app = express();

// el cors sirve para saber de dónde aceptar peticiones, establacer qué dominios puedne usar nuestros servicios
app.use(
    cors({
        origin: ''
    })
);

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({limit: '20mb'}))

app.get('/', (req, res) =>{
    res.send('Server running...')
})

export default app;