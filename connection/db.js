
const knex = require("knex") ({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        database:"meraki",
        password:"Akash@123",
    }
})


knex.schema.hasTable("meraki_data").then((exists) => {
    if (!exists) {
        return knex.schema.createTable("meraki_data",(table) => {
            table.string("id").primary();
            table.string("name");
            table.string("logo");
            table.string("notes");
            table.string("days_to_complete");
            table.string("short_description");
            table.string("type");
            table.string("course_type");
            table.string("lang_available")
        }).then(() => {
            console.log("Table create successfully.")
        }).catch( ()=> {
            console.log("something went wrong table does not create..")
        })
    }
})


module.exports = knex