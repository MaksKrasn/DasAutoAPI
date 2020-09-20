const Car = require('../databaseModels/car')

class CarsService {
    async findAll() {
        return Car.find()
    }

    async create(car){
        const createdCar = new Car(car);
        return createdCar.save();
    }

    async delete(id){
        return Car.findByIdAndDelete(id)
    }

    async findOneById(id){
        return Car.findById(id)
    }
    
    async edit(car){
        return Car.findByIdAndUpdate(
            car.id, 
            { mark: car.mark, model: car.model, year: car.year, price: car.price},
            function(err, result) {
                if(err) {
                    console.log('Error update')
                } else{
                    console.log('Success update')
                }

            })
    }
}

module.exports = new CarsService()