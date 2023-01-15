import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp, IoBriefcase } from "react-icons/io5";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #100f0f 50%, rgb(5, 5, 5) 100%)",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="January 2020 - July 2023 (expected)"
          iconStyle={{ background: "#eccb46", color: "#fff" }}
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
            backgroundImage:
              "linear-gradient(to right, #100f0f 50%, rgb(5, 5, 5) 100%)",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="July 2019 - December 2019"
          iconStyle={{ background: "#2DC84D", color: "#fff" }}
          icon={<IoBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Järvenpää Postal Office
          </h3>
          <p>Postal Carrier</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #100f0f 50%, rgb(5, 5, 5) 100%)",
            fontSize: "1.5rem",
          }}
          className="vertical-timeline-element--education"
          date="August 2017 - December 2017"
          iconStyle={{ background: "#2DC84D", color: "#fff" }}
          icon={<IoBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Inex Group OY</h3>
          <p>Warehouse Worker</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #100f0f 50%, rgb(5, 5, 5) 100%)",
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
