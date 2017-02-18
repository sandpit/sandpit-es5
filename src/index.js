// Require Sandpit
var Sandpit = require('sandpit').default

// Create a new instance, and add some settings
var sandpit = new Sandpit('body', Sandpit.CANVAS)
sandpit.settings = {speed: {value: 300, min: 100, max: 500, step: 100}}

// Do something every frame
sandpit.loop = function() {
  var speed = 450 - sandpit.settings.speed
  var r = Math.ceil(Math.sin(sandpit.time / speed) * 255)
  var g = Math.ceil(Math.sin(sandpit.time / speed * 2) * 255)
  var b = Math.ceil(Math.sin(sandpit.time / speed * 3) * 255)
  sandpit.fill('rgb(' + r + ', ' + g + ', ' + b + ')')
}

// P!NK - Get This Party Started
sandpit.start()
