const express = require('express');
const router = express.Router();
const { getData, addData, deleteData, putData} = require('../controller/controller');

router.route('/')
.get(getData)
.post(addData);

router.route('/:id')
.delete(deleteData)
.put(putData);

// router.get('/', (req,res) => res.send('hello'));


module.exports = router;
