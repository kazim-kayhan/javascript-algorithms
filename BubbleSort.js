function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;       
           }
        }
    }
    return array;
}
 


function test() {
    let myArray = [4,2,6,5,1,3];
    bubbleSort(myArray);
    console.log(myArray);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/   