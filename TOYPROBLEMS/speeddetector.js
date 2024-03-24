
function show(value){
    console.log(value);
}

function speedDetector(speedInput){
    let response = "";

    if(speedInput >= 0 && speedInput <= 70)
{
    response = "Ok";
}else{
    let point = 1;
    let perPoint = 5;

        let diff = speedInput - 70;

        response = Math.floor(diff/perPoint);
        
        if(response >12){
            response = "License suspended";

        }

    }
    return response;
}
//show(speedDetector(81))
