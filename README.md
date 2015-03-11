# biofabric-ascii

render graphs biofabric style in the terminal.

Graph layout is a _facinating computer science problem_,
meaning, there is no solution, and you could spend your life studying it.
I know enough to keep away from any more of those. But I need to render
A graph... Ideally, in the terminal!

[biofabric](http://www.biofabric.org/gallery/pages/SuperQuickBioFabric.html)
is a method of laying out a graph as with nodes as lines
instead of points. This means you can layout a graph on a simple
grid, nodes become horizontal lines, and edges become vertical lines.

see also [maxodgen/biofabric](https://github.com/maxogden/biofabric)

Here is a random graph with 40 nodes and 60 random edges.

```
@++++---^                                                 h
 ||||++-|-----------------------------^                   o
 |v||v|+|                             |                   r
 v-||-|||------------^----------^     |                   c
   || ||++-----------|----------|---^ |                   j
   |v-v|-|+---------^|          |   | |                   N
   |   | ||+++------||----------|---|-|-------^           k
   |   | ||v||+-----||^--------^|-^-|-|-------|--^        f
   v---|-||-|||++   |||        || | | |       |  |        z
       | || |||v|++-|||--------||-|-|-|-------|--|-^      L
       | || ||| |||++||--------||-|-|-|------^|--|-|--^   s
       | v|-|||-|||v-+|        || | | |      ||  | |  |   v
       |  | ||| |||   ++^      || | | |      ||  | |  |   M
       |  | ||| |||    |+@+----||-|-|^|      ||  | |  |   H
       |  | ||| |||    |  |+   || | |||      ||  | |  |   I
       |  | ||| |||    |  |v++-||-|-|||------||-^| |  |   t
       |  | ||v-|||----|--v-||++|-|-|||------||-||-|--|^  x
       |  | ||  |||    |    ||v-++|-|||------||-||^|  ||  B
       |  | ||  |||    |    ||   |++|||      || ||||  ||  g
       |  | ||  |||    |    ||   | |++|^---^ || ||||  ||  n
       |  | ||  |||    |    ||   | |  +++  | || ||||  ||  i
       |  | ||  |||    |    ||   | |    |+ | || ||||  ||  d
       |  v-||--|||----|----||---|-|----|v-|^|| ||||  ||  A
       |    |v--|||----v----||---|-|----|-+|||| ||||  ||  q
       |    |   |||         v|---|-|----|-v+||| ||||  ||  J
       |    |   |v|----------|---|-|----|---+|| ||||  ||  e
       |    |   | |          v---|-|----|----+| ||||  ||  D
       v    |   | |              | |    |     | ||||  ||  y
            |   | |              | |    |     + ||||  ||  b
            |   | |              | |    |      ++|||  ||  l
            |   | |              | |    |      v-+++-^||  C
            |   v |              | |    |            |||  w
            |     |              v |    |            |||  u
            |     |                v----|-----------++||  K
            |     |                     |           | ++  G
            |     |                     |           v     p
            v-----|---------------------v---------------^ E
                  v-------------------------------------+ a

```
Horizontal lines connect all the edges for a node. `+` indicates
the start of an edge, and `^` and `v` indicate it's direction.
self-references are represented as `@`.

Laying out the graph is reduced to choosing an order for the nodes.
This means sorting a one dimentional list, not mapping points into 2d
space so that lines between them minimally overlap. This is a much
simpler problem!

Depending on what type of graph you have, choose an ordering
that displays that well. For example, if you have a DAG,
a topological sort might work well, or if you have a cyclic graph,
you could try taking the node with the highest degree
(or some more clever centrality measure) and then adding it's high degree neiboughers etc.
(this is what biofabric recommends)

Support for undirected graphs is not implemented yet.

## License

MIT
