import React from "react";

import { Img, Line, Text } from "components";

const MainPageAppheader = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          src="images/img_logo.png"
          className="h-8 md:h-auto object-cover w-[165px] sm:w-full"
          alt="logo"
        />
        <div className="flex flex-row gap-4 h-full items-center justify-end w-full">
          <div className="flex flex-col gap-[26px] h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-center text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              {props?.hackathons}
            </Text>
            {!!props?.active ? (
              <Line className="bg-white_A700 h-1 w-full" />
            ) : null}
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              {props?.organizations}
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              {props?.signin}
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

MainPageAppheader.defaultProps = {
  hackathons: "Hackathons",
  organizations: "Organizations",
  signin: "Sign In",
};

export default MainPageAppheader;
