
describe('mazeRunner', function(){
	var testMaze = 	 [[1,1,1,1,1,1,1],
		              [1,0,0,0,0,0,3],
		              [1,0,1,0,1,0,1],
		              [0,0,1,0,0,0,1],
		              [1,0,1,0,1,0,1],
		              [1,0,0,0,0,0,1],
		              [1,2,1,0,1,0,1]];
  	var start = [6,1];
  	it('If I run into a "1" return dead', function(){
    expect(positionChecker(
    	testMaze,[0,0])).toEqual("Dead");
});
	it('If I run into a "3" return "Finish', function(){
    expect(positionChecker(
    	testMaze,[1,6])).toEqual("Finish");
});
	it('If moved out of bounds in the y axis return "Dead"', function(){
    expect(positionChecker(testMaze, [6,-1])).toEqual("Dead");
});
	it('If moved out of bounds in the x axis return "Dead"', function(){
    expect(positionChecker(testMaze, [-1,6])).toEqual("Dead");
});
	it('Should return starting position of [1,0]', function(){
    expect(getStart(testMaze)).toEqual([6,1]);
});
	it('If direction is "N" the y coordinate should decrease by 1', function(){
    expect(positionMover(start, "N")).toEqual([5,1]);
});
	it('If direction is "S" the y coordinate should increase by 1', function(){
    expect(positionMover([2,1], "S")).toEqual([3,1]);
});
	it('If direction is "E" the x coordinate should increase by 1', function(){
    expect(positionMover([5,1], "E")).toEqual([5,2]);
});
	it('If direction is "W" the x coordinate should decrease by 1', function(){
    expect(positionMover([5,3], "W")).toEqual([5,2]);
});
	it('If direction is "W" the x coordinate should decrease by 1', function(){
    expect(positionMover([6,0], "W")).toEqual([6,-1]);
});
	it('Should return "Finish" when given directions that do not find the end', function(){
    expect(mazeRunner(testMaze, ["N", "N"])).toEqual("Finish");
});
	it('Should return "Dead" when given directions that that kill us', function(){
    expect(mazeRunner(testMaze, ["W", "N"])).toEqual("Dead");
});
	it('Should return "Dead" when given directions that that kill us', function(){
    expect(mazeRunner(testMaze, ["N","W"])).toEqual("Dead");
});


});
