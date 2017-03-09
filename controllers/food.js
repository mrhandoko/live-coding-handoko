var Model = require('../models')

module.exports = {
  // All About Foods
  getFoods: (req, res, next) => {
    Model.Food.find({}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getFood: (req, res, next) => {
    Model.Food.findOne({name: req.params.name}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  createFood: (req, res, next) => {
    Model.Food.update({
      name: req.body.name,
      price: req.body.price,
      expired_date: new Date()
    }).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  updateFood: (req, res, next) => {
    Model.Food.update({_id: req.params.id}, {$set: {
        name: req.body.name,
        price: req.body.price,
        expired_date: req.body.expired_date
    }}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  removeFood: (req, res, next) => {
    Model.Food.remove({_id: req.params.id}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
