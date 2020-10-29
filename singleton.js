let instance;
function User(name, age) {
  if (instance) {
    return instance
  }
  instance = this
  this.name = name
  this.age = age

  return instance
}

const user1 = new User('David', 20)
console.log(user1) // User { name: 'David', age: 20 }

const user2 = new User('Mark', 23)
console.log(user2) // User { name: 'David', age: 20 }

// Open module + singleton
const singleton = (function() {
  let instance;

  function User(name, age) {
    this.name = name
    this.age = age
  }

  return {
    getInstance(name, age) {
      if (!instance) {
        instance = new User(name, age)
      }
      return instance
    }
  }
})();

let a = singleton.getInstance('Sasha', 32)
let b = singleton.getInstance('Mark', 25)

console.log(a === b) // true