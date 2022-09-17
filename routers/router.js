const express = require("express")
const router = express()

const {get_all_data,  get_data_by_id,  post_data,  update_data, delete_data} = require("../controllers/control")


router.get("/All_data",get_all_data)

router.get("/data_by_id/:id",get_data_by_id)

router.post("/insert_data",post_data)

router.put("/update/:id",update_data)

router.delete("/delete/:id",delete_data)

module.exports = router