const express = require('express');
const Graph = require('node-dijkstra');
const app = express();
var jsonObj = require("E:/hackathon/Newfolder/locations.json");
var nodes=[];
app.get('/', (req, res) => res.send('listening on port 3000!'));

const route = new Graph();
const route1 = new Graph();

for(var i in jsonObj){
    console.log("Node::"+jsonObj[i].Node);
    var str=null;
    for(var j in jsonObj[i].Connections){
        console.log(jsonObj[i].Connections[j].Node+":"+jsonObj[i].Connections[j].AssociatedBW);
        str+=jsonObj[i].Connections[j].Node+":"+jsonObj[i].Connections[j].AssociatedBW;
         //route1.addNode(jsonObj[i].Node, {str});
    }
    
}

route.addNode('A', { B:10,C:10 });
route.addNode('B', { A:10, C:5, D: 10 });
route.addNode('C', { A:10,B:5 });
route.addNode('D', { B:10 });

var path=route.path('C', 'D');
if(path!=null){
    console.log(path);
}
else{
    console.log("No route found!!!");
}

app.listen(3000, () => console.log('app listening on port 3000!'));