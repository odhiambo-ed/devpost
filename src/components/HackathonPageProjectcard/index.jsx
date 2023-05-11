import React from "react";

import { Img, List, Text } from "components";

const HackathonPageProjectcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[180px] h-[196px] relative w-[28%] md:w-full">
          <Img
            src="images/img_preview.png"
            className="absolute bottom-[0] h-[180px] object-cover right-[0] rounded w-[300px]"
            alt="preview"
          />
          <div className="absolute bg-orange_300 flex flex-col items-center justify-center left-[0] px-4 py-1 rotate-[45deg] top-[0] w-[102px]">
            {!!props?.winner ? (
              <Text
                className="font-bold font-roboto text-center text-gray_800 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.winner}
              </Text>
            ) : null}
          </div>
        </div>
        <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
          <div className="flex flex-col items-center justify-start py-2 w-full">
            <Text
              className="font-roboto text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {props?.p1view}
            </Text>
          </div>
          <div className="flex flex-col h-full items-center justify-start py-2 w-full">
            <Text
              className="font-normal font-roboto max-w-[636px] md:max-w-full not-italic text-gray_100 text-left"
              as="h4"
              variant="h4"
            >
              {props?.weekday}
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-4 h-8 md:h-auto items-center justify-start w-full">
            <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_favorite.svg"
                className="h-[18px] w-5"
                alt="favorite"
              />
              <Text
                className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {props?.eight}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
              <Img src="images/img_menu.svg" className="h-5 w-5" alt="menu" />
              <Text
                className="font-bold font-roboto text-blue_gray_100 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {props?.six}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_settings.svg"
                className="h-6 w-6"
                alt="settings"
              />
              <Text
                className="font-bold font-roboto h-[17px] text-green_A700 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {props?.eightytwo}
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-green_A700 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {props?.price}
              </Text>
            </div>
            <div className="flex flex-1 flex-row gap-2 h-full items-center justify-end rounded w-full">
              <Img
                src="images/img_trophy.svg"
                className="h-4 w-4"
                alt="trophy"
              />
              <Text
                className="font-roboto font-semibold text-left text-yellow_700 w-auto"
                as="h5"
                variant="h5"
              >
                {props?.appformarketplaOne}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex-col gap-2 grid h-[180px] items-start w-[200px]"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 w-full">
            <Img
              src="images/img_avatar_36x36.png"
              className="h-9 md:h-auto rounded-[50%] w-9"
              alt="avatar"
            />
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="font-bold font-roboto text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                {props?.johndoe}
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.frontenddevelopOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 w-full">
            <Img
              src="images/img_avatar_1.png"
              className="h-9 md:h-auto rounded-[50%] w-9"
              alt="avatar"
            />
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="font-bold font-roboto text-left text-white_A700 uppercase w-auto"
                as="h5"
                variant="h5"
              >
                {props?.laverneaudet}
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-blue_gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.uiuxdesigner}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HackathonPageProjectcard.defaultProps = {
  p1view: "1View",
  weekday:
    "Make your Dream View in monday to manage, update and track everything at one single place.",
  eight: "8",
  six: "6",
  eightytwo: "82",
  price: "Judge 64 | Participant 18",
  appformarketplaOne: "App for marketplace",
  johndoe: "JOHN DOE",
  frontenddevelopOne: "Frontend Developer",
  laverneaudet: "Laverne Audet",
  uiuxdesigner: "UI / UX Designer",
};

export default HackathonPageProjectcard;
