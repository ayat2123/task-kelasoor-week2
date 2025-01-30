function isprime(number) {
    for (let i = 2;i <= number; i++){
        if(number % i ===0 ){
        console.log("false")
    }
    else{
        console.log("true")
    }
    return
    }}

// isprime(53)
// convert-time
function convert(hour , minute){
    if(12<hour<=24){
        const pm= hour-12 + "PM"
        console.log(pm)
    }
}
// convert(23 , 20)

//inrange
const range = {1,2,3,4 ,5,6,7,8,9,10}
function inrange(num){
    for( const element of range){
       if( num == element){
    console.log("true")
    }
   }
}
// inrange(8)

//


