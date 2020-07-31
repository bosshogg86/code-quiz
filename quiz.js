// Variable declarations

// Function
function startQuiz() {
    let counter = 60;
    var interval = setInterval(function() {
    counter--;
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("Times Up!");  
        return;
    }else{
    	$('#seconds').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);
}
// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);