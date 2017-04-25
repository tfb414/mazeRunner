function mazeRunner(maze, directions) {
  console.log(maze);
  var position = getStart(maze);
  for(var i in directions){
    var direction = directions[i];
    position = positionMover(position, direction);
    if(positionChecker(maze, position) !== "Continue"){
      return positionChecker(maze, position);
    }
  }
  return "Lost";
}

function positionMover(position, direction){
  var x = position[0];
  var y = position[1];

  if(direction === "N"){
    return ([x-1,y]);
  }
  if(direction === "S"){
    return ([x+1,y]);
  }
  if(direction === "E"){
    return ([x,y+1]);
  }
  if(direction === "W"){
    return ([x,y-1]);
  }
}

function getStart(maze){
  for(var x in maze){
    var y = (maze[x].indexOf(2));
    if(y >= 0){
      return [parseInt(x), y];
    }
  }
}



function positionChecker(maze, position){
  var x = position[0];
  var y = position[1];
  if(x < 0 || y < 0){
    return "Dead";
  }
  //console.log(position[]);
  if(maze[x][y] === 1){
    return "Dead";
  }
  if(maze[x][y] === 3){
    return "Finish";
  }
  return "Continue";

}
positionChecker([[1,1,1,1,1,1,1],
              [1,0,0,0,0,0,3],
              [1,0,1,0,1,0,1],
              [0,0,1,0,0,0,1],
              [1,0,1,0,1,0,1],
              [1,0,0,0,0,0,1],
              [1,2,1,0,1,0,1]],[1,6]);

function mazeRunner(maze, directions) {
  var position = getStart(maze);
  for(var i in directions){
    var direction = directions[i];
    position = positionMover(position, direction);
    if(positionChecker(maze, position) !== "Continue"){
      return positionChecker(maze, position);
    }
  }
  return "Lost";
}

function positionMover(position, direction){
  var x = position[0];
  var y = position[1];

  if(direction === "N"){
    return ([x-1,y]);
  }
  if(direction === "S"){
    return ([x+1,y]);
  }
  if(direction === "E"){
    return ([x,y+1]);
  }
  if(direction === "W"){
    return ([x,y-1]);
  }
}

function getStart(maze){
  for(var x in maze){
    var y = (maze[x].indexOf(2));
    if(y >= 0){
      return [parseInt(x), y];
    }
  }
}



function positionChecker(maze, position){
  var x = position[0];
  var y = position[1];
  if(x < 0 || y < 0){
    return "Dead";
  }
  //console.log(position[]);
  if(maze[x][y] === 1){
    return "Dead";
  }
  if(parseInt(maze[x][y]) === 3){
    console.log(maze[x][y]);
    return "Finish";
  }
  return "Continue";

}
positionChecker([[1,1,1,1,1,1,1],
              [1,0,0,0,0,0,3],
              [1,0,1,0,1,0,1],
              [0,0,1,0,0,0,1],
              [1,0,1,0,1,0,1],
              [1,0,0,0,0,0,1],
              [1,2,1,0,1,0,1]],[1,6]);



