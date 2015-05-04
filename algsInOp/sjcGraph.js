/* Nathan Samano
 * CMP344 Final Exam
 * Algorithms in Operation #2
 * run with d8
 */

/************************
 * 0 = Computer Center  *
 * 1 = Science Building *
 * 2 = Core Building    *
 * 3 = Rec Center       *
 * 4 = Halleck Center   *
 * 5 = the Chapel       *
 * 6 = Gallagher        *
 ************************/

// Three ways to get from dorm to Core building all having
// different path lengths
// Show sortest path from dorm to core building

load('graph.js');

g = new Graph(7);
g.addEdge(0,1);
g.addEdge(0,5);
g.addEdge(0,6);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,3);
g.addEdge(2,4);
g.addEdge(2,6);
g.addEdge(4,6);
g.showGraph();
g.bfs(6); // this does the shortest path
var vertex = 2;
var source = 6;
var paths = g.pathTo(source, vertex);
g.showPath(paths);
print();
