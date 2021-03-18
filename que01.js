function recursivePrint(n, message){
     if(n > 0){
         console.log(message)
         return recursivePrint(n-1, message)
     }
}


recursivePrint(5, "Hello, World!") // 5 times hello world print...
