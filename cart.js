let count = 1;

document.getElementById("minusi").onclick = function(){
    count-=1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("plusi").onclick = function(){
    count+=1;
    document.getElementById("count").innerHTML = count; 
}



