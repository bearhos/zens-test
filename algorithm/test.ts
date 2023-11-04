function miniMaxSum(arr : number[]) {
  
    arr.sort((a, b) => a - b);
  
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
  
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);
  
    console.log(minSum, maxSum);
  }
  