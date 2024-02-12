import express from 'express'
import route from './Route/route.js';
import './DB/Connection.js'
import cors from 'cors'

const app = express();
const port = 3020;
app.use(cors())
app.use(express.json())
app.use(route);

app.listen(port)

console.log(`server invoked at http://localhost:${port}`);
