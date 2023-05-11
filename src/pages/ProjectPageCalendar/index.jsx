import React from "react";

import { List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomePageCalendar from "components/HomePageCalendar";

const ProjectPageCalendarPage = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <Header1 className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[630px] md:h-auto items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <div className="bg-black_900 flex flex-col h-[630px] md:h-auto items-start justify-start w-[200px]">
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Project Info
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Team
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Project Links
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-bold text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Calendar
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Presentation
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 h-full items-start justify-start px-2 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="border-b border-blue_gray_100 border-solid flex flex-col items-center justify-end w-full">
                <div className="flex flex-col h-full items-center justify-start py-2 w-full">
                  <Text
                    className="font-bold text-gray_100 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Calendar
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black_900 flex md:flex-col flex-row gap-4 items-center justify-start py-4 rounded w-full">
              <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                <HomePageCalendar
                  className="bg-black_900 flex flex-col h-[300px] md:h-auto items-center justify-start w-full sm:w-full"
                  month="February 2023"
                  mon="Mon"
                  tue="Tue"
                  wed="Wed"
                  thu="Thu"
                  fri="Fri"
                  thirty="30"
                  thirtyone="31"
                  one="1"
                  two="2"
                  three="3"
                  six="6"
                  seven="7"
                  eight="8"
                  nine="9"
                  ten="10"
                  thirteen="13"
                  framefiftyseven="14"
                  fifteen="15"
                  sixteen="16"
                  seventeen="17"
                  twenty="20"
                  twentyone="21"
                  twentytwo="22"
                  twentythree="23"
                  twentyfour="24"
                  twentyseven="27"
                  twentyeight="28"
                  one1="1"
                  two1="2"
                  three1="3"
                />
              </div>
              <List
                className="flex-1 flex-col gap-2 grid h-full items-center px-2 w-full"
                orientation="vertical"
              >
                <div className="bg-blue_gray_900 flex flex-1 sm:flex-col flex-row gap-2 items-center justify-start my-0 p-2 rounded w-full">
                  <div className="bg-blue_A400 flex flex-col h-[42px] md:h-auto items-center justify-center rounded-[50%] w-[42px]">
                    <Text
                      className="font-bold text-blue_gray_100 text-center"
                      as="h3"
                      variant="h3"
                    ></Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="font-bold text-center text-gray_100 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Submissions Start
                    </Text>
                    <Text
                      className="font-bold text-blue_gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      monday Apps Challenge
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-bold text-blue_gray_100 text-center w-auto"
                      as="h6"
                      variant="h6"
                    >
                      9:20 AM
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray_900 flex flex-1 sm:flex-col flex-row gap-2 items-center justify-start my-0 p-2 rounded w-full">
                  <div className="bg-red_700 flex flex-col h-[42px] md:h-auto items-center justify-center rounded-[50%] w-[42px]">
                    <Text
                      className="font-bold text-blue_gray_100 text-center"
                      as="h3"
                      variant="h3"
                    ></Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="font-bold text-center text-gray_100 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Submissions End
                    </Text>
                    <Text
                      className="font-bold text-blue_gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      monday Apps Challenge
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-bold text-blue_gray_100 text-center w-auto"
                      as="h6"
                      variant="h6"
                    >
                      11:40 AM
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectPageCalendarPage;
