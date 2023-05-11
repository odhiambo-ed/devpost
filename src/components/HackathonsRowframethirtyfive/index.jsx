import React from "react";

import { Img, Text } from "components";

const HackathonsRowframethirtyfive = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame35.svg"
          className="h-6 w-6"
          alt="frameThirtyFive"
        />
        <Text
          className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.status}
        </Text>
      </div>
    </>
  );
};

HackathonsRowframethirtyfive.defaultProps = { status: "Status" };

export default HackathonsRowframethirtyfive;
