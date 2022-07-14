function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here

  // Up
  let node = [row,col]
  let matrix = graph
  const neighbors = [];
  if (node[0] !== 0) {
    const up = node.slice();
    up[0]--;
    if(matrix[up[0]][up[1]] === 1)
    neighbors.push(up);
  }
  // Down
  if (node[0] !== matrix.length - 1) {
    const down = node.slice();
    down[0]++;
    if (matrix[down[0]][down[1]] === 1)
    neighbors.push(down);
  }
  // Left
  if (node[1] !== 0) {
    const left = node.slice();
    left[1]--;
    if (matrix[left[0]][left[1]] === 1)
    neighbors.push(left)
  }
  // Right
  if (node[1] !== matrix.length - 1) {
    const right = node.slice();
    right[1]++;
    if (matrix[right[0]][right[1]] === 1)
    neighbors.push(right)
  }
  // Your code here
  // for (item of neighbors){
  //     console.log (matrix[item[0]][item[1]])
  // }
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
  
 let matrix = graph
 let startNode = [row, col]
  const queue = [startNode]
  const visited = new Set();
  visited.add(startNode.toString());
  
  while (queue.length > 0) {
    let node = queue.shift();
    
    // console.log (currentPath);
    // console.log (node)

    const neighbors = getNeighbors(node[0], node[1], matrix);
    for (location of neighbors) {
      
      let item = location.toString()
      if (!visited.has(item)) {
        
        
        queue.push(location)
        visited.add(item);
      }
    }
  }
  return visited.size;
}

matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
]

console.log(getNeighbors(1, 1, matrix))

module.exports = [getNeighbors, islandSize];
