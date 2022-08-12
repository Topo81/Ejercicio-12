function Fibo(number){
    var num = [];
    num[0] = 0;
    num[1] = 1;
    for (var i = 2; i < number; i++) {
      num[i] = num[i - 2] + num[i - 1];
    }
    return num;
    }
    var f = Fibo(10);
    console.log(f);
