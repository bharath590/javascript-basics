function QuickSort(array, l, r) {
    if (l > r) {
        return;
    }
    pi = partition(array, l, r);
    QuickSort(array, l, pi-1);
    QuickSort(array, pi+1, r);
};
function partition(arr, l, r) {
    let pivot = arr[r];
    let i = l - 1;
    for (let j = l; j < r; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    a[r] = arr[i + 1];  
    arr[i + 1] = pivot;
    return i + 1;
}
let a = [5,4,3,2,1];
let n = a.length;
QuickSort(a, 0, n-1);
console.log(a);





