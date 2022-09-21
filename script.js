setRoutine();

function setRoutine(){
    clearRoutine();
    for(i in ex){
        p = document.createElement("p");
        p.classList.add("ex");
        p.innerText = ex[i].name;
        for(ii in ex[i].day){
            dDiv = document.getElementById(ex[i].day[ii].toLowerCase());
            exDiv = dDiv.querySelector(".exD");
            exDiv.append(p);
        }
    }
}

function clearRoutine(){
    exDiv = document.querySelectorAll(".exD");
    for(i in exDiv){
        exDiv[i].innerHTML = "";
    }
}

function preCreateEx(me){
    parent = me.parentNode;
    let day = me.parentNode.parentNode.querySelector(".dName").innerText;
    createEx(day);
}

function createEx(day){
    div = document.createElement("div");
    div.id = "dae";

    main2 = document.createElement("div");
    main2.id = "main2";

    divH = document.createElement("div");
    divH.id = "daeh";
    title = document.createElement("p");
    title.innerText = day;
    exit = document.createElement("button");
    exit.setAttribute("onclick", "closeEx()");
    divH.append(exit);
    divH.append(title);

    divB = document.createElement("div");
    divB.id = "daeb";
    input = document.createElement("input");
    send = document.createElement("button");
    send.setAttribute("onclick", `addEx(this, "${day}")`);
    send.innerText = "Send";
    divB.append(input);
    divB.append(send);

    div.append(divH);
    div.append(divB);
    document.body.append(div);
    document.body.append(main2);
}

function closeEx(){
    div = document.getElementById("dae");
    main2 = document.getElementById("main2");
    document.body.removeChild(div);
    document.body.removeChild(main2);
}

function addEx(me, day){
    let input = me.parentNode.querySelector("input");
    console.log(input);
    if(input.value !== ""){
        let newVal = {"name": input.value, "day": [day]};
        ex.push(newVal);

        sendEx();
        localStorage.setItem("ex", ex);
        getEx();
        setRoutine();
    }
    me.setAttribute("onclick", "addEx(this)");
    input.parentNode.removeChild(input);
}