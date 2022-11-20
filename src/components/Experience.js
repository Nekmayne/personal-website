import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundColor: "#4568dc",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="January 2020 - July 2023 (expected)"
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Haaga-Helia University of Applied Science
          </h3>
          <p>Information and Communication Technologies (Bachelor)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundColor: "#4568dc",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="July 2019 - December 2019"
          iconStyle={{ background: "#2DC84D", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Järvenpää Postal Office
          </h3>
          <p>Postal Carrier</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundColor: "#4568dc",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="September 2017 - December 2017"
          iconStyle={{ background: "#2DC84D", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Inex Group OY</h3>
          <p>Warehouse Worker</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundColor: "#4568dc",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="August 2015 - May 2017"
          iconStyle={{ background: "#2DC84D", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Kerava High School
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
