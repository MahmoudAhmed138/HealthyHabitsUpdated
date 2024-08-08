var btn= document.getElementById("btn");
var reset= document.getElementById("reset-btn");
var countdownDisplay = document.getElementById('countdown');
let timeLeft = 0;
var stop = 0;
window.onload = function(){
    var btn= document.getElementById("btn");
}
function startTimer() {
    btn.style.display="none";
    reset.style.display="block";
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;

    let minutes = parseInt(minutesInput);
    let seconds = parseInt(secondsInput);

    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;

    if (minutes < 0 || seconds < 0 || seconds >= 60) {
        alert('Please enter valid values');
        return;
    }

    const totalTime = (minutes * 60) + seconds;
    timeLeft = totalTime;

    countdownDisplay = document.getElementById('countdown');

    function updateDisplay() {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        countdownDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    updateDisplay();

    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = '00:00';
            if(stop==0){
            Swal.fire({
                title: 'Custom Alert',
                text: 'Time is Up',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            }
        else if(stop==1){
            reset.style.display="none";
            btn.style.display = "block";
            stop=0;
        }
        reset.style.display="none";
        btn.style.display = "block";
            return;
        }
        
        timeLeft--;
        updateDisplay();
    }, 1000);
}
function resetTimer(){
    timeLeft=0;
    stop=1;
    Swal.fire({
        title: 'Custom Alert',
        text: 'Time is reset',
        icon: 'info',
        confirmButtonText: 'OK'
    });
    
}