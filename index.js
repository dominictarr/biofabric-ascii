

// render a graph as ascii.
/*
{
  a: ['b', 'c'], //edges
  b: ['a', 'c'],
  c: []
}
*/

function nodes (graph) {
  return Object.keys(graph)
}

function countEdges (graph) {
  var edges = 0
  for(var node in graph)
    for(var k in graph[node])
      edges++
  return edges
}

  function render (g) {
    var w = countEdges(g), N = nodes(g)
//
//    var degree = {}
//
//    for(var k in g) {
//      var edges = g[k]
//      for(var i in edges) {
//        var j = edges[i]
//        degree[k] = (degree[k] || 0) + 1
//        degree[j] = (degree[j] || 0) + 1
//      }
//    }
//
//    N.sort(function (a, b) {
//      return degree[b] - degree[a]
//    })
//
    //make a matrix of characters, then fill it with the edges.
    var m = Object.keys(g)
      .map(function (k, i) {
        var a = new Array(w)
        for(var i = 0; i < w; i++) a[i] = ' '
        return a
      })
    var e = 0
    N.forEach(function (n, i) {
      //fill in the edges for this node.
      for(var k in g[n]) {
        var _n = g[n][k]
        var _i = N.indexOf(_n)
        if(i === _i) m[i][e] = '@' //self link
        else {
          for(var j = i; j != _i; j += (i < _i ? 1 : -1))
            m[j][e] = j === i ? '+' : '|'

          m[_i][e] = i>_i?'^':'v'
        }
        e ++
      }
    })

    //fill in horizontals.
    var term = /\^|v|\+|@/

    m.forEach(function (row) {
      //find the first and last point.
      var first = -1, last = -1
      for(var i = 0; i < row.length; i++)
        if(term.test(row[i])) {
          first = i; break
        }

      for(var i = row.length - 1; i >= 0; i--)
        if(term.test(row[i])) {
          last = i; break
        }

      for(var i = first; i <= last; i++)
        if(row[i] === ' ') row[i] = '-'

    })

    return m.map(function (e, i) { return e.join('') + ' ' + N[i] }).join('\n')
  }

module.exports = render
