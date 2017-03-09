var Model = require('../models')

module.exports = {
  // All About Restaurants
  getRestaurants: (req, res, next) => {
    Model.Restaurant.find({}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getRestaurant: (req, res, next) => {
    Model.Restaurant.findOne({_id: req.params.id}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  createRestaurant: (req, res, next) => {
    Model.Restaurant.update({
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.status
    }).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  updateRestaurant: (req, res, next) => {
    Model.Restaurant.update({_id: req.params.id}, {$set: {
        name: req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        open_status: req.body.status
    }}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  removeRestaurant: (req, res, next) => {
    Model.Restaurant.remove({_id: req.params.id}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
