import React from "react";
import breafcase from "../svgs/breafcase.svg";
import map from "../svgs/map.svg";
import profile from "../svgs/profile.svg";
import ellipse from "../svgs/ellipse.svg";
import ellipse2 from "../svgs/ellipse2.svg";
import { Services } from "./Services";

export const Fotter = () => {
  return (
    <div className=" bg-brand-default">
      <div className=" mx-auto container  md:space-x-6 mt-2 flex lg:flex-nowrap md:flex-wrap md:flex-row flex-col justify-center py-12 items-center">
        <Services
          icon={breafcase}
          ellipse={ellipse}
          title={"Work-Life Balance"}
          details={
            "Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they choose."
          }
        />
        <Services
          icon={map}
          ellipse={ellipse2}
          title={"Work Anywhere"}
          details={
            "Having access to a broader range of job opportunities that aren’t limited by geographic location. This can be especially helpful."
          }
        />
        <Services
          icon={profile}
          ellipse={ellipse}
          title={"Improved Inclusivity"}
          details={
            "Remote work enables companies to embrace diversity and inclusion by hiring people from different backgrounds."
          }
        />
      </div>
    </div>
  );
};
