import Dish from "../schema/Dish";

import express from 'express';

const router = express.Router();

router.get('/', function (req, res, next) {
    Dish.find({}, (err, dishes) => {
        res.status(200).json(dishes);
    });
});

router.post('/', function (req, res, next) {
    let body = res.body;
    let dish = new Dish(body);
    dish.save((err, dish) => {
        if (err) return handleError(err, res);
        res.status(200).json({
            status: 'success',
            data: dish
        })
    });
});

router.delete('/', function (req, res, next) {
    Dish.find({}, (err, dishes) => {
        res.status(200).json(dishes);
    });
});

router.put('/', function (req, res, next) {
    Dish.find({}, (err, dishes) => {
        res.status(200).json(dishes);
    });
});

const handleError = (err, res) => {
    console.log(err);
    res.json({
        status: 'error',
        message: err
    });
};

module.exports = router;
