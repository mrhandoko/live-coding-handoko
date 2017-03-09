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
  },

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
