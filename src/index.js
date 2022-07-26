module.exports = function reverse(n) {
  
    let reversed = 0;

    let x = Math.abs(n);

    while(x) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return reversed
}






