import React from "react";

import { Text } from "components";

const HackathonsFilteritem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-6 md:h-auto items-center justify-center w-6">
          <div className="border border-blue_gray_100 border-solid h-4 rounded w-4"></div>
        </div>
        <Text
          className="font-normal font-roboto not-italic text-gray_100 text-left w-auto"
          as="h4"
          variant="h4"
        >
          {props?.location}
        </Text>
      </div>
    </>
  );
};

HackathonsFilteritem.defaultProps = { location: "Online" };

export default HackathonsFilteritem;
