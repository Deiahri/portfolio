
function insertionSort(arr, arrParallel = null) {
    let modifyParallel = false;
    if (arrParallel != null && arrParallel.length == arr.length) {
        modifyParallel = true;
    }

    let small = 0;
    for(let index1 = 0; index1 < arr.length-1; index1++) {
        small = index1;
        for(let index2 = index1+1; index2 < arr.length; index2++) {
            if (arr[small] > arr[index2]) {
                small = index2;
            }
        }
        if (small != index1) {
            swap(arr, small, index1);
            if(modifyParallel) {
                swap(arrParallel, small, index1);
            }
        }
    }
}

function swap(arr, index1, index2) {
    if(arr.length > index1 && arr.length > index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
} 

