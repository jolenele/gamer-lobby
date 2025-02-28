const express = require('express');
const app = express();
const playerRoute = express.Router();

// Player model
let Player = require('../database/model/Player');

//Game model
let Game = require('../database/model/Game');

// Add Player
playerRoute.route('/add-player').post((req, res, next) => {
  Player.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all player
playerRoute.route('/').get((req, res) => {
  Player.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all games
playerRoute.route('/get-games').get((req, res) => {
  Game.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single player
playerRoute.route('/read-player/:id').get((req, res) => {
  Player.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update player
playerRoute.route('/update-player/:id').put((req, res, next) => {
  Player.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Player successfully updated!')
    }
  })
})

// Delete player
playerRoute.route('/delete-player/:id').delete((req, res, next) => {
  Player.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = playerRoute;
