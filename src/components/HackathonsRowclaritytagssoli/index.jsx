import React from "react";

import { Img, Text } from "components";

const HackathonsRowclaritytagssoli = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_claritytagssolid.svg"
          className="h-6 w-6"
          alt="claritytagssoli"
        />
        <Text
          className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.interesttags}
        </Text>
      </div>
    </>
  );
};

HackathonsRowclaritytagssoli.defaultProps = { interesttags: "Interest Tags" };

export default HackathonsRowclaritytagssoli;
