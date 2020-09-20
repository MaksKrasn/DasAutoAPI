const carsService = require('../services/cars.service')
const Car = require('../models/car');
const car = require('../databaseModels/car');

class ApiController {
    //GET
    async getAll(req, resp) {
        const result = await carsService.findAll()
        let cars = []
        result.forEach(element => {
            cars.push(new Car(element.id, element.mark, element.model, element.year, element.price))
        });
        //console.log(cars)
        resp.send(cars)
    }
    //GET
    async getOne(req, resp) {
        const id = req.params.id
        let car = await carsService.findOneById(id)
        resp.send(car)
    }
    //GET
    async delete(req, resp) {
        const id = req.params.id
        await carsService.delete(id)
        resp.sendStatus(200)
    }
    //POST
    async saveEditCar(req, resp) {
        if(!req.body) return resp.sendStatus(400);
        let car = new Car(req.body.id, req.body.mark, req.body.model, req.body.year, req.body.price)
        await carsService.edit(car)
        resp.send(car)
    }
    //POST
    async createCar(req, resp) {
        if(!req.body) return resp.sendStatus(400);
        let car = new Car(req.body.id, req.body.mark, req.body.model, req.body.year, req.body.price)
        carsService.create(car)
        resp.send(car);
    }
}

module.exports = new ApiController();