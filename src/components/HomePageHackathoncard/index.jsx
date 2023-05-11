import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const HomePageHackathoncard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-60 md:h-auto items-center justify-start rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-[480px] md:w-full"
          style={{ backgroundImage: "url('images/img_frame42_240x480.png')" }}
        >
          <div className="flex flex-col items-start justify-start p-4 rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg w-full">
            <Button
              className="cursor-pointer font-roboto font-semibold leading-[normal] min-w-[113px] text-base text-center text-white_A700 w-auto"
              shape="RoundedBorder8"
              size="sm"
              variant="FillIndigoA200"
            >
              {props?.comingSoon}
            </Button>
            <Text
              className="bg-blue_gray_900_7f font-bold font-roboto justify-center mt-[59px] p-1 rounded self-stretch text-gray_100 text-left w-auto"
              as="h3"
              variant="h3"
            >
              {props?.weekday}
            </Text>
            <Text
              className="bg-blue_gray_900_7f font-roboto font-semibold justify-center mt-1 p-1 rounded self-stretch text-gray_100 text-left w-auto"
              as="h4"
              variant="h4"
            >
              {props?.framefortysix}
            </Text>
            <Text
              className="bg-blue_gray_900_7f font-normal font-roboto justify-center mb-3 mt-5 not-italic p-1 rounded self-stretch text-gray_100 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.framefortysixOne}
            </Text>
          </div>
        </div>
        <div className="bg-gray_900 flex flex-col items-start justify-start py-2 w-[480px] md:w-full">
          <List
            className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 h-10 justify-start px-4 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[11px] h-full items-center justify-center sm:ml-[0] w-full">
              <Text
                className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.organizedby}
              </Text>
              <Line className="bg-cyan_300 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
              <Text
                className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.totalprize}
              </Text>
              <Line className="bg-cyan_300 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
              <Text
                className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.location}
              </Text>
              <Line className="bg-cyan_300 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-3 h-full items-center justify-center sm:ml-[0] w-full">
              <Text
                className="font-roboto font-semibold text-center text-cyan_300 w-auto"
                as="h6"
                variant="h6"
              >
                {props?.date}
              </Text>
              <Line className="bg-cyan_300 h-px w-full" />
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Img
                src="images/img_2560pxmondaylogo.png"
                className="h-4 md:h-auto object-cover w-[85px] sm:w-full"
                alt="2560pxmondaylog"
              />
            </div>
            <List
              className="sm:flex-1 sm:flex-col flex-row gap-px grid grid-cols-3 w-3/4 sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-full items-center justify-center w-full">
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.price}
                </Text>
              </div>
              <div className="flex flex-col h-full items-center justify-center w-full">
                <Text
                  className="font-roboto font-semibold text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.online}
                </Text>
              </div>
              <div className="flex flex-col h-full items-center justify-center w-full">
                <Text
                  className="font-roboto font-semibold text-center text-gray_100"
                  as="h6"
                  variant="h6"
                >
                  {props?.feb25262023}
                </Text>
              </div>
            </List>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
            <div className="flex flex-1 flex-col gap-[11px] h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.opento}
              </Text>
              <Line className="bg-cyan_300 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-[11px] h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-cyan_300 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.participants}
              </Text>
              <Line className="bg-cyan_300 h-px w-full" />
            </div>
            <Input
              wrapClassName="sm:flex-1 w-[54%] sm:w-full"
              className="font-roboto font-semibold leading-[normal] md:h-auto p-0 placeholder:text-cyan_300 sm:h-auto text-cyan_300 text-left text-xs w-full"
              name="frameFifty"
              placeholder="Tags"
              size="md"
              variant="UnderLineCyan300"
            ></Input>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 h-10 md:h-auto items-center justify-start px-4 w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <div className="md:h-[15px] h-[21px] relative w-[58%]">
                <Text
                  className="absolute bottom-[0] font-roboto font-semibold left-[0] text-gray_100 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  {props?.everyone}
                </Text>
                <div className="absolute bg-blue_gray_900_cc flex flex-col h-3 md:h-auto items-center justify-center right-[0] rounded-[50%] top-[0] w-3">
                  <Text
                    className="font-medium font-roboto text-left text-white_A700 w-auto"
                    variant="body2"
                  >
                    {props?.one}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Text
                className="font-roboto font-semibold text-gray_100 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.sixhundredninetyeight}
              </Text>
            </div>
            <div className="flex flex-1 flex-row gap-1 h-10 md:h-auto items-center justify-center w-full">
              <Text
                className="bg-indigo_A200 font-roboto font-semibold justify-center p-1 rounded self-stretch text-left text-white_A700 w-auto"
                as="h6"
                variant="h6"
              >
                {props?.framefiftyfive}
              </Text>
              <Text
                className="bg-indigo_A200 font-roboto font-semibold justify-center p-1 rounded self-stretch text-left text-white_A700 w-auto"
                as="h6"
                variant="h6"
              >
                {props?.framefiftysix}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start px-4 w-full">
            <Button
              className="cursor-pointer flex-1 font-normal font-roboto leading-[normal] not-italic text-center text-cyan_300 text-sm w-full"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineCyan300"
            >
              {props?.details}
            </Button>
            <Button
              className="cursor-pointer flex-1 font-normal font-roboto leading-[normal] not-italic text-center text-sm text-white_A700 w-full"
              shape="RoundedBorder4"
              size="sm"
              variant="FillCyan300"
            >
              {props?.apply}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomePageHackathoncard.defaultProps = {
  comingSoon: "Coming Soon",
  weekday: "monday Apps Challenge",
  framefortysix: "Dream it, build it",
  framefortysixOne:
    "Build any app you can dream of and drive away in a Tesla X",
  organizedby: "Organized by",
  totalprize: "Total Prize",
  location: "Location",
  date: "Date",
  price: "150.000 $",
  online: "Online",
  feb25262023: (
    <>
      Feb 25 – 26
      <br />
      2023
    </>
  ),
  opento: "Open To",
  participants: "Participants",
  everyone: "Everyone",
  one: "?",
  sixhundredninetyeight: "698",
  framefiftyfive: "Web",
  framefiftysix: "Productivity",
  details: "Details",
  apply: "Apply",
};

export default HomePageHackathoncard;
