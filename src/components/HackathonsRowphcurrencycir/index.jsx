import React from "react";

import { Img, Text } from "components";

const HackathonsRowphcurrencycir = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_phcurrencycir.svg"
          className="h-6 w-6"
          alt="phcurrencycir"
        />
        <Text
          className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
          as="h3"
          variant="h3"
        >
          {props?.prizes}
        </Text>
      </div>
    </>
  );
};

HackathonsRowphcurrencycir.defaultProps = { prizes: "Prizes" };

export default HackathonsRowphcurrencycir;
