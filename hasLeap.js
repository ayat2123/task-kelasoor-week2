function leap(num){
    if( num%100==0 && num%400==0){
        console.log("leap year")
    }
    else{
        console.log("not leap year")
    }
}
leap(2024)