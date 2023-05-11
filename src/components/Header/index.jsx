import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
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
          <div className="md:h-7 h-[29px] relative w-[30px]">
            <Img
              src="images/img_globe.svg"
              className="absolute h-7 inset-y-[0] left-[0] my-auto w-7"
              alt="globe"
            />
            <Text
              className="absolute bg-red_700 flex font-roboto font-semibold h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white_A700 top-[0] w-4"
              variant="body2"
            >
              1
            </Text>
          </div>
          <Img
            src="images/img_notification.svg"
            className="h-6 w-auto"
            alt="notification"
          />
          <Img
            src="images/img_mail.svg"
            className="h-[18px] w-auto"
            alt="mail"
          />
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

Header.defaultProps = {};

export default Header;
