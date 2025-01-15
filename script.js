//your JS code here. If required.
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");

console.log(prevbtn);

function prevfunc() {
	console.log("prev");
	document.getElementById("circle-1").innerHTML = "done";
}

prevbtn.addEventListener("click",()=>{prevfunc()});



console.log("hiii");
