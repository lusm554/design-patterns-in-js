/**
 * Mediator allows you to control communication between modules by encapsulating their interaction.
 */

const mediator = (function() {
  // Add channel and callback to the mediator's channels
  function subscribe(channel, fn) {
    if (!mediator.channels[channel]) {
      mediator.channels[channel] = []
    }
    mediator.channels[channel].push({
      context: this,
      callback: fn
    })
    return this
  }

  // Call callbacks of the channel 
  function publish(channel, ...args) {
    if (!mediator.channels[channel]) return false;
    for(let subscription of mediator.channels[channel]) {
      subscription.callback.apply(subscription.context, args)
    }
    return this
  }

  return {
    publish,
    subscribe,
    channels: {},
    installTo(obj) {
      obj.publish = publish
      obj.subscribe = subscribe
    }
  }
})();

/* Example */
mediator.name = "Slava";
mediator.subscribe('nameChange', function(newName) {
  console.log(this.name);
  this.name = newName;
  console.log(this.name);
})

mediator.subscribe('server status', function(oldStatus, currentStatus) {
  console.log(`Server status changed from ${oldStatus} to ${currentStatus}`)
}) 

mediator.publish('nameChange', 'Nikita'); // Slava, Nikita
mediator.publish('server status', 200, 503) // Server status changed from 200 to 503