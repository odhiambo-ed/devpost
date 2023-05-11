import React from "react";

import { Img, Text } from "components";

const HackathonsRowriuserfill = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_riuserfill.svg"
          className="h-6 w-6"
          alt="riuserfill"
        />
        <Text
          className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.opento}
        </Text>
      </div>
    </>
  );
};

HackathonsRowriuserfill.defaultProps = { opento: "Open To" };

export default HackathonsRowriuserfill;
