const info = require('../schema/infoSchema');
const mongoose = require('mongoose');

exports.getData = async (req, res, next) => {
  try {
    const data = await info.find();

    return res.status(200).json(
      {
        success: true,
        count: data.length,
        data: data
      })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'System Error'
    })
}
}

exports.addData = async (req, res, next) =>{
  try {
    const input = await info.create(req.body);

    return res.status(201).json({
      success: true,
      data: input
    })
  } catch (err) {
    if(err.name==='ValidationError'){
      const message = Object.values(err.errors).map(error => error.message);
      return res.status(400).json({
        success: false,
        errors: message
      })
    }
     else{
      return res.status(500).json({
        success: false,
        error: 'System Error'
      })
    }

  }
};

exports.deleteData = async (req, res, next) =>{
  try {
    const data = await info.findById(mongoose.Types.ObjectId(req.params.id));
    if(!data){
      return res.status(404).json({
        success: false,
        error: 'data not found'
      });
    }
    await data.remove();
    return res.status(200).json({
      success: true,
      data: data
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'System Error',
    });
  }
}
