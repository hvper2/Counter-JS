let count = 0;
console.log("test");
document.getElementById("DecraseButton").onclick = function() {
    count -= 1;
    document.getElementById("CountLabel").innerHTML = count;
}

document.getElementById("ResetButton").onclick = function(){
    count = 0;
    document.getElementById("CountLabel").innerHTML = count;
}

document.getElementById("IncraseButton").onclick = function(){
    count += 1;
    document.getElementById("CountLabel").innerHTML = count;
}


