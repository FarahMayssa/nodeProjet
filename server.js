const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors")


const connectDB = require('./server/database/connection')

const app = express();
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
   
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;



//log requests
app.use(morgan("tiny"));

//mongoDB connection 
connectDB()

//parse request to body-parser

app.use(express.urlencoded({extended: true}));
app.use(express.json())

//set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

//load public

app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/img", express.static(path.resolve(__dirname, "public/img")));



// load Routers 
app.use('/',require('./server/routes/router'))
app.use('/',require('./server/routes/EtudiantsRoutes'))
app.use('/',require('./server/routes/EnseignantsRoutes'))
app.use('/',require('./server/routes/PfeRoutes'))
app.use('/',require('./server/routes/AnneesRoutes'))
app.use('/',require('./server/routes/UserRoutes'))
app.use('/',require('./server/routes/PfeDemRoutes'))



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
