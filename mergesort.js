var combiningFunc = function(sortedArr1, sortedArr2){
	var newArr = []

	while(sortedArr1.length && sortedArr2.length){
		if(sortedArr1[0] < sortedArr2[0]){
			newArr.push(sortedArr1.shift())
		}
		else {
			newArr.push(sortedArr2.shift())
		}
	}

	return newArr.concat(sortedArr1).concat(sortedArr2)
}


var mergeSort = function(arr){
	if (arr.length <= 1){
		return arr
	}

	var leftSlice = arr.slice(0, (arr.length/2))
	var rightSlice = arr.slice((arr.length/2), arr.length)

	return combiningFunc(mergeSort(leftSlice), mergeSort(rightSlice))
}


var quicksort = function(arr){ 

	if ( arr.length === 0 ) {
		return [];
	}
	
	var less = []
	var greater = []

	var pivot = arr[0];

	for ( var i = 1; i < arr.length; i++ ) {
		if ( arr[i] < pivot ) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);

		}
	}
	
	return quicksort(less).concat( pivot, quicksort(greater) )
}


for (var i = 9; i <= 12; i++) {
  var numItems = Math.pow(2, i);
  var nativeTestArray = [];

  for(var j = 0; j < numItems; j++) {
    var rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  var bTestArray = nativeTestArray.slice(0);
  var mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' native');
  nativeTestArray.sort(function(a, b){ return a - b; });
  console.timeEnd(numItems + ' native');

  console.time(numItems + ' bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' bubble');

  console.time(numItems + ' merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' merge');

  console.time(numItems + ' quicksort');
  quicksort(mTestArray);
  console.timeEnd(numItems + ' quicksort');


  console.log('\n')
}
