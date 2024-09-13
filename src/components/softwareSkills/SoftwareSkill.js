import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <OverlayTrigger
                key={i}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top-${i}`}>
                    <strong>{skills.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={skills.skillName}>
                  {/* Use Iconify for the icon */}
                  {skills.fontAwesomeClassname && (
                    <span
                      className="iconify"
                      data-icon={skills.fontAwesomeClassname}
                      style={skills.style}  // Inline style with color
                      data-inline="false"
                    ></span>
                  )}
                  <p>{skills.skillName}</p>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
