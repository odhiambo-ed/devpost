import React from "react";

import { Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ProjectPageProjectInfoPage = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-roboto items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <Header1 className="bg-black_900 flex gap-4 h-[70px] md:h-auto items-center justify-center px-4 md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-5 h-[630px] md:h-auto items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <div className="bg-black_900 flex flex-col h-[630px] md:h-auto items-start justify-start w-[200px]">
            <div className="flex flex-col items-center justify-start px-2 py-1 w-full">
              <Text
                className="font-bold text-left text-white_A700 w-auto"
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
                className="font-normal not-italic text-blue_gray_100 text-left w-auto"
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
          <div className="flex flex-1 flex-col h-full items-start justify-start px-2 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="border-b border-blue_gray_100 border-solid flex flex-col items-center justify-end w-full">
                <div className="flex flex-col h-full items-center justify-start py-2 w-full">
                  <Text
                    className="font-bold text-gray_100 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Project Info
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                <div className="flex flex-col items-start justify-center w-full">
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Cover Image
                  </Text>
                </div>
                <Img
                  src="images/img_frame106.png"
                  className="h-[100px] md:h-auto object-cover rounded w-[177px] sm:w-full"
                  alt="frame106"
                />
              </div>
              <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="flex flex-col items-start justify-center w-full">
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Project Name
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                    name="textbox"
                    placeholder="1View"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineBluegray400_1"
                  ></Input>
                  <Text
                    className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Description
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                    name="weekday"
                    placeholder="Make your Dream View in monday to manage, update and track everything at one single place."
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineBluegray400_1"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectPageProjectInfoPage;
