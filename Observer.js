function Emitter() {
  this.events = {}
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || []
  this.events[type].push(listener)
}

Emitter.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach(f => f())
  }
}

let example = new Emitter()

example.on('hi', () => {
  console.log('Hello')
})

example.on('hi', () => {
  console.log('World!')
})

example.emit('hi')