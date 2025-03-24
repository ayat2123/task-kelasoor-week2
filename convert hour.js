function convert(hour){
    if(12<hour<=24){
        const pm= hour-12 + "PM"
        console.log(pm)
    }
}
convert(23)