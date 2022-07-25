if (document.getElementById("countdown")) {
 const ckeditor =  CKEDITOR.replace( 'reminder-content' );
  // variable to store our intervalID
  let nIntervId;
  let minute;
  let second;
  let time_in_seconds;

  function stopTimer(){
    document.getElementById("minute").value = 00;
    document.getElementById("second").value = 00;
    document.getElementById("show_time").innerHTML = '00:00';
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;


  }

  function pauseTImer() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
  }

  async function startTimer() {
    minute = parseInt(document.getElementById("minute").value);
    second = parseInt(document.getElementById("second").value);
    time_in_seconds = minute * 60 + second;
    let error_array = [];
    // time_collector.push(time_in_seconds);

    console.log(minute, second);
    if (minute < 0) {
      alert("Please enter a positive minute value");
      error_array.push("Please enter a positive minute value")
      stopTimer();
    }
     if (second < 0 || second > 59) {
      alert("Please input a seconds value between 0 and 59");
      error_array.push("Please input a seconds value between 0 and 59")

      stopTimer();
    }
    if(error_array.length == 0) {
      if (!nIntervId) {
        nIntervId = setInterval(displayer, 1000);
       
      }
      if(time_in_seconds > 60 ){
        let timeDetails = {
          timeOfInitiation : new Date().toLocaleTimeString(),
          timeToEnd : new Date(new Date().getTime() + time_in_seconds*1000).toLocaleTimeString()
        }
        let test = {
          a :'b',
          b : 's'
        }
        const timerFeedback =  await axios.post("/current-time", timeDetails);
        alert(time_in_seconds);
        console.log(timeDetails);
        console.log(timerFeedback);


        
      }
    }
  }

  function displayer() {
    minute--, second--, time_in_seconds--;
    // console.log(minute, second, time_in_seconds);
    let currentMinute = Math.floor(time_in_seconds / 60);
    let currentSecond = time_in_seconds % 60;
    currentSecond = currentSecond < 10 ? '0' + currentSecond  : currentSecond
    
    document.getElementById("show_time").innerHTML = `${currentMinute}:${currentSecond}`;
    if(time_in_seconds == 0){
      clearInterval(nIntervId);
    // release our intervalID from the variable
      nIntervId = null;

    }
  }

  // document.getElementById("continue").addEventListener("click", changeColor);
  document.getElementById("stop").addEventListener("click", stopTimer);
  document.getElementById("pause").addEventListener("click", pauseTImer);
  document.getElementById("create").addEventListener("click", startTimer);

  
}
