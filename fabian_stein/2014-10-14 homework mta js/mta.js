/*
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
*/

var stations = {
	lineN: ['N_TS', 'N_34', 'N_28', 'N_23', 'US', 'N_8'],
	lineL: ['L_8', 'L_6', 'US', 'L_3', 'L_1'],
	line6: ['6_GC', '6_33', '6_28', '6_23', 'US', '6_AS'] 
};


//Define start and finish variables for lines and stations
var lineStart = 'lineN';
var stationStart = 'N_TS';
var lineFinish = 'line6';
var stationFinish = '6_GC';

//Find index of the relavant stations
var indexStart = stations[lineStart].indexOf(stationStart);
var indexStartUS = stations[lineStart].indexOf('US');
var indexFinishUS = stations[lineFinish].indexOf('US');
var indexFinish = stations[lineFinish].indexOf(stationFinish);

//Calculate distance
var distanceSame = Math.abs(indexStart - indexFinish); //if start and finish on same line
var distanceSwitch = Math.abs(indexStart - indexStartUS) + Math.abs(indexFinish - indexFinishUS); //if start and finish on different lines

//check if start and finish on same line or different ones and set respective result
if (lineStart === lineFinish) {
	var distance = distanceSame;
} else {
	var distance = distanceSwitch;
};

//output of result in console
console.log("You start on line", lineStart, "at station", stationStart);
console.log("You disembark on station", stationFinish, "on line", lineFinish);
console.log("Number of stops to your destination: ",distance);




/*
1. Find the index of the start station.
2. If finish station is on same line find index of that.
2a. Calculate difference between start and finish station.
3. Find the index of Union Square on the start line.
4. Calculate the difference from start station index to Union Square index on the same line.
5. Find the index of the finish station.
6. Find the index of Union Square on the finish station.
7. Calculate the difference from Union Square index to finish station index.
*/



/*
Potentially helpful syntax:
Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.forEach()
Calls a function for each element in the array.
Array.prototype.entries() 
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Array.prototype.findIndex() 
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
*/

