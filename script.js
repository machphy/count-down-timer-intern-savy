window.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var startButton = document.getElementById('start-btn');
    var stopButton = document.getElementById('stop-btn');
    var alarmSound = document.getElementById('alarm');
    var timer;
  
    function playAlarm() {
      alarmSound.play();
    }
  
    function stopAlarm() {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }
  
    startButton.addEventListener('click', function() {
      var hours = parseInt(document.getElementById('hours').value);
      var minutes = parseInt(document.getElementById('minutes').value);
      var seconds = parseInt(document.getElementById('seconds').value);
  
      var totalTime = (hours * 3600) + (minutes * 60) + seconds;
  
      timer = setInterval(function() {
        var hoursLeft = Math.floor(totalTime / 3600);
        var minutesLeft = Math.floor((totalTime % 3600) / 60);
        var secondsLeft = Math.floor(totalTime % 60);
  
        countdownElement.innerHTML = hoursLeft.toString().padStart(2, '0') + ':' +
                                      minutesLeft.toString().padStart(2, '0') + ':' +
                                      secondsLeft.toString().padStart(2, '0');
  
        totalTime--;
  
        if (totalTime < 0) {
          clearInterval(timer);
          countdownElement.innerHTML = 'Time is up!';
          playAlarm();
        }
      }, 1000);
    });
  
    stopButton.addEventListener('click', function() {
      clearInterval(timer);
      countdownElement.innerHTML = '';
      stopAlarm();
    });
  });
  