var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];

var comparator = function(a, b){
	console.log(a, b)
	return a.age < b.age; // returning `-1` means "a goes before b"
}



var bubbleSort = function(arr, optFunc){
	if(!optFunc){
		optFunc = function(a, b){
			return a > b
		}
	}

	for (var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length - i - 1; j++){
			if ( optFunc(arr[j], arr[j+1])) {
				var temp = arr[j]

				arr[j] = arr[j+1]
				arr[j+1] = temp	
			}
		}	
	}

	return arr
}

var sorted = bubbleSort(arrToSort, comparator)
console.log(sorted)