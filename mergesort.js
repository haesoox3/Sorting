// function mergeSort(array){
// 	if (array.length <= 1){
// 		return array;
// 	}
// 	var splitArr = split(array);
// 	var left = mergeSort(splitArr[0]);
// 	var right = mergeSort(splitArr[1]);
// 	return merge([left, right]);
// }

// function merge(array){
// 	var ans = [];
// 	var left = array[0];
// 	var right = array[1];
// 	while (left.length > 0 || right.length > 0){
// 		if (left.length > 0 && right.length > 0){
// 			if (left[0] <= right[0]){
// 				ans.push(left.shift());
// 			}
// 			else {
// 				ans.push(right.shift());
// 			}
// 		}
// 		else if (left.length > 0){
// 			ans.push(left.shift());
// 		}
// 		else if (right.length > 0){
// 			ans.push(right.shift());
// 		}
// 	}
// 	return ans;
// }

// function split(array){
// 	return [array.splice(0, array.length/2), array];
// }

// mergeSort([5, 3, 4, 6, 1, -1]);

function mergeSort(wholeArray){
    if (wholeArray.length <= 1){
        return wholeArray;
    }
    var splitArr = split(wholeArray);
    var left = mergeSort(splitArr[0]);
    var right = mergeSort(splitArr[1]);
    return merge([left, right]);
}

function merge(wholeArray){
    var newArray = []
    var firstHalf = wholeArray[0];
    var secondHalf = wholeArray[1];
    while (firstHalf.length > 0 || secondHalf.length > 0){
        if (firstHalf.length > 0 && secondHalf.length > 0){
            if (firstHalf[0] > secondHalf[0]){
                newArray.push(secondHalf.shift());
            }
            else {
                newArray.push(firstHalf.shift());
            }
        }
        // changed if to else if 
        else if (firstHalf.length > 0){
            newArray.push(firstHalf.shift());
        }
        else if (secondHalf.length > 0){
            newArray.push(secondHalf.shift());
        }
    }
    return newArray;
}

function split(wholeArray) {

 /* your code here to define the firstHalf and secondHalf arrays */
  var indexSplit = wholeArray.length/2;
  var firstHalf = wholeArray.splice(0, indexSplit);
  var secondHalf = wholeArray;

 return [firstHalf, secondHalf];
}