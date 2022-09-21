getEx();

function getEx(){
    ex_ = localStorage.getItem("ex");
    ex = ex_ ? ex_.split("|") : new Array;

    if(ex.length > 0){
        for(i in ex){
            ex[i] = JSON.parse(ex[i]);
            if(typeof(ex[i].day) == "string"){
                ex[i].day = ex[i].day.split(",");
            }
        }
    }
    console.log(ex);
}

function sendEx(){
    for(i in ex){
        ex[i].day = ex[i].day.join(",");
        ex[i] = JSON.stringify(ex[i]);
    }

    ex = ex.join("|");
}