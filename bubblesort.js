function bubbleSort(array){
	var sorted = false;
	while (!sorted){
		sorted = true; 
		for (var i = 0; i < array.length -1; i++){
			if (array[i] > array[i+1]){
				sorted = false;
				array = swap(array, i);
			}
		}
	}
	return array;
}

function swap(array, i){
	var temp = array[i];
	array[i] = array[i+1];
	array[i+1] = temp;
	return array;
}