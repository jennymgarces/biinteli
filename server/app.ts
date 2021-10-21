const express = require('express');
const app = express();
import cors from 'cors'
import prodRoutes from './routes'



const morgan = require('morgan');
const mongoose = require('mongoose');
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use("/api", prodRoutes)




export default app;