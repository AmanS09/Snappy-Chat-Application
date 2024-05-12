//Import user route
const userRoutes= require('./server/routes/user.routes');
const messageRoutes= require('./server/routes/message.routes');

const express= require('express');
const cors = require('cors');

const bodyParser = require('body-parser');



const app = express();




  
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./server/config/db')
//Routes 
app.use('/api/v1/auth/',userRoutes);
app.use('/api/v1/message',messageRoutes)


const server = app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
});