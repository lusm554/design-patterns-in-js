class Car {
  constructor({doors = 4, state = 'new', color = 'white'}) {
    this.doors = doors
    this.state = state 
    this.color = color
  }
}

class Truck {
  constructor({doors = 4, state = 'new', color = 'black'}) {
    this.doors = doors
    this.state = state
    this.color = color
  }
}

class VehicleFactory {
  createVehicle({vehicleType, ...options}) {
    if (vehicleType === 'car') {
      return new Car(options);
    } else if (vehicleType === 'truck') {
      return new Truck(options);
    }
  }
}

const factory = new VehicleFactory()

const car = factory.createVehicle({
  vehicleType: 'car',
  doors: 4,
  color: 'silver',
  state: 'Brand New'
})
const truck = factory.createVehicle({
  vehicleType: 'truck',
  doors: 2,
  color: 'white',
  state: 'used'
})

console.log(car) // Car { doors: 4, state: 'Brand New', color: 'silver' }
console.log(truck) // Truck { doors: 2, state: 'used', color: 'white' }