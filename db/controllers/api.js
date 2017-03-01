'use strict';

let Orders = require('../models/orders');

exports.addOrder = function(req, res) {

    let newOrder = Orders({
        orderN: req.body.orderN,
        managerName: req.body.managerName,
        salesType: req.body.salesType,
        customer: req.body.customer,
        provider: req.body.provider,
        dueDate: req.body.dueDate,
        createdMonth: new Date().getMonth() + 1
    });
    
    newOrder.save(function(err) {
      if (err) throw err;

      res.send(newOrder);
    });
}

exports.showAllOrders = function(req, res) {
  Orders.find(function(err, order) {
    res.send(order);
  });
}

exports.showOrder = function(req, res) {
  let id = req.params.id;

  Orders.find({_id: id}, function(err, order) {
    if (!err) {
            res.send(order);
    }
    else {
            res.send('error');
    }
  });
}

exports.deleteOrder = (function(req, res) {
  let id = req.params.id;

  Orders.findByIdAndRemove(id, function(err, order) {
    if (!err) {
            res.send(order);
    }
    else {
            res.send('error');
    }
  });
});

exports.updateOrder = (function(req, res) {
  let id = req.params.id;
  let updatedOrder = {
      orderN: req.body.orderN,
      managerName: req.body.managerName,
      salesType: req.body.orderType,
      customer: req.body.customer,
      provider: req.body.provider,
      dueDate: req.body.dueDate
  };

  Orders.findByIdAndUpdate(id, updatedOrder, function(err, order) {
    if (!err) {
            res.send(order);
    }
    else {
            res.send('error');
    }
  });
});



exports.showQuantityOfDocs = (function(req, res) {
    let month = req.params.id;

    Orders.find({createdMonth: month}, function(err, order) {
        if (!err) {
            res.send(order);
        }
        else {
            res.send('error');
        }})


});


