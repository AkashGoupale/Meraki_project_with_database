
const knex = require("../connection/db")
const fs  = require("fs")



const get_all_data = (req,res) => {
    knex("meraki_data").then(data => {
        res.send({status:"successful",All_data:data})
    }).catch(err => {
        res.send({status:"Fail",error:err})
    })
}


const get_data_by_id = (req,res) => {
    knex("meraki_data").where({id:req.params.id}).then(d => {
        if (d.length > 0) {
            res.send({status:"success","data":d})
        }
        else {
            res.send({status:"Fail",massage:"ID does not found"})
        }
    }).catch(err => {
        res.send({status:"Fail",error:err})
    })
}

const post_data = (req,res) => {
    knex("meraki_data").insert(req.body).then((data) => {
        res.send({status:"successful", post_data:req.body})
    }).catch(err => {
        res.send({status:"Fail",massage:"something went wrong..I think this Id already exists.",error:err})
    })
}


const update_data = (req,res) => {
    knex("meraki_data").where({id:req.params.id}).update(req.body).then(data => {
        if (data==1) {
            res.send({status:"successful",updated_data:req.body})
        }
        else {
            res.send({status:"Fail",massage:"Id does not exists"})
        }
    }).catch(err => {
        res.send({status:"Fail",error:err})
    })
}


const delete_data = (req,res) => {
    knex("meraki_data").where({id:req.params.id}).delete(req.body).then((data) => {
        if (data==1) {
            res.send({status:"successful",massage:"Data deleted successful.."})
        }
        else {
            res.send({status:"Fail",massage:"Id does not found.."})
        }
    }).catch((err) => {
        res.send({status:"Fail",massage:"something went wrong.."})
    })
}

module.exports = {get_all_data,get_data_by_id,post_data,update_data,delete_data}