class Phone {
  constructor() {
    this.cost = function() {
      return 400
    }
  }
}

function phoneWithWaterProtection(phone) {
  phone.hasWaterProtection = true
  const prevCost = phone.cost()
  phone.cost = function() {
    return prevCost + 50
  }
}

function phoneWithThreeCameras(phone) {
  phone.hasThreeCameras = true
  const prevCost = phone.cost()
  phone.cost = function() {
    return prevCost + 100
  }
}

function phoneWithFastCharge(phone) {
  phone.hasFastCharge = true
  const prevCost = phone.cost()
  phone.cost = function() {
    return prevCost + 75
  }
}

let somePhone = new Phone()
console.log(somePhone.cost()) // 400

phoneWithFastCharge(somePhone)
console.log(somePhone.cost()) // 475
