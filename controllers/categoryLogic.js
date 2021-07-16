const Category = require("../models/category");
const Record = require("../models/record");


const getCategories = async(req,res)=>{
    const result = await Category.find().catch(err=>console.log(err));
    if (!result) return res.send('failed')
    res.send(result);
}
const addCategory = async(req,res)=>{
    const category = new Category({
        name: req.body.name
    })
    const result = await category.save().catch(err=>res.status(400).send(err))
    if (!result) return res.send('failed')
    res.send(result);
}
const deleteCategory = async(req,res)=>{
  const records = await Record.find({category: req.query.id}).catch(err=>console.log(err));
  if(records.length == 0){
  const result = await Category.deleteOne({_id:req.query.id}).catch(err=>console.log(err));
  res.send(result);
  }else{
  res.send("has records").status(400)
  }
}

exports.getCategories = getCategories
exports.addCategory = addCategory
exports.deleteCategory = deleteCategory
