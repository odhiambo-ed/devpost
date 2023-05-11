import React from "react";

import { Img, Text } from "components";

const HomePageAppheaderlogin = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          src="images/img_logo.png"
          className="h-8 md:h-auto object-cover w-[165px] sm:w-full"
          alt="logo"
        />
        <div className="flex flex-row gap-4 h-full items-center justify-start w-full">
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              {props?.hackathons}
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              {props?.projects}
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              {props?.events}
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              {props?.jobs}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-8 h-full items-center justify-end w-full">
          <div className="md:h-7 h-[29px] relative w-[30px]">
            <Img
              src="images/img_globe.svg"
              className="absolute h-7 inset-y-[0] left-[0] my-auto w-7"
              alt="globe"
            />
            {!!props?.badge ? (
              <Text
                className="absolute bg-red_700 flex font-roboto font-semibold h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white_A700 top-[0] w-4"
                variant="body2"
              >
                {props?.badge}
              </Text>
            ) : null}
          </div>
          <div className="md:h-6 h-[26px] relative w-[27px]">
            <Img
              src="images/img_notification.svg"
              className="absolute bottom-[0] h-6 left-[0] w-auto"
              alt="notification"
            />
            {!!props?.badgeOne ? (
              <Text
                className="absolute bg-yellow_900 flex font-roboto font-semibold h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white_A700 top-[0] w-4"
                variant="body2"
              >
                {props?.badgeOne}
              </Text>
            ) : null}
          </div>
          <div className="h-6 md:h-[18px] relative w-[6%]">
            <Img
              src="images/img_mail.svg"
              className="absolute bottom-[0] h-[18px] left-[0] w-auto"
              alt="mail"
            />
            {!!props?.badgeTwo ? (
              <Text
                className="absolute bg-green_A700 flex font-roboto font-semibold h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white_A700 top-[0] w-4"
                variant="body2"
              >
                {props?.badgeTwo}
              </Text>
            ) : null}
          </div>
          <Img
            src="images/img_avatar.png"
            className="h-8 md:h-auto rounded-[50%] w-8"
            alt="avatar"
          />
        </div>
      </header>
    </>
  );
};

HomePageAppheaderlogin.defaultProps = {
  hackathons: "Hackathons",
  projects: "Projects",
  events: "Events",
  jobs: "Jobs",
};

export default HomePageAppheaderlogin;
