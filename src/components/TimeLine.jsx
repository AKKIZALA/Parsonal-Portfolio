import React from "react";
import "../stylesheets/TimeLine.css";
import data from "../assets/data.json"

const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
      {data.projects.map((it,index)=>(
        <TimelineItem heading={it.title} text={it.date} index={index} key={it.title} />
      ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeLine" : "rightTimeLine"
    }`}
  >
    <div>
    <h2>{heading}</h2>
    <p>{text}</p>
    </div>
  </div>
);

export default TimeLine;
