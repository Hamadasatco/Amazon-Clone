// let arr1 = [];
// let arr2 = [1, 2, 3];
const median = function (arr1, arr2) {
    let arr3 = [];
    if(arr1.length === 0){
        arr3 = arr2;
    }
    
    if(arr2.length === 0){
        arr3 = arr1;
    }
    if(arr1.length !== 0 && arr2.length !== 0){
        arr3 = (arr1.concat(arr2)).sort((a, b) => a-b);
    }

    if(arr3.length % 2 === 0){
        return (arr3[parseInt(arr3.length/2) - 1] + arr3[parseInt(arr3.length/2)])/2;
    } else {
        return arr3[parseInt(arr3.length/2)];
    }
}

// let list1 = [];
// let list2 = [1, 2, 3, 4, 5];
// console.log(median(list1, list2));

export default median;