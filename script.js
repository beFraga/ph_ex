createRoutine();
setRoutine();

function createRoutine(){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    rDiv = document.getElementById("routine");
    for(i in days){
        div = document.createElement("div");
        div.classList.add("day");
        div.id = days[i];

        p = document.createElement("p");
        p.classList.add("dName");
        p.innerText = days[i];

        div2 = document.createElement("div");
        div2.classList.add("exS");

        div3 = document.createElement("div");
        div3.classList.add("newEx");

        bt = document.createElement("button");
        bt.setAttribute("onclick", "addEx(this)");
        bt.innerText = "add exercise";

        div3.append(bt);
        div2.append(div3);
        div.append(p);
        div.append(div2);
        rDiv.append(div);
    }
}
function setRoutine(){
    for(i in ex){
        p = document.createElement("p");
        p.classList.add("ex");
        p.innerText = ex[i].name;
        
        dDiv = document.getElementById(ex[i].day);
        exDiv = dDiv.querySelector(".exS");
        exDiv.append(p);
    }
}



function addEx(me){
    parent = me.parentNode;
    input = document.createElement("input");
    parent.append(input);
    me.setAttribute("onclick", "addEx2(this)");
}

function addEx2(me){
    let parent = me.parentNode;
    let pparent = parent.parentNode.parentNode;

    let day = pparent.querySelector(".dName").innerText;
    let input = parent.querySelector("input");
    if(input.value !== ""){
        let newVal = {"name": input.value, "day": day};
        ex.push(newVal);

        setEx2();
        localStorage.setItem("ex", ex);
        setEx();
    }
    me.setAttribute("onclick", "addEx(this)");
    input.parentNode.removeChild(input);
}