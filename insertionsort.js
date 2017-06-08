function insertionSort(array){
	var sorted = [];
	if (array.length <= 1){
		return array;
	}
	// Iterating through unsorted array
	for (var i = 0; i<array.length; i++){
		// Boolean instance for whether the element has been inserted yet 
		var inserted = false;
		for (var j = i-1; j>=0; j--){
			if (sorted[j] > array[i]){
				// Shifting larger elements over by 1
				sorted[j+1] = sorted[j];
				// Checking for proper place to insert self 
				// Two cases, Hit the first element and not yet inserted --> Smallest element
				// The previous element is less than me 
				if ((!inserted && j ===0) || (sorted[j-1] <= array[i] && j > 0)){
					sorted[j] = array[i];
					inserted = true;
				}
			}
		}
		// If it has not been inserted at this point, it means that it is the new maximum of the sorted array 
		if (!inserted){
			sorted[i] = array[i];
		}
	}
	return sorted;
}