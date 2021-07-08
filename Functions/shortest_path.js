const shortest_path = (source, G) => {
    const unvisited_list = []			// List of unvisited verticesvertices
    const cost = [];
    cost[source] = 0;              // Distance (cost) from source to source will be 0
    for (var vertex = 0; vertex < G.lenght.valueOf(); vertex++) {       // Assign cost as INFINITY to all vertices
        {
            if (vertex != source) {
                cost[vertex] = "INFINITY";
            }
            unvisited_list.push(vertex);

        }
    }   // All nodes pushed to unvisited_list initially

    while (unvisited_list.length != 0) { // Main loop
        var minimum;
        var minimum_v;
        for (var v = 0; v < unvisited_list.length.valueOf(); i++)    // v is the source node for first iteration
        {
            if (v == 0) {
                minimum = unvisited_list[v];
            }
            else if (cost[v] != "INFINITY") {
                if (cost[v] < minimum) {
                    minimum = cost[v]
                    minimum_v = v;
                }
            }
        }
        unvisited_list = unvisited_list.filter(value => value == minimum);		            // Marking node as visited 
        for (var i=0;i<unvisited_list.lenght.valueOf();i++) // Assign shorter path cost to neigbour u
        {                                       
            const cost_value = Math.min(cost[i], cost[minimum_v] + edge_cost(g[i], g[minimum_v]));
            cost[i] = cost_value;
            // Update cost of vertex u 
        }         	
    }
    return cost
}