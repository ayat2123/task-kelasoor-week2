function bmi(weight,height){
    const result = weight / height**2
    if( 16<=result<18.5)
        alert("underweight")
    else if(18.5<=result<25)
        alert("normalweight")
    else if(25<=result<30)
        alert("overweight")
    else if(30<=result)
        alert("obesity")
}
bmi(82,2)