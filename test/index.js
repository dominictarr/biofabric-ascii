//  var g = {
//    START: {
//      data: 'START',
//      pause: 'PAUSED',
//      error: 'ERROR',
//      end: 'END'
//    },
//    PAUSED: {
//      error: 'ERROR',
//      resume: 'START'
//    },
//    ERROR: {},
//    END: {}
//  }
//

var render =  require('../')

function random(v, e) {
  v = v || 20
  e = e || 40
  var g = {}
  var names = 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('').slice(0, v)
  var l = e
  while(l --) {
    var n = names[~~(Math.random()*names.length)]
    var m = names[~~(Math.random()*names.length)]
    g[n] = g[n] || []
    g[m] = g[m] || []
    if(!~g[n].indexOf(m))
      g[n].push(m)
  }
  return g
}

var g = random(40, 60)

//var g = {
//  'a': [],
//  'b': ['a'],
//  'c': ['b'],
//  'd': ['c'],
//  'C': ['b'],
//  'D': ['C'],
//  'E': ['D'],
//  'f': ['E', 'd']
//}
//
console.log(render(g))
