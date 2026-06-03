function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

const display= document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
  
}

function ClearDisplay(){
  display.value = "";
  
}

function calculate (){
  try {
  display.value = eval(display.value);
  }
  catch(error){
    display.value = "error";
  }
}
