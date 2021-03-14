module.exports = function toReadable (num) {
    let arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let readNum;
    if (num === 0) {
        return 'zero';
    } else if (num < 20) {
    readNum = arr1[num];
    return readNum;
    } else if (num < 100) {
    let arr = num.toString().split('');
    readNum = arr2[arr[0]-2] + ' ' + arr1[arr[1]];
    return readNum.trim();
    } else { 
    let arr3 = num.toString().split('');
    if (arr3[1]==0) {
        readNum = arr1[arr3[0]] + ' hundred ' + arr1[arr3[2]];
    } else if (arr3[1]==1) {
        readNum = arr1[arr3[0]] + ' hundred ' + arr1[+arr3[2]+10];
    } else {
        readNum = arr1[arr3[0]] + ' hundred ' + arr2[arr3[1]-2] + ' ' + arr1[arr3[2]];
    }  
    return readNum.trim();
}
};
