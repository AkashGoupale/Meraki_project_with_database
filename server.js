
const express = require("express");
const app = express();
app.use(express.json())

const router = require("./routers/router")
const knex = require("./connection/db")

setTimeout(()=> {
    const data = require("./seeds/meraki")
},1000)


app.use("/",router)


app.listen(8000,()=> {
    console.log("server listing.......")
});