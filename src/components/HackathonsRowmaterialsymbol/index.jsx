import React from "react";

import { Img, Text } from "components";

const HackathonsRowmaterialsymbol = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_materialsymbol.svg"
          className="h-6 w-6"
          alt="materialsymbol"
        />
        <Text
          className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.length}
        </Text>
      </div>
    </>
  );
};

HackathonsRowmaterialsymbol.defaultProps = { length: "Length" };

export default HackathonsRowmaterialsymbol;
