const Record = require("../models/record")

const getRecords = async(req,res)=>{
    const result = await Record.find({category:req.query.category}).catch(err=>console.log(err));
    if (!result) return res.send('failed')
    res.send(result);
}

const addRecord = async(req,res)=>{
    const record = new Record({
        name: req.body.name,
        discription:req.body.discription,
        record:req.body.record,
        photo:req.body.photo,
        video:req.body.video,
        category:req.body.category
    })
    const result = await record.save().catch(err=>res.status(400).send(err))
    if (!result) return res.send('failed')
    res.send(result);
}
const deleteRecord = async(req,res)=>{
    const result = await Record.deleteOne({_id:req.query.id}).catch(err=>console.log(err));
    res.send(result);
  }

exports.getRecords = getRecords
exports.addRecord = addRecord
exports.deleteRecord = deleteRecord