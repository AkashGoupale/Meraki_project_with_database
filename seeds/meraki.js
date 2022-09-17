
const axios =require("axios");
const knex = require("../connection/db")


async function insert_data() {
    try {
        let db_data = await knex.select('*').from('meraki_data')
        if (db_data.length == 0) {
            let result = await axios.get('https://api.merakilearn.org/courses')
            console.log("please wait data is going..")
            for(let obj of result.data){
                obj['lang_available'] = obj['lang_available'].join(", ")
                await knex("meraki_data").insert(obj)
                
            }
            console.log('data inserted successfully.....');
        }
    }
    catch {
        console.log("something went wrong...")
    }
}
insert_data()
