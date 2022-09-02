setRoutine();

function setRoutine(){
    for(i in ex){
        p = document.createElement("p");
        p.classList.add("ex");
        p.innerText = ex[i].name;

        dDiv = document.getElementById(ex[i].day.toLowerCase());
        exDiv = dDiv.querySelector(".exD");
        exDiv.append(p);
    }
}



function addEx(me){
    parent = me.parentNode;
    input = document.createElement("input");
    input.setAttribute("onkeyup", "btSim(this)"); //make this func
    parent.append(input);
    me.setAttribute("onclick", "addEx2(this)");
    me.innerText = "-";
    me.style.color = "#d33453";
}

function addEx2(me){
    let parent = me.parentNode;
    let pparent = parent.parentNode;
    console.log(pparent);

    let day = pparent.querySelector(".dName").innerText;
    let input = parent.querySelector("input");
    if(input.value !== ""){
        let newVal = {"name": input.value, "day": day};
        ex.push(newVal);

        sendEx();
        localStorage.setItem("ex", ex);
        getEx();
        setRoutine(); //error
    }
    me.setAttribute("onclick", "addEx(this)");
    me.innerText = "+";
    me.style.color = "#34d353";
    input.parentNode.removeChild(input);
}