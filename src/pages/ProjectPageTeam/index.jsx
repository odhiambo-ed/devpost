import React from "react";

import { Img, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ProjectPageTeamPage = () => {
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
                className="font-bold text-left text-white_A700 w-auto"
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
                    Team
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2 items-center justify-start w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-2 w-[42%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-blue_gray_900 flex flex-row gap-2 items-center justify-start p-4 rounded w-[200px]">
                  <Img
                    src="images/img_avatar_36x36.png"
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    alt="avatar"
                  />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      JOHN DOE
                    </Text>
                    <Text
                      className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Frontend Developer
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray_900 flex flex-row gap-2 items-center justify-start p-4 rounded w-[200px]">
                  <Img
                    src="images/img_avatar_1.png"
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    alt="avatar"
                  />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="font-bold text-left text-white_A700 uppercase w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Laverne Audet
                    </Text>
                    <Text
                      className="font-normal not-italic text-blue_gray_100 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      UI / UX Designer
                    </Text>
                  </div>
                </div>
              </List>
              <div className="border border-blue_gray_400 border-solid flex flex-col h-[50px] md:h-auto items-center justify-center p-2.5 rounded w-[200px]">
                <Img
                  src="images/img_icbaselineplus.svg"
                  className="h-9 w-9"
                  alt="icbaselineplus"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-black_900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectPageTeamPage;
