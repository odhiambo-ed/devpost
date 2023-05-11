import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
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
              Hackathons
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              Projects
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              Events
            </Text>
          </div>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center">
            <Text
              className="font-medium font-roboto text-blue_gray_100 text-center w-auto"
              as="h4"
              variant="h4"
            >
              Jobs
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-8 h-full items-center justify-end w-full">
          <Img src="images/img_globe.svg" className="h-7 w-7" alt="globe" />
          <Img
            src="images/img_notification.svg"
            className="h-6 w-auto"
            alt="notification"
          />
          <div className="h-6 md:h-[18px] relative w-[6%]">
            <Img
              src="images/img_mail.svg"
              className="absolute bottom-[0] h-[18px] left-[0] w-auto"
              alt="mail"
            />
            <Text
              className="absolute bg-green_A700 flex font-roboto font-semibold h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white_A700 top-[0] w-4"
              variant="body2"
            >
              2
            </Text>
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

Header1.defaultProps = {};

export default Header1;
