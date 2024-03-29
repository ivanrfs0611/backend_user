const crudModel = require("../models/crudModel.js");
const platform = require("../platform.js");

var uniqid = require("uniqid");
var fs = require("fs");

exports.getmenu = async (req, res) => {
  let result = crudModel.getmenu();
  result
    .then(function (result) {
      res.json({
        status: 200,
        success: true,
        return: result,
      });
    })
    .catch(function (err) {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

exports.checkoutHead = async (req, res) => {
  var data = {
    user_id: req.body.userId,
    menu_id: req.body.menuId,
    menu_qty: req.body.menuQty,
  };
  let result = crudModel.checkoutHead(data);
  result
    .then(function (result) {
      res.json({
        status: 200,
        success: true,
      });
    })
    .catch(function (err) {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

// exports.getmenu = async (req, res) => {
//     let filename;
//     if(req.files){
//         var file = req.files.filename;
//         var extension = req.files.filename.name.split('.');
//         extension = extension[extension.length - 1];
//         filename = `${uniqid()}.${extension}`;

//         file.mv(platform.projectDir + "/images/" + filename, function(err){
//             if(err) console.log(err);
//         })
//     }

//     var data = {
//         name: req.body.name,
//         price: req.body.price,
//         description: req.body.description,
//         filename
//     }

//     let result = crudModel.getmenu(data);
//     result.then(function(result){
//         res.json({
//             status: 200,
//             success: true
//         });
//     }).catch(function(err){
//         res.json({
//             status: 500,
//             success: false,
//             message: err
//         })
//     })
// }

// exports.insert = async (req, res) => {
//     let filename;
//     if(req.files){
//         var file = req.files.filename;
//         var extension = req.files.filename.name.split('.');
//         extension = extension[extension.length - 1];
//         filename = `${uniqid()}.${extension}`;

//         file.mv(platform.projectDir + "/images/" + filename, function(err){
//             if(err) console.log(err);
//         })
//     }

//     var data = {
//         name: req.body.name,
//         price: req.body.price,
//         filename
//     }

//     let result = crudModel.insert(data);
//     result.then(function(result){
//         res.json({
//             status: 200,
//             success: true
//         });
//     }).catch(function(err){
//         res.json({
//             status: 500,
//             success: false,
//             message: err
//         })
//     })
// }

// exports.select = async (req, res) => {
//     let result = crudModel.select();
//     result.then(function(result){
//         res.json({
//             status: 200,
//             success: true,
//             return: result
//         });
//     }).catch(function(err){
//         res.json({
//             status: 500,
//             success: false,
//             message: err
//         })
//     })
// }

// exports.cart = async (req, res) => {
//     let result = crudModel.cart(req.body.ids);
//     result.then(function(result){
//         res.json({
//             status: 200,
//             success: true,
//             return: result
//         });
//     }).catch(function(err){
//         res.json({
//             status: 500,
//             success: false,
//             message: err
//         })
//     })
// }

// exports.delete = async (req, res) => {
//     var data = {
//         id: req.body.id
//     }

//     let result = crudModel.selectbyID(data.id);
//     result.then(function(result){
//         fs.unlink(platform.projectDir + "/images/" + result.filename, function(err){
//             if(err) console.log(err);
//        });
//     }).then(function(){
//         crudModel.delete(data);
//     }).catch(function(err){
//         console.log(err);
//     })

//     res.redirect(`http://${platform.baseURL}:${platform.port}/select`);
// }

exports.fileupload = async (req, res) => {
  let image;
  if (req.files) {
    var file = req.files.image;
    var extension = req.files.image.name.split(".");
    extension = extension[extension.length - 1];
    image = `${uniqid()}.${extension}`;

    file.mv(platform.projectDir + "/images/" + image, function (err) {
      if (err) console.log(err);
    });
  }

  var data = {
    email: req.body.email,
    transfer_name: req.body.transfer_name,
    phone_number: req.body.phone_number,
    nominal: req.body.nominal,
    date: req.body.date,
    image,
  };

  let result = crudModel.fileupload(data);
  result
    .then(function (result) {
      res.json({
        status: 200,
        success: true,
      });
    })
    .catch(function (err) {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};
