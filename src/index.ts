import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import router from './routes/images.routes'

// Initializating express
const app = express();
// Settings 
app.set("port", process.env.PORT || 3500);
// Middelwares
app.use(express.static('uploads'));
app.use(morgan("dev"));
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(compression())
// Routes
app.use(router)
// Initializating server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port")) 
})