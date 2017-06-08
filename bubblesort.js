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

// Array.prototype.swap = function(i){
// 	var temp = this[i];
// 	this[i] = this[i+1];
// 	this[i+1] = temp;
// 	return this;
// }

function swap(array, i){
	var temp = array[i];
	array[i] = array[i+1];
	array[i+1] = temp;
	return array;
}