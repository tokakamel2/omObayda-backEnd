const mongo = require("./db/connection")
const express = require("express");
const categoryLogic = require("./controllers/categoryLogic")
const recordLogic = require("./controllers/recordLogic")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening at port 3000"));

app.get('/categories',categoryLogic.getCategories);
app.post('/category',categoryLogic.addCategory);
app.delete('/category',categoryLogic.deleteCategory);

app.get('/records',recordLogic.getRecords);
app.post('/record',recordLogic.addRecord);
app.delete('/record',recordLogic.deleteRecord);


