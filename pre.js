setEx();

function setEx(){
    ex_ = localStorage.getItem("ex");
    ex = ex_ ? ex_.split("|") : new Array;

    if(ex.length > 0){
        for(i in ex){
            ex[i] = JSON.parse(ex[i]);
        }
    }

    console.log(ex);
}

function setEx2(){
    for(i in ex){
        ex[i] = JSON.stringify(ex[i]);
    }

    ex = ex.join("|");
}