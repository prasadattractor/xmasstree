"use client";
import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure jQuery is available

function ProgressComponent() {
  useEffect(() => {
    const $element = $('#progressBar');
    progress(120, 120, $element);
  }, []);

  function progress(timeleft, timetotal, $element) {
    var progressBarWidth = (timeleft * $element.width()) / timetotal;
    $element.find('div.bar').animate({ width: progressBarWidth }, timeleft === timetotal ? 0 : 1000, 'linear');
    if (timeleft > 0) {
      setTimeout(function () {
        progress(timeleft - 1, timetotal, $element);
      }, 1000);
    }

    var date = new Date(null);
    date.setSeconds(timeleft);
    var timeString = date.toISOString().substr(11, 8);
    var newtimeleft = timeString;

    $('#timer').text(newtimeleft);
  }

  return (
    <div className="progressBar-wrap" >
      <div id="progressBar" style={{ width: '100%' }}>
        <div className="bar"></div>
      </div>
      <div id="timer">00:00</div>
    </div>
  );
}

export default ProgressComponent;
