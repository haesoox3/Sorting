function quickSort(array){
	if (array.length <= 1){
		return array;
	}
	var pivot = Math.floor(array.length/2);
	var left = [];
	var right = [];
	for (var i = 0; i < array.length; i ++){
	  if (i !== pivot){
		if (array[i] < array[pivot]){
				left.push(array[i]);
		}
			else if (array[i] > array[pivot]) {
				right.push(array[i]);
			}
		}
	  
	}
	left = quickSort(left);
	right = quickSort(right);
	return left.concat([array[pivot]].concat(right));
}