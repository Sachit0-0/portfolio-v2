import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap as SchoolIcon,
  FaBriefcase as WorkIcon,
} from "react-icons/fa";
import { FaBirthdayCake, FaQuestionCircle } from "react-icons/fa";
import backu from "@/assets/bgground.jpg";

export const Timeline = () => {
  const darkerBackgroundColor = "rgb(18, 18, 18)";
  const whiteTextColor = "#fff";
  const lightRed = "#ffccd5";
  const containerStyles = {
    backgroundImage: `url(${backu})`,
    backgroundSize: "fit",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "fit",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <section id="timeline">
      <div style={containerStyles}>
        <VerticalTimeline className="mt-44 mb-44">
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="Born on 2000 Oct 18"
            iconStyle={{
              background: darkerBackgroundColor,
              color: lightRed,
            }}
            contentStyle={{
              background: darkerBackgroundColor,
              color: whiteTextColor,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${darkerBackgroundColor}`,
            }}
            icon={<FaBirthdayCake />}
          >
            <h3 className="vertical-timeline-element-title">Happy Birthday!</h3>
            <p style={{ color: whiteTextColor }}>
            Born on October 18, 2000.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="CHAITRA 2073"
            iconStyle={{
              background: darkerBackgroundColor,
              color: lightRed,
            }}
            contentStyle={{
              background: darkerBackgroundColor,
              color: whiteTextColor,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${darkerBackgroundColor}`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              SEE, ASHIRVAD BOARDING SCHOOL
            </h3>
            <p style={{ color: whiteTextColor }}>GPA 3.65</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="BAISAKH 2076"
            iconStyle={{
              background: darkerBackgroundColor,
              color: lightRed,
            }}
            contentStyle={{
              background: darkerBackgroundColor,
              color: whiteTextColor,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${darkerBackgroundColor}`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              NEB, CANVAS INTERNATIONAL COLLEGE
            </h3>
            <p style={{ color: whiteTextColor }}>Science Stream</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="ASHADH 2080 B.S."
            iconStyle={{
              background: darkerBackgroundColor,
              color: lightRed,
            }}
            contentStyle={{
              background: darkerBackgroundColor,
              color: whiteTextColor,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${darkerBackgroundColor}`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              B. Sc.IT, HERALD COLLEGE KATHMANDU
            </h3>
            <p style={{ color: whiteTextColor }}>
              Graduate in Information Technology (B.IT) from Herald College
              Kathmandu (HCK).
            </p>
          </VerticalTimelineElement>

          {/* Currently Working */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Currently Working"
            iconStyle={{
              background: darkerBackgroundColor,
              color: lightRed,
            }}
            contentStyle={{
              background: darkerBackgroundColor,
              color: whiteTextColor,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${darkerBackgroundColor}`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Monal Tech</h3>
            <p style={{ color: whiteTextColor }}>
             Working as an associate software developer at Monal Tech.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "rgba(0, 0, 0, 0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: whiteTextColor,
            }}
          />

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Death: Pending"
            iconStyle={{
              background: darkerBackgroundColor,
              color: lightRed,
            }}
            contentStyle={{
              background: darkerBackgroundColor,
              color: whiteTextColor,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${darkerBackgroundColor}`,
            }}
            icon={<FaQuestionCircle />}
          >
            <h3 className="vertical-timeline-element-title">Life Journey</h3>
            <p style={{ color: whiteTextColor }}>The journey continues...</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

