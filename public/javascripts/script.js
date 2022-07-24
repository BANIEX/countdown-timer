if (document.getElementById("countdown")) {
  // variable to store our intervalID
  let nIntervId;
  let minute;
  let second;
  let time_in_seconds;

  function stopTextColor() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
  }

  function startTimer() {
    minute = parseInt(document.getElementById("minute").value);
    second = parseInt(document.getElementById("second").value);
    time_in_seconds = minute * 60 + second;
    // time_collector.push(time_in_seconds);

    console.log(minute, second);
    if (minute < -2) {
      alert("Please enter a time greater than 2 minute");
    } else if (second < 0 || second > 59) {
      alert("Please input a seconds value between 0 and 59");
    } else {
      if (!nIntervId) {
        nIntervId = setInterval(displayer, 1000);
      }
    }
  }
  function displayer() {
    minute--, second--, time_in_seconds--;
    console.log(minute, second, time_in_seconds);
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
  document.getElementById("stop").addEventListener("click", stopTextColor);
  document.getElementById("pause").addEventListener("click", stopTextColor);
  document.getElementById("create").addEventListener("click", startTimer);

  // alert("hello");
  // let time_collector = [];
  // let time_in_seconds = time_collector[0];
  // let show_timeEl = document.getElementById("show_time");

  // document.getElementById("create").addEventListener("click", function (event) {
  //   event.preventDefault();
  //   let minute = parseInt(document.getElementById("minute").value);
  //   let second = parseInt(document.getElementById("second").value);
  //   let time_in_seconds = minute * 60 + second;
  //   time_collector.push(time_in_seconds);

  //   console.log(minute, second);
  //   if (minute < -2) {
  //     alert("Please enter a time greater than 2 minute");
  //   } else if (second < 0 || second > 59) {
  //     alert("Please input a seconds value between 0 and 59");
  //   } else {
  //     // timer();
  //     var myInterval = setInterval(timer, 1000);
  //     function timer() {
  //       // alert(`Reminder set for ${minute} minutes and ${second} seconds `);
  //       console.log(time_in_seconds);
  //       const currentMinute = Math.floor(time_in_seconds / 60);
  //       let currentSecond = time_in_seconds % 60;

  //       time_in_seconds--;
  //       if (time_in_seconds == -1) {
  //         clearInterval(myInterval);
  //       }
  //       document.getElementById(
  //         "show_time"
  //       ).innerHTML = `${currentMinute}:${currentSecond}`;

  //       console.log(time_in_seconds);
  //       document.getElementById("pause").addEventListener("click", () => {
  //         console.log(time_in_seconds);
  //         clearInterval(myInterval);
  //       });

  //       document.getElementById("continue").addEventListener("click", () => {
  //         console.log(time_in_seconds);
  //         var myInterval = setInterval(timer, 1000);

  //       });
  //     }
  //   }
  // });
}
