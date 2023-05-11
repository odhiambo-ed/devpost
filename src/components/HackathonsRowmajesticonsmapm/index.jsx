import React from "react";

import { Img, Text } from "components";

const HackathonsRowmajesticonsmapm = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_majesticonsmapmarker.svg"
          className="h-6 w-6"
          alt="majesticonsmapm"
        />
        <Text
          className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.location}
        </Text>
      </div>
    </>
  );
};

HackathonsRowmajesticonsmapm.defaultProps = { location: "Location" };

export default HackathonsRowmajesticonsmapm;
